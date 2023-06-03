import  {
  CardContainer,
  OrderId,
  TableId,
  ItemList,
  HeaderContainer,
  Total,
  ButtonContainerFix,
  EditButton,
} from "./order.styles";
import { Order } from "../../store/slices/orders/models/order.model";
import ItemComponent from "../Item/Item";

interface CardProps {
  order: Order;
  handleOpenFormModal?: (order: Order) => void;
}


const OrderCard: React.FC<CardProps> = ({ order, handleOpenFormModal }) => {

  return (
    <CardContainer status={order?.status}>
      <ButtonContainerFix>
        {
          handleOpenFormModal && (
            <EditButton onClick={() => handleOpenFormModal(order)}>
              Editar
            </EditButton>
          )
        }
      </ButtonContainerFix>
      <HeaderContainer>
        <OrderId>Order ID: {order?.id}</OrderId>
        <TableId>Mesa: <strong>{order?.tableId}</strong> </TableId>
      </HeaderContainer>
      <TableId>Estado: {order?.status}</TableId>
      <ItemList>
        {order?.items.map((item) => (
          <ItemComponent key={item.id} item={item} />
        ))}
      </ItemList>
      <Total>
        Total: ${order?.items.reduce((acc, item) => acc + item.price, 0)}
      </Total>
    </CardContainer>
  );
};

export default OrderCard;
