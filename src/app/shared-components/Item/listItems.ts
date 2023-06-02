import { Item, STATUS_ITEM } from '../../store/slices/items/models/item.model'

export const LIST_ITEMS: Item[] = [
  {
    id: 1,
    name: 'Hamburguesa',
    price: 10,
    status: STATUS_ITEM.DISPONIBLE,
    quantity: 2
  },
  {
    id: 2,
    name: 'Pizza',
    price: 12,
    status: STATUS_ITEM.PREPARANDO,
    quantity: 1
  },
  {
    id: 3,
    name: 'Ensalada',
    price: 8,
    status: STATUS_ITEM.DISPONIBLE,
    quantity: 3
  },
  {
    id: 4,
    name: 'Refresco',
    price: 2,
    status: STATUS_ITEM.AGOTADO,
    quantity: 0
  },
  {
    id: 5,
    name: 'Sándwich',
    price: 6,
    status: STATUS_ITEM.DISPONIBLE,
    quantity: 2
  },
  {
    id: 6,
    name: 'Pasta',
    price: 9,
    status: STATUS_ITEM.PREPARANDO,
    quantity: 1
  },
  {
    id: 7,
    name: 'Sopa',
    price: 4,
    status: STATUS_ITEM.DISPONIBLE,
    quantity: 3
  },
  {
    id: 8,
    name: 'Café',
    price: 3,
    status: STATUS_ITEM.DISPONIBLE,
    quantity: 4
  },
  {
    id: 9,
    name: 'Torta',
    price: 7,
    status: STATUS_ITEM.DISPONIBLE,
    quantity: 2
  },
  {
    id: 10,
    name: 'Helado',
    price: 5,
    status: STATUS_ITEM.AGOTADO,
    quantity: 0
  },
  {
    id: 11,
    name: 'Galletas',
    price: 2,
    status: STATUS_ITEM.DISPONIBLE,
    quantity: 5
  },
  {
    id: 12,
    name: 'Sushi',
    price: 15,
    status: STATUS_ITEM.PREPARANDO,
    quantity: 2
  },
  {
    id: 13,
    name: 'Papas fritas',
    price: 4,
    status: STATUS_ITEM.DISPONIBLE,
    quantity: 3
  },
  {
    id: 14,
    name: 'Cerveza',
    price: 3,
    status: STATUS_ITEM.DISPONIBLE,
    quantity: 6
  }
]
