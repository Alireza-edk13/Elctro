import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from "./api/authApi";
import { sideBarAdminPanelSlice } from "./slice/sideBarAdminPanelSlice";
import { userApi } from "./api/userApi";
import { categoryApi } from "./api/categoryApi";
import { productApi } from "./api/productApi";
import { cartSlice } from "./slice/cartSlice";


export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [cartSlice.name]: cartSlice.reducer,
        [sideBarAdminPanelSlice.name]: sideBarAdminPanelSlice.reducer,
    },
    middleware: (d) =>
        d().concat(
            authApi.middleware,
            userApi.middleware,
            categoryApi.middleware,
            productApi.middleware,
        ),
})

setupListeners(store.dispatch)