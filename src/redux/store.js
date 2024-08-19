import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from "./api/authApi";
import { sideBarAdminPanelSlice } from "./slice/sideBarAdminPanelSlice";


export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [sideBarAdminPanelSlice.name]: sideBarAdminPanelSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
})

setupListeners(store.dispatch)