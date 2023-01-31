import os
import re
import nltk
import PyPDF4
import docx2txt
import pymorphy2
import pytesseract
import pandas as pd
from tqdm import tqdm
from nltk.corpus import stopwords
from typing import List, Dict, Any
from pdf2image import convert_from_path
from striprtf.striprtf import rtf_to_text
from sklearn.feature_extraction.text import TfidfVectorizer
import io
from pdfminer.pdfpage import PDFPage
from pdfminer.converter import TextConverter
from pdfminer.pdfinterp import PDFPageInterpreter
from pdfminer.pdfinterp import PDFResourceManager
import json
import docx


def get_docs_as_string(path_to_file: str) -> str:
    """
    :ru Этот метод читает файлы типа ".docs" и преобразует их в строку.
    :en This method reads files of the ".docs" type and converts them to a string.

    :param path_to_file:ru Путь до файла, который необходимо открыть.
    :param path_to_file:en The path to the file to be opened.
    :type path_to_file: str
    """
    if not isinstance(path_to_file, str):
        raise TypeError(f"The node 'path_to_file' should be 'str', but got {type(path_to_file).name}!")
    if not path_to_file.endswith('.doc') and not path_to_file.endswith('.docx'):
        raise ValueError("The 'path_to_file' should ends with '.doc' or '.docx'!")
    if not os.path.exists(path_to_file):
        raise Exception(f"It is not possible to load document the specified path "
                        f"'{path_to_file}', since it does not exist!")
    return docx2txt.process(path_to_file)
    
    
 def get_rtf_as_string(path_to_file: str) -> str:
   """
   :ru Этот метод читает файлы типа ".rtf" и преобразует их в строку.
   :en This method reads files of the ".rtf" type and converts them to a string.

   :param path_to_file:ru Путь до файла, который необходимо открыть.
   :param path_to_file:en The path to the file to be opened.
   :type path_to_file: str
   """
   if not isinstance(path_to_file, str):
       raise TypeError(f"The node 'path_to_file' should be 'str', but got {type(path_to_file).__name__}!")
   if not path_to_file.endswith('.rtf'):
       raise ValueError("The 'path_to_file' should ends with '.rtf'!")
   if not os.path.exists(path_to_file):
       raise Exception(f"It is not possible to load document the specified path "
                        f"'{path_to_file}', since it does not exist!")
   with open(path_to_file) as file:
       return rtf_to_text(file.read())
    
    
  def get_pdf_as_string(path_to_file: str) -> str:
   """
   :ru Этот метод читает файлы типа ".pdf" и преобразует их в строку.
   :en This method reads files of the ".pdf" type and converts them to a string.
   :param path_to_file:ru Путь до файла, который необходимо открыть.
   :param path_to_file:en The path to the file to be opened.
   :type path_to_file: str
   """
   if not isinstance(path_to_file, str):
       raise TypeError(f"The node 'path_to_file' should be 'str', but got {type(path_to_file).__name__}!")
   if not path_to_file.endswith('.pdf'):
       raise ValueError("The 'path_to_file' should ends with '.pdf'!")
   if not os.path.exists(path_to_file):
       raise Exception(f"It is not possible to load document the specified path "
                        f"'{path_to_file}', since it does not exist!")
   resource_manager = PDFResourceManager()
   fake_file_handle = io.StringIO()
   converter = TextConverter(resource_manager, fake_file_handle)
   page_interpreter = PDFPageInterpreter(resource_manager, converter)
   with open(path_to_file, 'rb') as fh:
       for page in PDFPage.get_pages(fh, caching=True, check_extractable=True):
           page_interpreter.process_page(page)
       text = fake_file_handle.getvalue()
   converter.close()
   fake_file_handle.close()
   return text if text else ""
    
    
class TextCleaner:
   def __init__(self):
       self.__is_fit = False
       self.__words_meaning = {}
       self.__morph = pymorphy2.MorphAnalyzer()
       self.__stopwords = nltk.download('stopwords')
       self.__vectorizer = TfidfVectorizer(use_idf=True, lowercase=True)

   @property
   def is_fit(self) -> bool:
       return self.__is_fit

   @property
   def feature_names(self) -> List[str]:
       return self.__vectorizer.get_feature_names()

   @property
   def words_meaning(self) -> Dict[str, float]:
       if not self.__is_fit:
           raise Exception('At first, you need to train TfIdf')
       return self.__words_meaning

   def fit(self, texts: List[str], is_lem: bool = False, is_nums: bool = False, is_letters: bool = False) -> None:
        """
        :ru Обучаем TfIdf
        :en Learn TfIdf

        :param texts:ru Обучающие тексты
        :param texts:en Educational texts
        :type texts: List[str]

        :param is_nums:ru Флаг, отвечающий за необходимость очистки чисел из строки.
        :param is_nums:en A flag that is responsible for the need to clear numbers from a string.
        :type is_nums: bool
        :default is_nums: False

        :param is_letters:ru Флаг, отвечающий за необходимость очистки букв из строки.
        :param is_letters:en A flag that is responsible for the need to clear letters from a string.
        :type is_letters: bool
        :default is_letters: False

        """
       texts = [self.clean_string(text, is_nums=is_nums, is_letters=is_letters) for text in texts]

       if is_lem:
           new_texts = []
           for text in texts:
               new_texts.append(" ".join([self.__morph.parse(word)[0].normal_form for word in text.split(' ')]))
           texts = new_texts

       self.__vectorizer.fit(texts)
       self.__is_fit = True
       self.update_words_meaning()

   def transform(self, text: str,  threshold: float, is_lem: bool = False) -> List[str]:
       new_text = []
       for word in text.split(' '):
           if word.isalpha():
               normal_word = self.__morph.parse(word)[0].normal_form
               if normal_word in self.words_meaning and self.words_meaning[normal_word] >= threshold:
                   new_text.append(normal_word if is_lem else word)
       return new_text

   def update_words_meaning(self) -> None:
        """
        :ru Этот метод формирует словарь, в котором каждому слову сопоставлена его значимость по мере tf-idf.
        :en This method forms a dictionary in which each word is associated with its significance as tf-idf.
        """
       if not self.__is_fit:
           raise Exception('At first, you need to train TfIdf')
       idf = self.__vectorizer.idf_
       vocabulary = self.__vectorizer.vocabulary_
       words_meaning = {word: idf[vocabulary[word]] for word in vocabulary}
       self.__words_meaning = dict(sorted(words_meaning.items(), key=lambda x: x[1], reverse=True))

   def get_stopwords(self, threshold: float) -> List[str]:
        """
        :ru Этот метод возвращает список слов, чья значимость выше указанного порога 'threshold'.
        :en This method returns a list of words whose significance is higher than the specified threshold 'threshold'.

        :param threshold:ru Пороговое значение.
        :param threshold:en Threshold value.
        :type threshold: float
        """
       return [word for word in self.words_meaning if self.words_meaning[word] < threshold]

   @staticmethod
   def clean_string(text: str, is_nums: bool = False, is_letters: bool = False) -> str:
        """
        :ru Этот метод очищает поступающий к нему текст (строку) от знаков табуляции.
        :en This method clears the incoming text (string) from tab characters.

        :param text:ru Строка, которую необходимо очистить от знаков табуляции.
        :param text:en A string that needs to be cleared of tab characters.
        :type text: str

        :param is_nums:ru Флаг, отвечающий за необходимость очистки чисел из строки.
        :param is_nums:en A flag that is responsible for the need to clear numbers from a string.
        :type is_nums: bool
        :default is_nums: False

        :param is_letters:ru Флаг, отвечающий за необходимость очистки букв из строки.
        :param is_letters:en A flag that is responsible for the need to clear letters from a string.
        :type is_letters: bool
        :default is_letters: False
        """
       if is_letters:
           text = re.sub('[^A-Za-zа-яА-Я]+', ' ', text)
       if is_nums:
           text = re.sub('[0-9]+', ' ', text)
       while "  " in text:
           text = text.replace("\n", " ").replace("\r", " ").replace("\t", " ").replace("  ", " ")
       return text
