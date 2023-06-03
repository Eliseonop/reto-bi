import React from "react";
import { Item } from "../../store/slices/items/models/item.model";
import { ItemContainer, ItemName, ItemAmount } from "./item.styles";

interface ItemProps {
  item: Item;
}

const ItemComponent: React.FC<ItemProps> = ({ item }) => {
  return (
    <ItemContainer>
      <ItemName>{item.name}</ItemName>
      <ItemAmount>Cantidad: {item?.quantity}</ItemAmount>
    </ItemContainer>
  );
};

export default ItemComponent;
