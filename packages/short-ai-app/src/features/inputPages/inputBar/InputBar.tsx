import {Button, ListItemIcon, Menu, MenuItem, Typography} from "@mui/material";
import {TickIcon} from "../icon/TickIcon";
import React from "react";
import {TextIcon} from "../icon/TextIcon";
import {LinkIcon} from "../icon/LinkIcon";
import {FileIcon} from "../icon/FileIcon";
import styled from '@emotion/styled'
import {ROUTES} from "../../../consts/routes";
import {useNavigate} from "react-router-dom";
import {BookmarkIcon} from "../../navigation/BookmarkIcon";
import {grey} from "@mui/material/colors";
import {TextIconSmall} from "../icon/TextIconSmall";
import {LinkIconSmall} from "../icon/LinkIconSmall";
import {FileIconSmall} from "../icon/FileIconSmall";
import {blue} from "../../themingAndStyling/theme";


const options = [
    'Текст',
    'Ссылка',
    'Документ'
];

const optionsDepth = [
    'нормальная',
    'сильная',
    'максимальная'
]

const optionMap: {[key: string]: number} = {
    'text': 0,
    'link': 1,
    'file': 2
}


export function InputBar(page: string) {
    const navigate = useNavigate()

    // меню выбора вкладки инпута
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // меню выбора интенсивности сжатия
    const [anchorElDepth, setAnchorElDepth] = React.useState<null | HTMLElement>(null);
    const [selectedIndexDepth, setSelectedIndexDepth] = React.useState(0);
    const openDepth = Boolean(anchorElDepth);
    const handleClickListItemDepth = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElDepth(event.currentTarget);
    };
    const handleMenuItemClickDepth = (
        eventDepth: React.MouseEvent<HTMLElement>,
        indexDepth: number,
    ) => {
        setSelectedIndexDepth(indexDepth);
        setAnchorElDepth(null);
    };
    const handleCloseDepth = () => {
        setAnchorElDepth(null);
    };


    return (
        <div>
            <BarWrap>
                <Button onClick={handleClickListItem}
                        startIcon={selectIcon(optionMap[page])}
                        endIcon={<TickIcon />}>
                    <Typography variant={'h4'}>{options[optionMap[page]]}</Typography>
                </Button>
                <Menu
                    sx={{backdropFilter: 'blur(0px)'}}
                    id="lock-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'lock-button',
                        role: 'listbox',
                    }}
                >
                    <MenuItem onClick={() => navigate(ROUTES.TEXT)}
                              disabled={page == 'text'}>
                        <ListItemIcon>
                                <TextIconSmall/>
                        </ListItemIcon>
                        <Typography variant={'body1'} color={'#000'}>Текст</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => navigate(ROUTES.LINK)}
                              disabled={page == 'link'}>
                        <ListItemIcon>
                            <LinkIconSmall />
                        </ListItemIcon>
                        <Typography variant={'body1'} color={'#000'}>Ссылка</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => navigate(ROUTES.FILE)}
                              disabled={page == 'file'}>
                        <ListItemIcon>
                            <FileIconSmall />
                        </ListItemIcon>
                        <Typography variant={'body1'} color={'#000'}>Документ</Typography>
                    </MenuItem>
                </Menu>

                <Button variant={'outlined'}
                        size={'medium'}
                        onClick={handleClickListItemDepth}
                        endIcon={<TickIcon />}>
                    <Typography variant={'h4'}>Интенсивность &nbsp;
                        <span style={{color: blue[500]}}>
                            {optionsDepth[selectedIndexDepth]}
                        </span>
                    </Typography>
                </Button>
                <Menu
                    sx={{backdropFilter: 'blur(0px)'}}
                    id="lock-menu"
                    anchorEl={anchorElDepth}
                    open={openDepth}
                    onClose={handleCloseDepth}
                    MenuListProps={{
                        'aria-labelledby': 'lock-button',
                        role: 'listbox',
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
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

                <Button variant={'contained'} size={"medium"}>
                    Зашортить
                </Button>
            </BarWrap>
        </div>
    )
}

function selectIcon(selected: number) {
    switch (options[selected]) {
        case (options[0]):  return (<TextIcon />)
        case (options[1]):  return (<LinkIcon />)
        case (options[2]):  return (<FileIcon />)
    }
}

const BarWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`