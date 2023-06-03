import styled from "styled-components";
import { STATUS_ORDER } from "../../../../store/slices/orders/models/order.model";


const Modal = styled.dialog`
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

  @media (max-width: 768px) {
    width: 90%;
    max-width: 500px;
  }
`;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  position: relative; // Agrega posición relativa para el contenedor
`;

const FloatingButton = styled.button`
cursor: pointer;
  position: fixed;
  bottom: 100px;
  right: 100px;
  background-color: #2196f3;
  border-radius: 10px ;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));
  padding: 20px 30px;
  font-size: 18px;
  border: none;
  z-index: 999; // Asegúrate de que el botón flotante esté en un z-index mayor que las tarjetas

  // darle un efecto de hover
  &:hover {
    background-color: #1976d2;
  }
`;
const FilterContainer = styled.div`
 text-align: center;
  margin-bottom: 10px;
`;

const FilterButton = styled.button<{ status?: STATUS_ORDER }>`
  margin: 10px;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: bold;
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
  // poner border arriva y a los costados
  border-bottom: 1px solid #ccc;
  border-radius: 5px 5px 0 0;
  cursor: pointer;
`;

export { Modal, Container, FloatingButton, FilterContainer, FilterButton };