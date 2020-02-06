import React from "react"
import styled from 'styled-components'

const Banana = ({className, children}) => {
return <div className={className}>{children}}</div>;
}

const Wrap = styled(Banana)`
color: red;
font-size: 50px;
`

export default () => <Wrap>"Hello world!"</Wrap>
