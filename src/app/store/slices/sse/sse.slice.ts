import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IEvento, SseState } from './typesSse.models'

const initialState: SseState = {
  evento: null,
  connected: false
}


export const sseSlice = createSlice({
  name: 'SseState',
  initialState,
  reducers: {
    sendDataSuccess: (state, action: PayloadAction<IEvento>) => {
      state.evento = action.payload
    }
  }
})

export const { sendDataSuccess } = sseSlice.actions
