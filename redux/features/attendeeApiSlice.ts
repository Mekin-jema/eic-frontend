import { apiSlice } from './apiSlice';

export const attendeeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerAttendee: builder.mutation<any, FormData>({
      query: (formData) => ({
        url: '/attendee/attendee-registration',
        method: 'POST',
        body: formData,
      }),
      invalidatesTags: ['attendee'],
    }),
    getAttendeeById: builder.query<any, string>({
      query: (id) => `/attendee/attendee-registration/${id}`,
      providesTags: ['attendee'],
    }),
    updateAttendee: builder.mutation<any, { id: string; data: any }>({
      query: ({ id, data }) => ({
        url: `/attendee/attendee-registration/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['attendee'],
    }),
    deleteAttendee: builder.mutation<any, string>({
      query: (id) => ({
        url: `/attendee/attendee-registration/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['attendee'],
    }),
    generateBadge: builder.query<any, string>({
      query: (id) => `/attendee/attendee-registration/${id}/badge`,
    }),
    exportAttendeeData: builder.query<any, string>({
      query: (id) => `/attendee/attendee-registration/${id}/export`,
    }),
    sendEmailToAttendee: builder.mutation<any, { id: string; data: any }>({
      query: ({ id, data }) => ({
        url: `/attendee/attendee-registration/${id}/send-email`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterAttendeeMutation,
  useGetAttendeeByIdQuery,
  useUpdateAttendeeMutation,
  useDeleteAttendeeMutation,
  useGenerateBadgeQuery,
  useExportAttendeeDataQuery,
  useSendEmailToAttendeeMutation,
} = attendeeApiSlice;
