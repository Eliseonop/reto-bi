import  { useState } from 'react';
import styled from 'styled-components';
import { IRootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { Order } from '../../../store/slices/orders/models/order.model';
import { ModalFormOrder } from '../../../shared-components/forms/ModalForm';
import OrderCard from '../../../shared-components/order/Order';

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  position: relative; // Agrega posición relativa para el contenedor
`;

const FloatingButton = styled.button`
  position: fixed;
  bottom: 100px;
  right: 20px;
  background-color: #2196f3;
  border-radius: 10px ;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5));
  padding: 20px 30px;
  font-size: 18px;
  border: none;
  z-index: 999; // Asegúrate de que el botón flotante esté en un z-index mayor que las tarjetas
`;


export default function Orders() {
  const { orders } = useSelector<IRootState, IRootState>((state) => state);

  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [formModalOpen, setFormModalOpen] = useState(false);

  const handleOpenFormModal = (order: Order) => {
    setSelectedOrder(order);
    setFormModalOpen(true);
  };

  const handleCloseFormModal = () => {
    setSelectedOrder(null);
    setFormModalOpen(false);
  };

  return (
    <>
      <Container>
        {orders.orders.map((order) => (
          <OrderCard key={order.id} order={order} handleOpenFormModal={handleOpenFormModal} />
        ))}
        <FloatingButton onClick={() => setFormModalOpen(true)}>
          Crear orden
        </FloatingButton>
      </Container>
      {formModalOpen && (
        <Modal open={formModalOpen} onClose={() => setFormModalOpen(false)}>
          <ModalFormOrder
            onClose={handleCloseFormModal}
            order={selectedOrder}
          />
        </Modal>
      )}
    </>
  );
}

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
