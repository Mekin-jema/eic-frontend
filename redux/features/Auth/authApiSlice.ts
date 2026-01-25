import { apiSlice } from '../apiSlice'
import {
    attendeeRegistration,
    contactForm,
    exhibitorRegistration,
    MessageResponse,
    sponsorRegistration,
} from './authTypes'
export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        sponsorRegistration: builder.mutation<
            MessageResponse | undefined,
            sponsorRegistration
        >({
            query: (data) => {
                return {
                    url: '/sponsor/sponsor-registration',
                    method: 'POST',
                    body: data,
                }
            },
            invalidatesTags: ['sponsor'],
        }),
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
        exhibitorRegistration: builder.mutation<
            MessageResponse | undefined,
            exhibitorRegistration
        >({
            query: (data) => {
                console.log(data)
                return {
                    url: '/exhibitor/exhibitor-registration',
                    method: 'POST',
                    body: data,
                }
            },
            invalidatesTags: ['exhibitor'],
        }),
    }),
})

export const {
    useSponsorRegistrationMutation,
    useExhibitorRegistrationMutation,
    useAttendeeRegistrationMutation,
    useContactFormMutation,
} = authApiSlice
