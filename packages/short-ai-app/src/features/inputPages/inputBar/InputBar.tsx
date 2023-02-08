import styled from '@emotion/styled'
import { Button, ListItemIcon, Menu, MenuItem, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import { Col, Row } from 'react-grid-system'
import { useNavigate } from 'react-router-dom'

import { ROUTES } from '../../../consts/routes'
import { BookmarkIcon } from '../../navigation/BookmarkIcon'
import { Flex, Spacer } from '../../primitives'
import { blue } from '../../themingAndStyling/theme'
import { FileIcon } from '../icon/FileIcon'
import { FileIconSmall } from '../icon/FileIconSmall'
import { LinkIcon } from '../icon/LinkIcon'
import { LinkIconSmall } from '../icon/LinkIconSmall'
import { TextIcon } from '../icon/TextIcon'
import { TextIconSmall } from '../icon/TextIconSmall'
import { TickIcon } from '../icon/TickIcon'

const options = ['Текст', 'Ссылка', 'Документ']

const optionsDepth = ['нормальная', 'сильная', 'максимальная']

const optionMap: { [key: string]: number } = {
  text: 0,
  link: 1,
  file: 2
}

export function InputBar(page: string) {
  const navigate = useNavigate()

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
              <MenuItem onClick={() => navigate(ROUTES.LINK)} disabled={page == 'link'}>
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
            <Button variant={'contained'} size={'medium'}>
              Зашортить
            </Button>
            <Spacer />
          </Col>
        </Row>
      </BarWrap>
    </div>
  )
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

const BarWrap = styled.div``
