import React from "react"
import styled from 'styled-components'

const Banana = () => {
    return "Hello world!";
}

const Wrap = styled(Banana)`
color: red;
font-size: 50px;
`

export default () => <Wrap>AAA</Wrap>
