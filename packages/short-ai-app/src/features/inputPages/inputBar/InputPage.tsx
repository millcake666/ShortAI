import styled from '@emotion/styled'
import {
  Button,
  InputAdornment,
  ListItemIcon,
  Menu,
  MenuItem,
  TextField,
  Typography
} from '@mui/material'
import { grey } from '@mui/material/colors'
import React, { createRef, useEffect, useState } from 'react'
import Dropzone from 'react-dropzone'
import { Col, Row } from 'react-grid-system'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '../../../consts/routes'
import { RFCC } from '../../../types/react'
import {
  useCreateTaskTasksPost,
  useUploadFileTasksTaskIdFilePost
} from '../../api/generated/endpoints'
import {
  BodyCreateFileTasksTaskIdUploadFilePost,
  BodyUploadFileTasksTaskIdUploadFilePost,
  TaskIn,
  TaskType
} from '../../api/generated/models'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { BookmarkIcon } from '../../navigation/BookmarkIcon'
import { Flex, Spacer } from '../../primitives'
import { blue } from '../../themingAndStyling/theme'
import { DropInput } from '../filePage/DropInput'
import { FileIcon } from '../icon/FileIcon'
import { FileIconSmall } from '../icon/FileIconSmall'
import { LinkIcon } from '../icon/LinkIcon'
import { LinkIconSmall } from '../icon/LinkIconSmall'
import { LinkMicroIcon } from '../icon/LinkMicroIcon'
import { SadIcon } from '../icon/SadIcon'
import { TextIcon } from '../icon/TextIcon'
import { TextIconSmall } from '../icon/TextIconSmall'
import { TickIcon } from '../icon/TickIcon'
import { UploadIcon } from '../icon/UploadIcon'
import { UploadIconDisable } from '../icon/UploadIconDisable'

const options = ['Текст', 'Ссылка', 'Документ']

const optionsDepth = ['нормальная', 'сильная', 'максимальная']

const optionMap: { [key: string]: number } = {
  text: 0,
  url: 1,
  file: 2
}

export const InputPage: RFCC<{ page: TaskType }> = ({ page }) => {
  const navigate = useNavigate()
  const [uploadFile, setUploadFile] = useState(null)
  const [temporary_idLS, setTemporaryIdLS] = useLocalStorage('temporary_id', '')

  // хендлер изменения поля ввода текста
  const [valueText, setValueText] = useState('')
  const textValueHandler = (event: any) => {
    setValueText(event.target.value)
    // console.log(event.target.value)
  }

  // хендлер изменения поля ввода ссылки
  const [valueUrl, setValueUrl] = useState('')
  const urlValueHandler = (event: any) => {
    setValueUrl(event.target.value)
    // console.log(event.target.value)
  }

  // хранение task id

  // upload logic
  const { mutate: uploadMutation } = useUploadFileTasksTaskIdFilePost()

  // create task post
  const { mutate: taskCreateMutation, data } = useCreateTaskTasksPost({
    mutation: {
      onSuccess: ({ data: _data }) => {
        if (page == 'file' && _data && uploadFile != null) {
          const taskId: number = _data.id as any

          uploadMutation({ taskId, data: { file: uploadFile } })
          console.log(_data.id)
        } else if (page != 'file') {
          navigate(ROUTES.RESULT, { state: { taskId: _data.id } })
        }
      }
    }
  })
  const handlerCreateTask = (file: Blob | null) => {
    const task: TaskIn = {
      type: page,
      rate: selectedIndexDepth
    }
    switch (page) {
      case 'text': {
        task.text = valueText
        break
      }
      case 'url': {
        task.url = valueUrl
        break
      }
    }
    taskCreateMutation({ data: task })
    console.log(data)
    console.log(file)
  }

  // меню выбора вкладки инпута
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  // меню выбора интенсивности сжатия
  const [anchorElDepth, setAnchorElDepth] = React.useState<null | HTMLElement>(null)
  const [selectedIndexDepth, setSelectedIndexDepth] = React.useState(0)
  const openDepth = Boolean(anchorElDepth)
  const handleClickListItemDepth = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElDepth(event.currentTarget)
  }
  const handleMenuItemClickDepth = (
    eventDepth: React.MouseEvent<HTMLElement>,
    indexDepth: number
  ) => {
    setSelectedIndexDepth(indexDepth)
    setAnchorElDepth(null)
  }
  const handleCloseDepth = () => {
    setAnchorElDepth(null)
  }

  // для работы дроп зоны
  const dropzoneRef: any = createRef()
  const openDialog = () => {
    if (dropzoneRef.current) {
      dropzoneRef.current.open()
    }
  }

  useEffect(() => {
    if (data?.data.temporary_id) {
      setTemporaryIdLS(data?.data.temporary_id)
    }
  }, [data])

  return (
    <div>
      <BarWrap>
        <Row style={{ justifyContent: 'center' }}>
          <Col md={12} lg={3}>
            <Button
              onClick={handleClickListItem}
              startIcon={selectIcon(optionMap[page])}
              endIcon={<TickIcon />}
              style={{ paddingLeft: 0 }}
            >
              <Typography variant={'h4'}>{options[optionMap[page]]}</Typography>
            </Button>
            <Menu
              sx={{ backdropFilter: 'blur(0px)' }}
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'lock-button',
                role: 'listbox'
              }}
            >
              <MenuItem onClick={() => navigate(ROUTES.TEXT)} disabled={page == 'text'}>
                <ListItemIcon>
                  <TextIconSmall />
                </ListItemIcon>
                <Typography variant={'body1'} color={'#000'}>
                  Текст
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => navigate(ROUTES.LINK)} disabled={page == 'url'}>
                <ListItemIcon>
                  <LinkIconSmall />
                </ListItemIcon>
                <Typography variant={'body1'} color={'#000'}>
                  Ссылка
                </Typography>
              </MenuItem>
              <MenuItem onClick={() => navigate(ROUTES.FILE)} disabled={page == 'file'}>
                <ListItemIcon>
                  <FileIconSmall />
                </ListItemIcon>
                <Typography variant={'body1'} color={'#000'}>
                  Документ
                </Typography>
              </MenuItem>
            </Menu>
            <Spacer />
          </Col>

          <Col md={12} lg={6}>
            <Button
              variant={'outlined'}
              size={'medium'}
              onClick={handleClickListItemDepth}
              endIcon={<TickIcon />}
            >
              <Typography variant={'h4'}>
                Интенсивность &nbsp;
                <span style={{ color: blue[500] }}>{optionsDepth[selectedIndexDepth]}</span>
              </Typography>
            </Button>
            <Menu
              sx={{ backdropFilter: 'blur(0px)' }}
              id="lock-menu"
              anchorEl={anchorElDepth}
              open={openDepth}
              onClose={handleCloseDepth}
              MenuListProps={{
                'aria-labelledby': 'lock-button',
                role: 'listbox'
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              {optionsDepth.map((optionDepth, indexDepth) => (
                <MenuItem
                  key={optionDepth}
                  selected={indexDepth === selectedIndexDepth}
                  onClick={(eventDepth) => handleMenuItemClickDepth(eventDepth, indexDepth)}
                >
                  <Typography variant={'h4'}>{optionDepth}</Typography>
                </MenuItem>
              ))}
            </Menu>
            <Spacer />
          </Col>

          <Col md={12} lg={'content'}>
            <Button
              variant={'contained'}
              size={'medium'}
              onClick={() => {
                handlerCreateTask(uploadFile)
              }}
              disabled={valueText == '' && valueUrl == '' && !uploadFile}
            >
              Зашортить
            </Button>
            <Spacer />
          </Col>
        </Row>
      </BarWrap>
      {page == 'text' ? (
        <TextField
          fullWidth
          multiline
          rows={10}
          placeholder="Начните вводить текст"
          value={valueText}
          onChange={textValueHandler}
        />
      ) : page == 'url' ? (
        <TextField
          fullWidth
          multiline
          rows={2}
          placeholder="Вставьте сюда ссылку"
          onChange={urlValueHandler}
          InputProps={{
            startAdornment: (
              <InputAdornment position={'start'}>
                <LinkMicroIcon />
              </InputAdornment>
            )
          }}
        />
      ) : (
        <Dropzone ref={dropzoneRef} noClick noKeyboard>
          {({ getRootProps, getInputProps, acceptedFiles }) => {
            return (
              <div className="container">
                <DropZoneWrap {...getRootProps({ className: 'dropzone' })}>
                  <input {...getInputProps()} />
                  <FileSelector file={acceptedFiles[0]} setUploadFile={setUploadFile} />
                  <Button size={'small'} variant={'outlined'} onClick={openDialog}>
                    <Typography variant={'body1'}>Выберите его</Typography>
                  </Button>
                </DropZoneWrap>
              </div>
            )
          }}
        </Dropzone>
      )}
    </div>
  )
}

const FileSelector: RFCC<{ file: Blob; setUploadFile: any }> = ({ file, setUploadFile }) => {
  useEffect(() => {
    if (file) {
      setUploadFile(file || null)
    }
  }, [file])

  if (file) {
    return (
      <Flex flexDirection={'column'} alignItems={'center'}>
        <UploadIcon />
        <Spacer space={20} />
        <Typography variant={'h4'} textAlign={'center'}>
          {file.name}
        </Typography>
        <Typography variant={'h2'} color={grey[400]} textAlign={'center'}></Typography>
      </Flex>
    )
  } else {
    return (
      <Flex flexDirection={'column'} alignItems={'center'}>
        <UploadIconDisable />
        <Spacer space={20} />
        <Typography variant={'h2'} color={grey[400]} textAlign={'center'}>
          Перетащите файл сюда или
        </Typography>
      </Flex>
    )
  }
}

function selectIcon(selected: number) {
  switch (options[selected]) {
    case options[0]:
      return <TextIcon />
    case options[1]:
      return <LinkIcon />
    case options[2]:
      return <FileIcon />
  }
}

const DropZoneWrap = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  background-color: #fbfbff;
  border: 1px solid #dcdcde;
  border-radius: 25px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0 40px 0;
`

const BarWrap = styled.div``
