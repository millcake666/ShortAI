import React from 'react'
import {Button, InputAdornment, TextField, Typography} from "@mui/material";
import styled from "@emotion/styled";
import { Flex, Pad, Spacer } from '../../primitives'
import {InputMenu} from "../inputMenu/InputMenu";
import {DropInput} from "./DropInput";


export const FilePage = () => {

    return (
        <div>
            {InputMenu('file')}
            <Spacer space={40} />
            <DropInput />
        </div>
    )
}