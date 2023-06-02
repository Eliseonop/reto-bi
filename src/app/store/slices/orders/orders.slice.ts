import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Order } from './models/order.model'
import { OrdersState } from './models/orders.state'
import { LIST_ORDERS } from '../../../main/pages/orders/listOrder'


const initialState: OrdersState = {
  orders: LIST_ORDERS
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload)
    },
    removeOrder: (state, action: PayloadAction<number>) => {
      state.orders = state.orders.filter(order => order.id !== action.payload)
    },
    updateOrder: (state, action: PayloadAction<Order>) => {
      const index = state.orders.findIndex(
        order => order.id === action.payload.id
      )
      state.orders[index] = action.payload
    }
  }
})

export const { addOrder, removeOrder,updateOrder } = ordersSlice.actions
