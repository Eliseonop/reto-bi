import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from './models/user.state'

const initialState: UserState = {
  name: '',
  email: '',
  token: '',
  isLoggedIn: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login (state, action: PayloadAction<UserState>) {
      state.name = action.payload.name
      state.email = action.payload.email
      state.token = action.payload.token
      state.isLoggedIn = true
    },
    logout (state) {
      state.name = ''
      state.email = ''
      state.token = ''
      state.isLoggedIn = false
    }
  }
})

export const { login, logout } = userSlice.actions