import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled.button`
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 10px 20px;
    font-weight: bold;
    color: #000;
    cursor: pointer;
    &:hover {
        background-color: #000;
        color: #fff;
    }
`

export const ButtonPrimary = styled(Button)`
    background-color: #000;
    color: #fff;
    &:hover {
        background-color: #fff;
        color: #000;
    }
`

export const ButtonLink = styled(Link)`
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 10px 20px;
    font-weight: bold;
    color: #000;
    margin: 0 5px;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        background-color: #000;
        color: #fff;
    }
`


