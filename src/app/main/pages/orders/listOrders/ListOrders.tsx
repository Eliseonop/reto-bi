import { useState, useEffect } from 'react';
import { Container, FilterContainer, FilterButton, FloatingButton, Modal } from './listOrders.styles';
import { IRootState } from '../../../../store/store';
import { useSelector } from 'react-redux';
import { Order, STATUS_ORDER } from '../../../../store/slices/orders/models/order.model';
import { ModalFormOrder } from '../../../../shared-components/forms/modalFormOrder/ModalFormOrder';
import OrderCard from '../../../../shared-components/order/OrderCard';


export default function ListOrders() {
  const { orders } = useSelector<IRootState, IRootState>((state) => state);
  const [ordersList, setOrdersList] = useState<Order[]>([]);
  const [filter, setFilter] = useState<STATUS_ORDER | null>(null);
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

  useEffect(() => {
    let filteredOrders = orders.orders;

    if (filter) {
      filteredOrders = filteredOrders.filter((order) => order.status === filter);
    }

    setOrdersList(filteredOrders);
  }, [orders.orders, filter]);

  return (
    <>
      <FilterContainer>
        <FilterButton
          onClick={() => setFilter(null)}
        >
          Todos
        </FilterButton>
        <FilterButton
          status={STATUS_ORDER.PROCESANDO}
          onClick={() => setFilter(STATUS_ORDER.PROCESANDO)}
        >
          Procesando
        </FilterButton>
        <FilterButton
          status={STATUS_ORDER.LISTO}
          onClick={() => setFilter(STATUS_ORDER.LISTO)}
        >
          Listo
        </FilterButton>
        <FilterButton
          status={STATUS_ORDER.ENTREGADO}
          onClick={() => setFilter(STATUS_ORDER.ENTREGADO)}
        >
          Entregado
        </FilterButton>
        <FilterButton
          status={STATUS_ORDER.CANCELADO}
          onClick={() => setFilter(STATUS_ORDER.CANCELADO)}
        >
          Cancelado
        </FilterButton>
      </FilterContainer>


      <Container>
        {ordersList.map((order) => (
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


