import { configureStore } from "@reduxjs/toolkit";
import { tablesSlice } from "./slices/tables/tables.slice";
import { userSlice } from "./slices/user/user.slice";
import { ordersSlice } from "./slices/orders/orders.slice";
import { UserState } from "./slices/user/models/user.state";
import { TablesState } from "./slices/tables/models/tables.state";
import { OrdersState } from "./slices/orders/models/orders.state";
import { ItemsState, itemsSlice } from "./slices/items/items.slice";
import { sseSlice } from "./slices/sse/sse.slice";
import { SseState } from "./slices/sse/typesSse.models";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        tables: tablesSlice.reducer,
        orders: ordersSlice.reducer,
        items: itemsSlice.reducer,
        eventoSse: sseSlice.reducer,
    },

})



export interface IRootState {
    user: UserState;
    tables: TablesState;
    orders: OrdersState;
    items: ItemsState;
    eventoSse: SseState
}

export default store;
