
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { Navigation } from "../shared-components/navigation/Navigation"
import { useEffect } from "react"
import { login } from "../store/slices/user/user.slice"
import { Outlet } from "react-router-dom"

export function Main() {
    const dispatch = useDispatch()


    useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) {
            dispatch(login(JSON.parse(user)))
        }
    }, [])

    return (
        <MainGeneral>
            <Navigation />
            <Outlet />
        </MainGeneral>
    )
}



const MainGeneral = styled.div`

    background-color: #f5f5f5;
    height: 100%
    display: flex;
    flex-direction: column;F
    justify-content: center;
    align-items: center;
`
