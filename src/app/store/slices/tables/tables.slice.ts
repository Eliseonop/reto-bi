import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TablesState } from './models/tables.state'
import { LIST_TABLES } from '../../../utils/constants/listTables'
import { Table } from './models/table.model'


const initialState: TablesState = {
  tables: LIST_TABLES,
  crudId: 'tables'
}

export const tablesSlice = createSlice({
  name: 'tables',
  initialState,
  reducers: {
    createTable (state, action: PayloadAction<Table>) {
      state.tables = [...state.tables, action.payload]
    },
    updateTable (state, action: PayloadAction<Table>) {
      const table = action.payload
      const index = state.tables.findIndex(t => t.id === table.id)
      state.tables[index] = table
    },
    deleteTable (state, action: PayloadAction<Table>) {
      const table = action.payload
      const index = state.tables.findIndex(t => t.id === table.id)
      state.tables.splice(index, 1)
    }
  }
})

export const { createTable, updateTable, deleteTable } = tablesSlice.actions
