import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TablesState } from './models/tables.state'

const initialState: TablesState = {
  tables: []
}

export const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {
    setTables (state, action: PayloadAction<TablesState>) {
      state.tables = action.payload.tables
    },
    addTable (state, action: PayloadAction<TablesState>) {
      state.tables.push(action.payload.tables[0])
    },
    updateTable (state, action: PayloadAction<TablesState>) {
      const table = action.payload.tables[0]
      const index = state.tables.findIndex(t => t.id === table.id)
      state.tables[index] = table
    },
    deleteTable (state, action: PayloadAction<TablesState>) {
      const table = action.payload.tables[0]
      const index = state.tables.findIndex(t => t.id === table.id)
      state.tables.splice(index, 1)
    }
  }
})

export const { setTables, addTable, updateTable, deleteTable } = tablesSlice.actions


