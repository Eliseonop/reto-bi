import React, { useState, useEffect } from "react";
import {
    ModalContainer,
    ModalContent,
    CloseButton,
    CloseIcon,
    Form,
    Input,
    ButtonContainer,
    Button,
    Select
} from "./modalFormOrder.styles";
import { Order, STATUS_ORDER } from "../../../store/slices/orders/models/order.model";
import { IRootState } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { ItemsForm } from "../itemForm/ItemForm";
import { createOrder, updateOrder } from "../../../store/slices/orders/orders.slice";
import { IEvento, TypeData } from "../../../store/slices/sse/typesSse.models";
import { apiService } from "../../../service/apiSse";


interface ModalFormProps {
    order: Order | null;
    onClose: () => void;
}


export const ModalFormOrder: React.FC<ModalFormProps> = ({ order, onClose }) => {

    const dispatch = useDispatch();
    const { tables, items, orders, user } = useSelector<IRootState, IRootState>((state) => state);
    // const [selectedItem, setSelectedItem] = useState<Item | null>(null);
    const initialFormData: Order = {
        id: orders.orders.length + 1,
        tableId: 1,
        status: STATUS_ORDER.PROCESANDO,
        items: [],
    };
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

            const evento: IEvento = {
                userId: user.user.username,
                value: formData,
                type: TypeData.UPDATE,
                crudId: 'orders',
                kds: 'myKds'
            };
            apiService.sendData(evento).then((res) => {
                console.log(res);
            });

        } else {
            dispatch(
                createOrder({
                    ...formData
                })
            );

            const evento: IEvento = {
                userId: user.user.username,
                value: formData,
                type: TypeData.CREATE,
                crudId: 'orders',
                kds: 'myKds'
            };
            apiService.sendData(evento).then((res) => {
                console.log(res);
            });
        }
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
                            <option key={table.id} value={table.id}>
                                {table.table}
                            </option>
                        ))}
                    </Select>
                    <Select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}

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


