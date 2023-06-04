import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { User } from './models/user.model'
import { UserState } from './models/user.state'
import { LIST_USERS } from '../../../utils/constants/listUser'

const initialState: UserState = {
  user: {
    id: 0,
    username: '',
    password: '',
    isLoggedIn: false
  },
  users: LIST_USERS
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    register: (
      state,
      action: PayloadAction<{
        password: string
        username: string
      }>
    ) => {
      const { username, password } = action.payload
      const user: User = {
        id: state.users.length + 1,
        username,
        password,
        isLoggedIn: true
      }
      state.users.push(user)
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },

    login: (
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) => {
      const { username, password } = action.payload
      const user = state.users.find(
        user => user.username === username && user.password === password
      )
      if (user) {
        user.isLoggedIn = true
        state.user = user
        localStorage.setItem('user', JSON.stringify(user))
      }
    },
    logout: state => {
      state.user.isLoggedIn = false
      localStorage.removeItem('user')
    }
  }
})

export const { login, logout, register } = userSlice.actions
