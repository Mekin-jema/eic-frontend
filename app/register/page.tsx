"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import {
	useForm,
	type Resolver,
	type SubmitHandler,
	type UseFormHandleSubmit,
} from "react-hook-form"
import { toast } from "sonner"

import Header from "@/components/header"
import Footer from "@/components/footer"
import EventDetailsCard from "@/components/registration/EventDetailsCard"
import FormStep1 from "@/components/registration/FormStep1"
import FormStep2 from "@/components/registration/FormStep2"
import FormStep3 from "@/components/registration/FormStep3"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import { Progress } from "@/components/ui/progress"
import { defaultValues, formSchema, type FormValues } from "@/schema/registration.schema"

export default function RegisterPage() {
	const router = useRouter()
	const [currentStep, setCurrentStep] = useState(1)

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
		"hasExistingCompany",
		"companyName",
		"companySector",
		"businessLicense",
	]

	const step3Fields: (keyof FormValues)[] = [
		"attendance",
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

	const onSubmit: SubmitHandler<FormValues> = async (data) => {
		try {
			await form.trigger(step3Fields, { shouldFocus: true })
			toast.success("Registration submitted", {
				description: "Your registration details have been received.",
			})
			console.log("Registration payload", data)
			router.push("/register/success")
		} catch (error) {
			toast.error("Submission failed", {
				description: "Please check the form and try again.",
			})
		}
	}

	const stepTitles = ["Personal Info", "Professional", "Additional"]

	return (
		<div className="min-h-screen bg-[#0f2f1f] text-white">
	

			<main className="px-4 py-6 sm:py-10">
				<div className="w-full">
					<div className="text-center mb-6">
						<h1 className="text-3xl sm:text-4xl font-bold">
							Register for Invest in Ethiopia 2026
						</h1>
						<p className="mt-3 text-[#c0be2b]/80">
							March 26–27, 2026 • Ethiopian Skylight Hotel, Addis Ababa
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
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
