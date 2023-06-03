import { Order } from '../../orders/models/order.model'

export interface Table {
  id: number
  table: string
  status: STATUS_TABLE
  orders: Order[]
}


export enum STATUS_TABLE {
  OCCUPIED = 'OCCUPIED',
  DISOCCUPIED = 'DISOCCUPIED'
}
