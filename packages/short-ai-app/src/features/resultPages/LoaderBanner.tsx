import styled from '@emotion/styled'
import { CircularProgress, Typography } from '@mui/material'
import { RFCC } from '../../types/react'
import { Spacer } from '../primitives'
import { Image } from '@mui/icons-material'
import { blue } from '../themingAndStyling/theme'

export const LoaderBanner: RFCC<{ statusText: string }> = ({ statusText }) => {
  return (
    <div>
      <Wrapper>
        <CircularProgress thickness={4} size={100} />
        <Spacer space={40} />
        <Typography>{statusText}</Typography>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 100px);
  flex-direction: column;
  justify-content: center;
`
