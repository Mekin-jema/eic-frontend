"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import {
	useForm,
	type Resolver,
	type SubmitHandler,
	type UseFormHandleSubmit,
} from "react-hook-form"
import { toast } from "sonner"
import FormStep1 from "@/components/registration/FormStep1"
import FormStep2 from "@/components/registration/FormStep2"
import FormStep3 from "@/components/registration/FormStep3"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import { Progress } from "@/components/ui/progress"
import { defaultValues, formSchema, type FormValues } from "@/schema/registration.schema"
import { useRegisterAttendeeMutation } from "@/redux/features/attendeeApiSlice"
import countryList from "react-select-country-list"

const categoryLabels: Record<string, string> = {
	inv: "Investor",
	gov: "Government Official",
	dip: "Diplomat / Development Partner",
	med: "Media",
	aca: "Academia/Research Institution",
	con: "Business Consultant",
	oth: "Other",
}

const sectorLabels: Record<string, string> = {
	agri: "Agriculture and Agribusiness",
	manu: "Manufacturing and Industry",
	tech: "Technology and Innovation",
	energy: "Energy and Renewable Resources",
	infra: "Infrastructure and Construction",
	tour: "Tourism and Hospitality",
	health: "Healthcare and Pharmaceuticals",
	edu: "Education and Training",
	fin: "Finance and Banking",
	mine: "Mining and Natural Resources",
	prop: "Real Estate and Property Development",
	logi: "Transportation and Logistics",
	tele: "Telecommunications",
}

const countryOptions = countryList().getData()
const getCountryLabel = (code?: string) =>
	code ? countryOptions.find((item) => item.value === code)?.label ?? code : ""

export default function RegisterPage() {
	const router = useRouter()
	const [currentStep, setCurrentStep] = useState(1)
	const [registerAttendee] = useRegisterAttendeeMutation()

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema) as Resolver<FormValues>,
		defaultValues,
		mode: "onBlur",
	})

	const handleSubmit = form.handleSubmit as UseFormHandleSubmit<FormValues>

	const step1Fields: (keyof FormValues)[] = [
		"firstName",
		"lastName",
		"email",
		"phoneNumber",
	]

	const step2Fields: (keyof FormValues)[] = [
		"organization",
		"jobTitle",
		"country",
		"category",
		"sectorInterest",
		"otherCategory",
		"hasExistingCompany",
		"companyName",
		"companySector",
		"businessLicense",
	]

	const step3Fields: (keyof FormValues)[] = [
		"day1Attendance",
		"day1Sessions",
		"day2Attendance",
		"day2Sessions",
		"needsVisa",
		"siteVisit",
		"passportCopy",
		"specialRequirements",
		"communicationPreference",
	]

	const handleNext = async () => {
		const fields = currentStep === 1 ? step1Fields : step2Fields
		const valid = await form.trigger(fields, { shouldFocus: true })
		if (valid) setCurrentStep((s) => Math.min(s + 1, 3))
	}

	const handleBack = () => setCurrentStep((s) => Math.max(s - 1, 1))

	useEffect(() => {
		if (currentStep === 3) {
			window.scrollTo({ top: 0, behavior: "smooth" })
		}
	}, [currentStep])

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		try {
			const isValid = await form.trigger(step3Fields, { shouldFocus: true })
			if (!isValid) return

			const formData = new FormData()
			formData.append("firstName", data.firstName)
			formData.append("lastName", data.lastName)
			formData.append("email", data.email)
			formData.append("phoneNumber", data.phoneNumber)
			formData.append("organization", data.organization)
			formData.append("jobTitle", data.jobTitle)
			const countryLabel = getCountryLabel(data.country)
			const categoryLabel = data.category
				? categoryLabels[data.category] ?? data.category
				: ""
			const sectorLabel = data.sectorInterest
				? sectorLabels[data.sectorInterest] ?? data.sectorInterest
				: ""

			formData.append("country", countryLabel)
			formData.append("category", categoryLabel)
			formData.append("hasExistingCompany", String(data.hasExistingCompany))
			formData.append("needsVisa", data.needsVisa)
			formData.append("siteVisit", data.siteVisit)
			formData.append("communicationPreference", data.communicationPreference)

			if (data.day1Attendance) formData.append("day1Attendance", data.day1Attendance)
			if (data.day2Attendance) formData.append("day2Attendance", data.day2Attendance)
			if (data.day1Sessions?.length) {
				formData.append("day1Sessions", JSON.stringify(data.day1Sessions))
			}
			if (data.day2Sessions?.length) {
				formData.append("day2Sessions", JSON.stringify(data.day2Sessions))
			}
			if (sectorLabel) formData.append("sectorInterest", sectorLabel)
			if (data.otherCategory) formData.append("otherCategory", data.otherCategory)
			if (data.companyName) formData.append("companyName", data.companyName)
			if (data.companySector) formData.append("companySector", data.companySector)
			if (data.specialRequirements) {
				formData.append("specialRequirements", data.specialRequirements)
			}

			if (data.businessLicense instanceof File) {
				formData.append("businessLicense", data.businessLicense)
			}
			if (data.passportCopy instanceof File) {
				formData.append("passportCopy", data.passportCopy)
			}

			await registerAttendee(formData).unwrap()

			toast.success("Registration submitted", {
				description: "Your registration details have been received.",
			})
			router.push("/register/success")
		} catch (error) {
			const fallbackMessage = "Please check the form and try again."
			const message =
				error instanceof Error
					? error.message
					: (error as { data?: { message?: string; error?: string } })?.data
							?.message ||
							(error as { data?: { message?: string; error?: string } })?.data
								?.error ||
							fallbackMessage
			toast.error("Submission failed", {
				description: message,
			})
		}
	}

	const stepTitles = ["Personal Info", "Professional", "Additional"]

	return (
		<div className="min-h-screen bg-[#001E67] text-white">
	

			<main className="px-4 py-6 sm:py-10 max-w-5xl mx-auto">
				<div className="w-full mx-auto">
					<div className="text-center mb-6">
						<h1 className="text-3xl sm:text-4xl font-bold">
							Register for Invest in Ethiopia 2026
						</h1>
						<p className="mt-3 text-[#c0be2b]/80">
							March 26–27, 2026 • Ethiopian Skylight Hotel, Addis Ababa
						</p>
					</div>

					<div className="grid w-full grid-cols-1 gap-6 mx-auto">
						<Card className="border-[#1E2B4D] shadow-lg">
							<CardHeader className="bg-linear-to-r from-[#0D261A] via-[#1F8A5B] to-[#0D261A]">
								<div className="flex flex-col gap-3">
									<CardTitle className="text-xl text-white">
										Step {currentStep}: {stepTitles[currentStep - 1]}
									</CardTitle>
									<Progress
										value={((currentStep - 1) / (stepTitles.length - 1)) * 100}
										className="h-2 bg-[#1E2B4D]/40 **:data-[slot=progress-indicator]:bg-[#D7B15A]"
									/>
								</div>
							</CardHeader>

							<CardContent className="pt-6">
								<Form {...form}>
									<form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
										{currentStep === 1 && <FormStep1 />}
										{currentStep === 2 && <FormStep2 />}
										{currentStep === 3 && <FormStep3 />}

										<div className="flex items-center justify-between border-t pt-6">
											<div>
												{currentStep > 1 && (
													<Button
														type="button"
														variant="outline"
														onClick={handleBack}
														className="border-[#94A3B8] text-[#0A1D47] hover:bg-[#F7F1E1]"
													>
														← Previous
													</Button>
												)}
											</div>
											<div>
												{currentStep < 3 && (
													<Button
														type="button"
														onClick={handleNext}
														className="bg-[#1F8A5B] hover:bg-[#18704A]"
													>
														Continue →
													</Button>
												)}
											</div>
										</div>
									</form>
								</Form>
							</CardContent>
						</Card>

						{/* <EventDetailsCard /> */}
					</div>
				</div>
			</main>


		</div>
	)
}
