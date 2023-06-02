import {
  STATUS_TABLE,
  Table
} from '../../../store/slices/tables/models/table.model'
import { LIST_ORDERS } from '../orders/listOrder'

export const LIST_TABLES: Table[] = [
  {
    id: 1,
    table: 'Table 1',
    status: STATUS_TABLE.OCCUPIED,
    orders: LIST_ORDERS.filter(order => order.tableId === 'Table 1') || []
  },
  {
    id: 2,
    table: 'Table 2',
    status: STATUS_TABLE.OCCUPIED,
    orders: LIST_ORDERS.filter(order => order.tableId === 'Table 2') || []
  },
  {
    id: 3,
    table: 'Table 3',
    status: STATUS_TABLE.DISOCCUPIED,
    orders: []
  },
  {
    id: 4,
    table: 'Table 4',
    status: STATUS_TABLE.DISOCCUPIED,
    orders: []
  },
  {
    id: 5,
    table: 'Table 5',
    status: STATUS_TABLE.DISOCCUPIED,
    orders: []
  }
]
