import { Item } from "../../items/models/item.model";

export interface Order {
    id: number 
    tableId: string;
    status: STATUS_ORDER;
    items: Item[];
}

export enum STATUS_ORDER {
    PROCESANDO = "PROCESANDO",
    LISTO = "LISTO",
    ENTREGADO = "ENTREGADO",
    CANCELADO = "CANCELADO"
}

