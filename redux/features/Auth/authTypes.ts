export interface attendeeRegistration {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    // age removed
    occupation: string
    organization?: string
    country: string
    interests: string[]
    registrationType: 'individual' | 'group'
    groupSize?: number
    needsVisa?: boolean
    specialNeeds?: string
}
