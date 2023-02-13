import { Rating, Typography } from '@mui/material'
import { StarIcon } from './icon/StarIcon'
import { Flex, Spacer } from '../primitives'
import styled from '@emotion/styled'
import { useState } from 'react'
import { blue } from '../themingAndStyling/theme'

export const FeedbackStars = () => {
  const [rating, setRating] = useState(false)

  return (
    <div>
      {rating ? (
        <Wrapper>
          <Typography variant={'body1'} color={blue[500]}>
            Спасибо за ваш отзыв!
          </Typography>
          <Typography variant={'body1'}>Мы обязательно учтем его)</Typography>
        </Wrapper>
      ) : (
        <Wrapper>
          <Typography textAlign={'center'} variant={'body1'}>
            Оцените результат
          </Typography>
          <Rating
            value={null}
            icon={StarIcon(true)}
            emptyIcon={StarIcon(false)}
            onClick={() => setRating(true)}
          />
        </Wrapper>
      )}
    </div>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
