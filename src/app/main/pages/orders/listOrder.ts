import { STATUS_ITEM } from '../../../store/slices/items/models/item.model'
import {
  Order,
  STATUS_ORDER
} from '../../../store/slices/orders/models/order.model'
import { LIST_TABLES } from '../tables/listTables'

export const LIST_ORDERS: Order[] = [
  {
    id: 1,
    tableId: "Table 1",
    status: STATUS_ORDER.LISTO,
    items: [
      {
        id: 1,
        name: 'Ceviche',
        price: 20,
        quantity: 1,
        status: STATUS_ITEM.DISPONIBLE
      },
      {
        id: 2,
        name: 'Causa',
        price: 15,
        quantity: 2,
        status: STATUS_ITEM.DISPONIBLE
      }
    ]
  },
  {
    id: 2,
    tableId: "Table 2",
    status: STATUS_ORDER.PROCESANDO,
    items: [
      {
        id: 1,
        name: 'Ceviche',
        price: 20,
        quantity: 1,
        status: STATUS_ITEM.DISPONIBLE
      },
      {
        id: 2,
        name: 'Causa',
        price: 15,
        quantity: 2,
        status: STATUS_ITEM.DISPONIBLE
      }
    ]
  }
]
