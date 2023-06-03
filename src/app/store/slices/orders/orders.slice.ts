import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Order } from './models/order.model'
import { OrdersState } from './models/orders.state'
import { LIST_ORDERS } from '../../../utils/constants/listOrder'

const initialState: OrdersState = {
  orders: LIST_ORDERS,
  crudId: 'orders'
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    createOrder: (state, action: PayloadAction<Order>) => {
      state.orders = [...state.orders, action.payload]
    },
    deleteOrder: (state, action: PayloadAction<Order>) => {
      const index = state.orders.findIndex(
        order => order.id === action.payload.id
      )
      state.orders.splice(index, 1)
    },
    updateOrder: (state, action: PayloadAction<Order>) => {
      const order = action.payload
      const index = state.orders.findIndex(o => o.id === order.id)
      state.orders[index] = order
    }
  }
})

export const { createOrder, deleteOrder, updateOrder } = ordersSlice.actions
