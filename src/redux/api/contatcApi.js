import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({ baseUrl: '/api/public' }),
    endpoints: (builder) => ({
        sendMessage: builder.mutation({
            query: (body) => ({
                url: '/contact',
                method: 'POST',
                body
            }),

        }),
        deleteMessage: builder.mutation({
            query: (body) => ({
                url: '/contact',
                method: 'DELETE',
                body
            }),

        }),
    })
})

export const { useSendMessageMutation , useDeleteMessageMutation } = contactApi
