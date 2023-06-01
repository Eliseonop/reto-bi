import { Order } from "../../order/models/order.model";

export interface Table {
    id: number;
    table : string;
    status : STATUS_TABLE;
    order : Order;
}

export enum STATUS_TABLE {
    OPEN = "OPEN",
    CLOSED = "CLOSED",
    OCCUPIED = "OCCUPIED"
}