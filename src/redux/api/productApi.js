import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/admin/product' }),
    endpoints: (builder) => ({
        deleteProduct: builder.mutation({
            query: (body) => ({
                method: 'DELETE',
                body
            }),
        }),
        addProduct: builder.mutation({
            query: (body) => ({
                method: 'POST',
                body,
            }),
        }),
        editProduct: builder.mutation({
            query: (body) => ({
                method: 'PUT',
                body,
            }),
        }),
    })
})

export const {
    useDeleteProductMutation,
    useEditProductMutation,
    useAddProductMutation
} = productApi
