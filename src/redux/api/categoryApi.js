import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/admin/category' }),
    endpoints: (builder) => ({
        deleteCategory: builder.mutation({
            query: (body) => ({
                method: 'DELETE',
                body
            }),
        }),
        addCategory: builder.mutation({
            query: (body) => ({
                method: 'POST',
                body
            }),
        }),
        editCategory: builder.mutation({
            query: (body) => ({
                method: 'PUT',
                body
            }),
        }),
    })
})

export const {
    useDeleteCategoryMutation,
    useEditCategoryMutation,
    useAddCategoryMutation
} = categoryApi
