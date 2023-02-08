import React from 'react'
import {Button, InputAdornment, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";
import { Flex, Pad, Spacer } from '../../primitives'
import {InputMenu} from "../inputMenu/InputMenu";
import {LinkMicroIcon} from "../icon/LinkMicroIcon";


export const LinkPage = () => {

    return (
        <div>
            {InputMenu('link')}
            <Spacer space={40} />
            <TextField
                fullWidth
                multiline
                rows={2}
                defaultValue=""
                placeholder="Вставьте сюда ссылку"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position={'start'}>
                            <LinkMicroIcon />
                        </InputAdornment>
                    )
                }}
            />
        </div>
    )
}