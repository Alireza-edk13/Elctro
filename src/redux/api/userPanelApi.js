import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const userPanelApi = createApi({
    reducerPath: 'userPanelApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/user' }),
    endpoints: (builder) => ({
        updateUserInfo: builder.mutation({
            query: (body) => ({
                url: '/info',
                method: 'PUT',
                body
            }),
            invalidatesTags: ['UserInfo'],
        }),
        addToWishlist: builder.mutation({
            query: (body) => ({
                url: '/wishlist',
                method: 'POST',
                body
            }),
        }),
        removeFromWishlist: builder.mutation({
            query: (id) => ({
                url: `/wishlist/${id}`,
                method: 'DELETE'
            }),
        }),


    })
})

export const {
    useUpdateUserInfoMutation,useAddToWishlistMutation,useRemoveFromWishlistMutation
} = userPanelApi
