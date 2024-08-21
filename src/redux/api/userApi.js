import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/admin/user' }),
    endpoints: (builder) => ({
        removeUser: builder.mutation({
            query: (body) => ({
                url: '/remove',
                method: 'DELETE',
                body
            }),

        }),
        banUser: builder.mutation({
            query: (body) => ({
                url: '/ban',
                method: 'POST',
                body
            }),
        }),
        changeUserRole: builder.mutation({
            query: (body) => ({
                url: '/ban',
                method: 'PUT',
                body
            }),
        }),
    })
})

export const {
    useRemoveUserMutation,
    useBanUserMutation,
    useChangeUserRoleMutation
} = userApi
