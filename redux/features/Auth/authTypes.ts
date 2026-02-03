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

export interface contactForm {
    name: string
    email: string
    phoneNumber: string
    jobTitle: string
    companyName: string
    country: string
    message: string
    fixedlineNumber?: string
}

export interface MessageResponse {
    message: string
}
