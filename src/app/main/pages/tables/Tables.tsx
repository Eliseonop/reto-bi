import { useSelector } from 'react-redux'
import { TablesState } from '../../../store/slices/tables/models/tables.state'
import { IRootState } from '../../../store/store'
import TablesList from './TablesList/TablesList'

export default function Tables () {
  const { tables } = useSelector<IRootState, TablesState>(state => state.tables)

  return <TablesList tables={tables} />
}
