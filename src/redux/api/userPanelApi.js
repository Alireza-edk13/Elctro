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


    })
})

export const {
    useUpdateUserInfoMutation,
} = userPanelApi
