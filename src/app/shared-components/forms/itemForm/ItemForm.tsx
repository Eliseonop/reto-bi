import React, { useState } from 'react'
import { Item } from '../../../store/slices/items/models/item.model';
import { Order } from '../../../store/slices/orders/models/order.model';
import { ContainerTable, RemoveButton, ItemContainer, ItemName, ItemQuantity, ButtonContainer, ActionButton , Button, Container, Select} from './itemForm.styles';
interface ItemModalFormProps {
    items: Item[];
    formData: Order;
    setFormData: React.Dispatch<React.SetStateAction<Order>>;
}

export const ItemsForm: React.FC<ItemModalFormProps> = ({ items, formData, setFormData }) => {
    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    const handleRemoveItem = (itemId: number) => {
        setFormData((prevData) => ({
            ...prevData,
            items: prevData.items.map((item) =>
                item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
            ),
        }));
    };

    const handleAddItem = (itemId: number) => {
        setFormData((prevData) => ({
            ...prevData,
            items: prevData.items.map((item) =>
                item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
            ),
        }));
    };

    const handleRemoveSelectedItem = (itemId: number) => {
        setFormData((prevData) => ({
            ...prevData,
            items: prevData.items.filter((item) => item.id !== itemId),
        }));
    };

    return (
        <Container>

            <Select
                name="itemId"
                value={selectedItem?.id || ""}
                onChange={(e) => {
                    const itemId = parseInt(e.target.value);
                    const selected = items.find((item) => item.id === itemId);
                    setSelectedItem(selected || null);
                }}
            >
                <option value="">Seleccione un item</option>
                {items.map((item) => (
                    <option key={item.id} value={item.id}>
                        {item.name} - ${item.price}
                    </option>
                ))}
            </Select>
            <Button
                type="button"
                onClick={() => {
                    if (selectedItem) {
                        const existingItem = formData.items.find((item) => item.id === selectedItem.id);
                        if (existingItem) {
                            setFormData((prevData) => ({
                                ...prevData,
                                items: prevData.items.map((item) =>
                                    item.id === selectedItem.id ? { ...item, quantity: item.quantity + 1 } : item
                                ),
                            }));
                        } else {
                            setFormData((prevData) => ({
                                ...prevData,
                                items: [
                                    ...prevData.items,
                                    {
                                        ...selectedItem,
                                        quantity: 1,
                                    },
                                ],
                            }));
                        }
                    }
                }}
            >
                Agregar Item
            </Button>
            {
                formData.items.length > 0 && (

                    <ContainerTable>
                        {formData.items.map((item) => (
                            <ItemContainer key={item.id}>
                                <ItemName>{item.name}</ItemName>
                                <ButtonContainer>
                                    <ActionButton
                                        type="button"
                                        onClick={() => handleRemoveItem(item.id)}
                                        disabled={item.quantity <= 1}
                                    >
                                        -
                                    </ActionButton>
                                    <ItemQuantity>{item.quantity}</ItemQuantity>
                                    <ActionButton type="button" onClick={() => handleAddItem(item.id)}>
                                        +
                                    </ActionButton>
                                    <RemoveButton type="button" onClick={() => handleRemoveSelectedItem(item.id)}>
                                        X
                                    </RemoveButton>
                                </ButtonContainer>
                            </ItemContainer>
                        ))}
                    </ContainerTable>
                )
            }
        </Container>
    );
};




