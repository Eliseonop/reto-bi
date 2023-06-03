import { Table, STATUS_TABLE } from './../../store/slices/tables/models/table.model';

import { LIST_ORDERS } from './listOrder'

export const LIST_TABLES: Table[] = [
  {
    id: 1,
    table: 'Mesa 1',
    status: STATUS_TABLE.OCCUPIED,
    orders: LIST_ORDERS.filter(order => order.tableId === 2) || []
  },
  {
    id: 2,
    table: 'Mesa 2',
    status: STATUS_TABLE.OCCUPIED,
    orders: LIST_ORDERS.filter(order => order.tableId === 2 ) || []
  },      
  {
    id: 3,
    table: 'Mesa 3',
    status: STATUS_TABLE.DISOCCUPIED,
    orders: []
  },
  {
    id: 4,
    table: 'Mesa 4',
    status: STATUS_TABLE.DISOCCUPIED,
    orders: []
  },
  {
    id: 5,
    table: 'Mesa 5',
    status: STATUS_TABLE.DISOCCUPIED,
    orders: []
  }
]
