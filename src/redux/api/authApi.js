import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/auth' }),
    tagTypes: ['UserInfo'],
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (body) => ({
                url: '/register',
                method: 'POST',
                body
            }),

        }),
        loginUser: builder.mutation({
            query: (body) => ({
                url: '/login',
                method: 'POST',
                body
            }),

        }),
        getMeUser: builder.query({
            query: () => ({
                url: '/me',
                method: 'GET',
            }),
            providesTags: ['UserInfo'], 
        }),
        logoutUser: builder.mutation({
            query: (body) => ({
                url: '/logout',
                method: 'POST',
                body
            }),

        }),
    })
})

export const { useRegisterUserMutation, useLoginUserMutation, useGetMeUserQuery, useLogoutUserMutation } = authApi
