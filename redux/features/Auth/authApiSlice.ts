import { apiSlice } from '../apiSlice'
import {
    attendeeRegistration,
    contactForm,
    MessageResponse,
} from './authTypes'
export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        contactForm: builder.mutation<MessageResponse | undefined, contactForm>(
            {
                query: (data) => {
                    return {
                        url: '/contact/contact-form',
                        method: 'POST',
                        body: data,
                    }
                },
                invalidatesTags: ['contact'],
            }
        ),
        attendeeRegistration: builder.mutation<
            MessageResponse | undefined,
            FormData | (attendeeRegistration & { proofDocument?: File })
        >({
            query: (data) => {
                return {
                    url: '/attendee/attendee-registration',
                    method: 'POST',
                    body: data as any,
                }
            },
            invalidatesTags: ['attendee'],
        }),
    }),
})

export const {
    useAttendeeRegistrationMutation,
    useContactFormMutation,
} = authApiSlice
