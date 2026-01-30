export interface sponsorRegistration {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    jobTitle: string
    companyName: string
    country: string
    companySector: string
    hearAboutUs: string
    message: string
    amount: number
    FixedlineNumber: string
}
export interface exhibitorRegistration {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    jobTitle: string
    companyName: string
    country: string
    companySector: string
    hearAboutUs: string
    message: string
    FixedlineNumber: string
    // boothSize removed - now fixed to "3x3"
    productCategory: string
    specialRequirements?: string
}
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
    FixedlineNumber: string
}

export interface MessageResponse {
    message: string
}
