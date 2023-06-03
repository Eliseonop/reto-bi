import React, { useState, useEffect } from "react";
import {
  Container,
  TableWrapper,
  TableContainer,
  TableHeader,
  TableRow,
  TableCell,
  Button,
  Modal,
  CloseButton,
  CloseIcon,
  TableCellStatus
} from "./tableList.styles";
import {
  STATUS_TABLE,
  Table,
} from "../../../../store/slices/tables/models/table.model";
import OrderCard from "../../../../shared-components/order/OrderCard";
import { useMediaQuery } from "../../../../utils/functions/useMediaquery";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../store/store";
import {
  createTable, deleteTable
} from "../../../../store/slices/tables/tables.slice";
import { apiService } from "../../../../service/apiSse";
import { IEvento, TypeData } from "../../../../store/slices/sse/typesSse.models";


const TablesList: React.FC = () => {
  const dispatch = useDispatch();
  const { tables, user } = useSelector<IRootState, IRootState>(
    (state) => state
  );
  const [ListTables, setListTables] = useState<Table[]>([]); // Se agrega el estado para la lista de mesas [1
  const [selectedTable, setSelectedTable] = useState<Table | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleOpenModal = (table: Table) => {
    setSelectedTable(table);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedTable(null);
    setModalOpen(false);
  };

  const handleAddTable = () => {
    const newTable: Table =
    {
      id: tables.tables.length + 1,
      table: "Mesa " + (tables.tables.length + 1),
      status: STATUS_TABLE.DISOCCUPIED,
      orders: [],
    }

    dispatch(
      createTable(newTable)
    );
    const evento: IEvento = {
      userId: user.user.username,
      value: newTable,
      type: TypeData.CREATE,
      crudId: tables.crudId,
      kds: 'myKds'
    };
    apiService.sendData(evento)
  };

  useEffect(() => {
    setListTables(tables.tables); // Se actualiza el estado de la lista de mesas [2
  }, [tables]);

  const handleDeleteTable = (table: Table) => {
    dispatch(
      deleteTable(table)
    );
    const evento: IEvento = {
      userId: user.user.username,
      value: table,
      type: TypeData.DELETE,
      crudId: tables.crudId,
      kds: 'myKds'
    };
    apiService.sendData(evento)
  };
  if (!ListTables) return (<div>no hay mesas</div>)
  return (

    <Container>
      <TableWrapper isMobile={isMobile}>
        <Button onClick={handleAddTable}>Generar Mesa</Button>
        <TableContainer>
          <thead>
            <TableRow>
              <TableHeader>Mesa ID</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Order ID</TableHeader>
              <TableHeader>Order Status</TableHeader>
              <TableHeader>Acciones</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {ListTables?.map((table) => (
              <TableRow key={table.id}>
                <TableCell>{table.id}</TableCell>
                <TableCellStatus status={table.status}>
                  <span>
                    {table.status === STATUS_TABLE.OCCUPIED ? "OCUPADO" : "LIBRE"}
                  </span>
                </TableCellStatus>
                <TableCell>
                  {table.orders.length > 0 ? (
                    <Button onClick={() => handleOpenModal(table)}>
                      Ver Ordenes
                    </Button>
                  ) : (
                    "No hay Orden"
                  )}
                </TableCell>
                <TableCell>
                  {table.orders.length > 1 ? (
                    <span>{table.orders.length}</span>
                  ) : (
                    "No hay Orden"
                  )}
                </TableCell>
                <TableCell>
                  {table.orders.length > 0 ? ( // Mostrar botón de eliminar solo si no hay órdenes
                    <Button onClick={() => handleDeleteTable(table)}>
                      Eliminar
                    </Button>
                  ) : (
                    "No hay Orden"
                  )}
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </TableContainer>
      </TableWrapper>

      {(selectedTable && modalOpen) ? (
        <Modal open={modalOpen} onClose={handleCloseModal}>
          <CloseButton onClick={handleCloseModal}>
            <CloseIcon viewBox="0 0 20 24">
              <path
                fill="#000000"
                d="M19.42 16.58l-4.13-4.13 4.13-4.13c0.39-0.39 0.39-1.02 0-1.41l-1.41-1.41c-0.39-0.39-1.02-0.39-1.41 0l-4.13 4.13-4.13-4.13c-0.39-0.39-1.02-0.39-1.41 0l-1.41 1.41c-0.39 0.39-0.39 1.02 0 1.41l4.13 4.13-4.13 4.13c-0.39 0.39-0.39 1.02 0 1.41l1.41 1.41c0.39 0.39 1.02 0.39 1.41 0l4.13-4.13 4.13 4.13c0.39 0.39 1.02 0.39 1.41 0l1.41-1.41c0.39-0.39 0.39-1.02 0-1.41z"
              />
            </CloseIcon>
          </CloseButton>
          {selectedTable.orders ? (
            selectedTable.orders.map((order) => (
              <OrderCard order={order} key={order.id} />
            ))
          ) : (
            <p>No hay ordenes</p>
          )}

        </Modal>
      ) : <div>a</div>}
    </Container>
  );
};

export default TablesList;
