export interface Item {
    id: number;
    name: string;
    price: number;
    status: STATUS_ITEM;
    quantity: number;
}

export enum STATUS_ITEM {
    AGOTADO = "AGOTADO",
    DISPONIBLE = "DISPONIBLE",
    PREPARANDO = "PREPARANDO",
    SERVIDO = "SERVIDO",
}
