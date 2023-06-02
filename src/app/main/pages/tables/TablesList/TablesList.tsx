import React, { useState } from "react";
import styled from "styled-components";
import { STATUS_TABLE, Table } from "../../../../store/slices/tables/models/table.model";
import OrderCard from "../../../../shared-components/order/Order";
import { useMediaQuery } from "../../../../shared-components/navigation/useMediaquery";

interface TablesListProps {
  tables: Table[];
}

const Container = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const TableWrapper = styled.div<{ isMobile: boolean }>`
  overflow-y: ${(props) => (props.isMobile ? "scroll" : "initial")};
  max-height: ${(props) => (props.isMobile ? "400px" : "initial")};
`;

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 16px;
`;

const TableHeader = styled.th`
  padding: 8px;
  background-color: #f0f0f0;
  font-weight: bold;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
`;

const TableCell = styled.td`
  padding: 8px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #ffffff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Modal = styled.dialog`
height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: #ffffff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  z-index: 9999;
  border: none;
  overflow: auto;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 500px;
  }
`;

const CloseButton = styled.button`
z-index: 9999;
  width: 32px;
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const CloseIcon = styled.svg`
  width: 100%;
  height: 100%;
`;

const TableCellStatus = styled(TableCell) <{ status: STATUS_TABLE }>`
  span {
    padding: 2px;
    border-radius: 4px;
    font-size: 14px;
    
    text-transform: uppercase;
    color: #00000;

    ${(props) =>
    props.status === STATUS_TABLE.OCCUPIED &&
    `
      background-color: #ff0000;
    `}

    ${(props) =>
    props.status === STATUS_TABLE.DISOCCUPIED &&
    `
      background-color: #00ff00;
    `}
  }
`;


const TablesList: React.FC<TablesListProps> = ({ tables }) => {
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

  return (
    <Container>
      <TableWrapper isMobile={isMobile}>
        <TableContainer>
          <thead>
            <TableRow>
              <TableHeader>Table ID</TableHeader>
              <TableHeader>Table Name</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Order ID</TableHeader>
              <TableHeader>Order Status</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {tables.map((table) => (
              <TableRow key={table.id}>
                <TableCell>{table.id}</TableCell>
                <TableCell>{table.table}</TableCell>
                <TableCellStatus status={table.status}>
                  <span>
                    {table.status === STATUS_TABLE.OCCUPIED
                      ? "OCUPADO"
                      : "LIBRE"}
                  </span>
                </TableCellStatus>
                <TableCell>
                  {table.orders.length > 0 ? (
                    <Button onClick={() => handleOpenModal(table)}>Ver Ordenes</Button>
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
              </TableRow>
            ))}
          </tbody>
        </TableContainer>
      </TableWrapper>

      {selectedTable && modalOpen && (
        <Modal open={modalOpen} onClose={handleCloseModal}>
          <CloseButton onClick={handleCloseModal}>
            <CloseIcon viewBox="0 0 20 24">
              <path
                fill="#000000"
                d="M19.42 16.58l-4.13-4.13 4.13-4.13c0.39-0.39 0.39-1.02 0-1.41l-1.41-1.41c-0.39-0.39-1.02-0.39-1.41 0l-4.13 4.13-4.13-4.13c-0.39-0.39-1.02-0.39-1.41 0l-1.41 1.41c-0.39 0.39-0.39 1.02 0 1.41l4.13 4.13-4.13 4.13c-0.39 0.39-0.39 1.02 0 1.41l1.41 1.41c0.39 0.39 1.02 0.39 1.41 0l4.13-4.13 4.13 4.13c0.39 0.39 1.02 0.39 1.41 0l1.41-1.41c0.39-0.39 0.39-1.02 0-1.41z"
              />
            </CloseIcon>
          </CloseButton>
          {selectedTable.orders &&
            selectedTable.orders.map((order) => (
              <OrderCard order={order} />
            ))}

        </Modal>
      )}

    </Container>
  );
};

export default TablesList;
