import { Outlet } from 'react-router-dom'
import { Navigation } from './navigation/Navigation'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IRootState } from '../store/models/rootState.model'
import { UserState } from '../store/slices/user/models/user.state'

export default function Layout() {

    const user = useSelector<IRootState, UserState>((state) => state.user)

    useEffect(() => {
        console.log(user)

    }, [user])

    useEffect(() => {
        if (localStorage.getItem('user')) {
            console.log('user', localStorage.getItem('user'))
        }
    }, [])

    return (
        <main>
            <Navigation />
            <Outlet />
        </main>
    )
}


