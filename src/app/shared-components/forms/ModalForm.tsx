import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Order, STATUS_ORDER } from "../../store/slices/orders/models/order.model";
import { LIST_ORDERS } from "../../main/pages/orders/listOrder";
import { IRootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { ItemsForm } from "./ItemForm";
import { updateOrder } from "../../store/slices/orders/orders.slice";


interface ModalFormProps {
    order: Order | null;
    onClose: () => void;
}

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 16px;
 width: 400px;
 margin-bottom: 24px;
padding: 50px;
  border-radius: 8px;
  position: relative;
`;

const CloseButton = styled.button`
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const ButtonContainer = styled.div`
    margin-top: 16px;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  background-color: #2196f3;
  color: #fff;
  cursor: pointer;
`;
const Select = styled.select`
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;
const initialFormData: Order = {
    id: LIST_ORDERS.length + 1,
    tableId: "",
    status: STATUS_ORDER.PROCESANDO,
    items: [],
};


export const ModalFormOrder: React.FC<ModalFormProps> = ({ order, onClose }) => {
    const dispatch = useDispatch();
    const { tables, items } = useSelector<IRootState, IRootState>((state) => state);
    // const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    const [formData, setFormData] = useState<Order>(initialFormData);

    const handleChange = <T extends HTMLInputElement | HTMLSelectElement>(
        e: React.ChangeEvent<T>
    ) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (order) {
            dispatch(
                updateOrder({
                    ...formData
                })
            );
        }
        // Lógica para enviar el formulario
        console.log(formData);
        onClose();
    };

    useEffect(() => {
        if (order) {
            setFormData({
                ...order
            });

        }
        if (order) {
            setFormData({
                id: order.id,
                tableId: order.tableId,
                status: order.status,
                items: order.items || [],
            });
        }
    }, [order]);

    return (
        <ModalContainer>
            <ModalContent>
                <CloseButton onClick={() => onClose()}>
                    <CloseIcon viewBox="0 0 20 24">
                        <path
                            fill="#000000"
                            d="M19.42 16.58l-4.13-4.13 4.13-4.13c0.39-0.39 0.39-1.02 0-1.41l-1.41-1.41c-0.39-0.39-1.02-0.39-1.41 0l-4.13 4.13-4.13-4.13c-0.39-0.39-1.02-0.39-1.41 0l-1.41 1.41c-0.39 0.39-0.39 1.02 0 1.41l4.13 4.13-4.13 4.13c-0.39 0.39-0.39 1.02 0 1.41l1.41 1.41c0.39 0.39 1.02 0.39 1.41 0l4.13-4.13 4.13 4.13c0.39 0.39 1.02 0.39 1.41 0l1.41-1.41c0.39-0.39 0.39-1.02 0-1.41z"
                        />
                    </CloseIcon>
                </CloseButton>
                <Form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="id"
                        placeholder="ID"
                        value={formData.id}
                        onChange={handleChange}
                        disabled
                    />
                    <Select
                        name="tableId"
                        value={formData.tableId}
                        onChange={handleChange}
                    >
                        {tables.tables.map((table) => (
                            <option key={table.id} value={table.table}>
                                {table.table}
                            </option>
                        ))}
                    </Select>
                    <Select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        disabled={order ? true : false}
                    >
                        {Object.values(STATUS_ORDER).map((status) => (
                            <option key={status} value={status}>
                                {status}
                            </option>
                        ))}
                    </Select>
                    {/* select de items */}
                    <ItemsForm items={items.items} setFormData={setFormData} formData={formData} />

                    <ButtonContainer>
                        <Button type="submit">{
                            order ? "Actualizar" : "Agregar Orden"
                        }</Button>
                    </ButtonContainer>
                </Form>
            </ModalContent>
        </ModalContainer>
    );
};


