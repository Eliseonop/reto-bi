import styled from "styled-components";
import { STATUS_TABLE } from "../../../../store/slices/tables/models/table.model";

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
    background-color: ${(props) => {
        switch (props.status) {
            case STATUS_TABLE.OCCUPIED:
                return "#ff0000";
            case STATUS_TABLE.DISOCCUPIED:
                return "#00ff00";
            default:
                return "#000000";

        }
    }
    } 
`;

export {
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
}