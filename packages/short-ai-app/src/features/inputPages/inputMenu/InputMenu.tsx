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


const options = [
    'Текст',
    'Ссылка',
    'Документ'
];

const optionMap: {[key: string]: number} = {
    'text': 0,
    'link': 1,
    'file': 2
}


export function InputMenu(page: string) {
    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };


    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div>
            <ToolBar>
                <Button onClick={handleClickListItem}
                        startIcon={selectIcon(optionMap[page])}
                        endIcon={<TickIcon />}>
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
            </ToolBar>
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

const ToolBar = styled.div`
  display: flex;
  //width: 100%;
  //flex-direction: row;
  //justify-content: space-between;
`