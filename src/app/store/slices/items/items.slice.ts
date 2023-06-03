import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Item } from './models/item.model'
import { LIST_ITEMS } from '../../../utils/constants/listItems'
// Reemplaza 'tu-ruta-del-modelo/item' con la ruta correcta hacia tu modelo

export interface ItemsState {
  items: Item[]
}

const initialState: ItemsState = {
  items: LIST_ITEMS
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload)
    },
    updateItem: (
      state,
      action: PayloadAction<{ id: number; item: Partial<Item> }>
    ) => {
      const { id, item } = action.payload
      const selectedItem = state.items.find(item => item.id === id)
      if (selectedItem) {
        Object.assign(selectedItem, item)
      }
    }
  }
})

export const { addItem, removeItem, updateItem } = itemsSlice.actions
