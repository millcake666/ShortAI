import React from 'react'
import {Button, List, ListItem, ListItemText, Menu, MenuItem, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";
import { Flex, Pad, Spacer } from '../primitives'
import {TickIcon} from "./TickIcon";
import {TextIconSmall} from "./TextIconSmall]";
import {TextIcon} from "./TextIcon";
import {LinkIcon} from "./LinkIcon";
import {FileIcon} from "./FileIcon";

const options = [
    'Текст',
    'Ссылка',
    'Документ'
];


export const TextPage = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLElement>,
        index: number,
    ) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <div>
            <ToolBar>
                <Button onClick={handleClickListItem}
                        startIcon={setIcon(selectedIndex)}
                        endIcon={<TickIcon />}>
                    <Typography variant={'h4'}>{options[selectedIndex]}</Typography>
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
                    {options.map((option, index) => (
                        <MenuItem
                            key={option}
                            // disabled={index === 0}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                    ))}
                </Menu>
            </ToolBar>
            <Spacer space={40} />
            <TextField
                fullWidth
                multiline
                rows={10}
                defaultValue=""
                placeholder="Начните вводить текст"
            />
        </div>
    )
}

function setIcon(selected: number) {
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