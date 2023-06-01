import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/user/user.slice";
import { tablesSlice } from "./slices/tables/tables.slice";
export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        tables: tablesSlice.reducer,
    },

})