import React from 'react'
import {Button, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";
import { Flex, Pad, Spacer } from '../../primitives'
import {InputMenu} from "../inputMenu/InputMenu";


export const TextPage = () => {


    return (
        <div>
            {InputMenu('text')}
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