import React from "react";
import styled from "styled-components";
import { Item, STATUS_ITEM } from "../../store/slices/items/models/item.model";

interface ItemProps {
  item: Item;
}

const ItemContainer = styled.div`
  background-color: #ffffff;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const ItemName = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
`;

const ItemPrice = styled.div`
  margin-bottom: 8px;
`;

const ItemStatus = styled.div<{ status: STATUS_ITEM }>`
  font-weight: bold;
  color: ${(props) =>
    props.status === STATUS_ITEM.AGOTADO ? "#ff0000" : "#00cc00"};
`;

const ItemAmount = styled.div`
  font-weight: bold;
  margin-top: 8px;
`;

const ItemComponent: React.FC<ItemProps> = ({ item }) => {
  return (
    <ItemContainer>
      <ItemName>{item.name}</ItemName>
      <ItemPrice>Price: ${item.price}</ItemPrice>

      <ItemStatus status={item.status}> {item.status}</ItemStatus>

      <ItemAmount>Cantidad: {item?.quantity}</ItemAmount>
    </ItemContainer>
  );
};

export default ItemComponent;
