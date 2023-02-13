import {Flex, Spacer} from "../primitives";
import styled from "@emotion/styled";
import {Typography} from "@mui/material";


export const HistPage = () => {
    return (
        <div>
            <Wrapper>
                <Flex style={{columnGap: "50px"}}>
                    <Typography>Сохранено</Typography>
                    <Typography>История</Typography>
                </Flex>
                <Spacer space={30}></Spacer>
                <Flex flexDirection={"column"} className={'items'}>
                    <Flex className={'item'} flexDirection={"column"}>
                        <div>
                            Title
                        </div>
                        <div>
                            article
                        </div>
                        <div>
                            footer
                        </div>
                    </Flex>
                </Flex>
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
  margin-top: 50px;
`