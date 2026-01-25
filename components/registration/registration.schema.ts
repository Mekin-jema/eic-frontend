import { z } from 'zod'

export const registrationSchema = z
  .object({
    firstName: z.string().trim().min(1, 'First name is required'),
    lastName: z.string().trim().min(1, 'Last name is required'),
    email: z.string().trim().email('Invalid email address'),
    phoneNumber: z
      .string()
      .trim()
      .min(7, 'Phone number is required')
      .regex(/^\+?[0-9]{7,15}$/, 'Enter a valid phone number (7-15 digits, optional +)'),
    occupation: z.string().trim().min(1, 'Occupation is required'),
    organization: z
      .string()
      .trim()
      .default(''),
    country: z.string().trim().min(1, 'Country is required'),
    interests: z.array(z.string().trim()).min(1, 'Please select at least one area of interest').default([]),
    hearAboutUs: z.string().trim().min(1, 'Please tell us how you heard about us'),
    specialNeeds: z
      .string()
      .trim()
      .default(''),
    proofDocument: z
      .any()
      .optional()
      .refine(
        (file) =>
          !file ||
          (typeof File !== 'undefined' && file instanceof File &&
            file.size <= 5_000_000 &&
            ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg', 'image/webp'].includes(file.type)),
        'Upload a PDF or image (max 5MB)'
      ),
  })

export type RegistrationFormValues = z.input<typeof registrationSchema>

export const registrationDefaultValues: RegistrationFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  occupation: '',
  organization: '',
  country: '',
  interests: [],
  hearAboutUs: '',
  specialNeeds: '',
}
