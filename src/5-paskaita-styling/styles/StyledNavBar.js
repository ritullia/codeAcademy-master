import Button from "react-bootstrap/Button";
import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: pink;
    height: 100px;
`

export const Wrapper = styled.div`
    background-color: yellow;
    height: 200px;
`

export const StyledBootstrapButton = styled(Button)`
    height: 300px;
    background-color: green;
`

export const HighButton = styled(Button)`
    height: 300px;
    
`

export const MyGreenButton = styled(HighButton)`
    background-color: green;
`