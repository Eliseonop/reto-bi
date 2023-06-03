import { Order } from './order.model'

export interface OrdersState {
  orders: Order[]
  crudId: string
}
