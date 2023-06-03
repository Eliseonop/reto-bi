import styled from "styled-components";

const ContainerTable = styled.div`
    margin-top: 8px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
`;

const RemoveButton = styled.button`
    margin-left: 8px;
    padding: 4px 8px;
    border-radius: 4px;
    border: none;
    background-color: #f44336;
    color: #fff;
    cursor: pointer;
`;

const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`;
const ItemName = styled.span`
    font-weight: bold;
`;
const ItemQuantity = styled.span`
    margin: 0 8px;
`;
const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ActionButton = styled.button`
    margin: 0 4px;
    padding: 4px 8px;
    border-radius: 4px;
    border: none;
    background-color: #4caf50;
    color: #fff;
    cursor: pointer;
`;
const Button = styled.button`
    margin-top: 8px;
    padding: 8px;
    border-radius: 4px;
    border: none;
    background-color: #4caf50;
    color: #fff;
    cursor: pointer;
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Select = styled.select`
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

export { ContainerTable, RemoveButton, ItemContainer, ItemName, ItemQuantity, ButtonContainer, ActionButton , Button, Container, Select};