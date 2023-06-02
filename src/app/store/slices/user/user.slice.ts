import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserState } from './models/user.state'

const initialState: UserState = {
  username: '',
  password: '',
  isLoggedIn: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ username: string; password: string }>
    ) => {
      state.username = action.payload.username
      state.password = action.payload.password
      state.isLoggedIn = true
    },
    logout: state => {
      state.username = ''
      state.isLoggedIn = false
    }
  }
})

export const { login, logout } = userSlice.actions
// export default userSlice.reducer
