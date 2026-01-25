import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    // baseUrl:'http://localhost:8000/api', 
    baseUrl: 'https://eic-backend-9heh.onrender.com/api',
    credentials: 'include',
})

export const apiSlice = createApi({
    reducerPath: 'api',
    refetchOnMountOrArgChange: true,
    keepUnusedDataFor: 5,
    tagTypes: ['sponsor', 'exhibitor', 'contact', 'attendee'],
    baseQuery,
    endpoints: () => ({}),
})
