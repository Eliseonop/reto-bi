
import styled from "styled-components";
import { Order, STATUS_ORDER } from "../../store/slices/orders/models/order.model";
import ItemComponent from "../Item/Item";

interface CardProps {
    order: Order;
    handleOpenFormModal?: (order: Order) => void;
}

const CardContainer = styled.div<{ status: STATUS_ORDER }>`
  padding: 24px;
  border-radius: 12px;
  position: relative;
  width: 400px;
  margin-bottom: 24px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: ${(props) => {
        switch (props.status) {
            case STATUS_ORDER.CANCELADO:
                return "#f87171";
            case STATUS_ORDER.ENTREGADO:
                return "#7dd3fc";
            case STATUS_ORDER.LISTO:
                return "#34d399";
            case STATUS_ORDER.PROCESANDO:
                return "#fde68a";
            default:
                return "#f0f0f0";
        }
    }};
  
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const OrderId = styled.div`
  font-weight: bold;
  margin-bottom: 12px;
  font-size: 18px;
`;

const TableId = styled.div`
  margin-bottom: 12px;
  font-size: 16px;
`;

const ItemList = styled.ul`
  margin: 0;
  padding: 10px;
  list-style-type: none;
  height: 200px;
  overflow-y: auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Total = styled.div`
  font-weight: bold;
  margin-bottom: 12px;
  font-size: 18px;
`;

const EditButton = styled.button`
  position: absolute;
  bottom: 10px;
  padding: 5px 10px;
  right: 10px;
  border: none;
  background-color: #2196f3;
  color: #fff;
  cursor: pointer;
  border-radius: 12px;
`;

const OrderCard: React.FC<CardProps> = ({ order, handleOpenFormModal }) => {
    return (
        <CardContainer status={order?.status}>
            {
                handleOpenFormModal && (
                    <EditButton onClick={() => handleOpenFormModal(order)}>
                        Editar
                    </EditButton>
                )
            }
            <HeaderContainer>
                <OrderId>Order ID: {order?.id}</OrderId>
                <TableId>Mesa: {order?.tableId}</TableId>
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
