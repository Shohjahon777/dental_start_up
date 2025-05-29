import {FormSection} from "@/components/forms/form-fields/FormSection.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
// import {YesNoWithDetails} from "@/components/forms/form-fields/RadioGroup.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { YesNoWithDetails } from "./form-fields/YesNoWithDetails";

export const PaperOneForm = () => {

	const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>();
	const [lastExam, setLastExam] = useState<Date | undefined>();
	const [lastXrays, setLastXrays] = useState<Date | undefined>();


	return (
		<div className="space-y-6">
			<FormSection title="Personal Information">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="space-y-2">
						<Label htmlFor="fullName">What is your full name?</Label>
						<Input id="fullName" placeholder="Enter your full name" />
					</div>
					<div className="space-y-2">
						<Label htmlFor="dateOfBirth">What is your date of birth?</Label>
						<Popover>
							<PopoverTrigger asChild>
								<Button
									variant={"outline"}
									className={cn(
										"w-full justify-start text-left font-normal",
										!dateOfBirth && "text-muted-foreground"
									)}
								>
									<CalendarIcon className="mr-2 h-4 w-4" />
									{dateOfBirth ? format(dateOfBirth, "PPP") : <span>Pick a date</span>}
								</Button>
							</PopoverTrigger>
							<PopoverContent className="w-auto p-0">
								<Calendar
									mode="single"
									selected={dateOfBirth}
									onSelect={setDateOfBirth}
									initialFocus
								/>
							</PopoverContent>
						</Popover>
					</div>
				</div>

				<div className="space-y-2">
					<Label htmlFor="address">What is your address?</Label>
					<Input id="address" placeholder="Enter your complete address" />
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="space-y-2">
						<Label htmlFor="phoneNumber">What are your phone number(s)?</Label>
						<Input id="phoneNumber" type="tel" placeholder="Enter your phone number" />
					</div>
					<div className="space-y-2">
						<Label htmlFor="emailAddress">What is your email address?</Label>
						<Input id="emailAddress" type="email" placeholder="Enter your email address" />
					</div>
				</div>

				<div className="space-y-2">
					<Label htmlFor="emergencyContact">What is your emergency contact information (name, phone number, relationship)?</Label>
					<Input id="emergencyContact" placeholder="Name, phone number, relationship" />
				</div>
			</FormSection>

			<FormSection title="Current Visit">
				<div className="space-y-2">
					<Label htmlFor="visitReason">What is the reason for your visit today?</Label>
					<Textarea
						id="visitReason"
						placeholder="Please describe the reason for your visit today"
						rows={3}
					/>
				</div>

				<div className="space-y-2">
					{/*<Label htmlFor="currentPain">Are you currently experiencing any dental pain or discomfort? If yes, describe.</Label>*/}
					{/*<Textarea*/}
					{/*	id="currentPain"*/}
					{/*	placeholder="Describe any pain or discomfort you're experiencing"*/}
					{/*	rows={3}*/}
					{/*/>*/}

				<YesNoWithDetails
					id="currentPain"
					question={"Are you currently experiencing any dental pain or discomfort? If yes, describe."}
					detailsPlaceholder={"Describe any pain or discomfort you're experiencing"}
				/>
				</div>
			</FormSection>

			<FormSection title="Dental History">
				<div className="space-y-2">
					<Label htmlFor="lastExam">What is the date of last dental exam?</Label>
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant={"outline"}
								className={cn(
									"w-full justify-start text-left font-normal",
									!lastExam && "text-muted-foreground"
								)}
							>
								<CalendarIcon className="mr-2 h-4 w-4" />
								{lastExam ? format(lastExam, "PPP") : <span>Pick a date</span>}
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-auto p-0">
							<Calendar
								mode="single"
								selected={lastExam}
								onSelect={setLastExam}
								initialFocus
							/>
						</PopoverContent>
					</Popover>
				</div>

				<div className="space-y-2">
					<Label htmlFor="lastAppointment">What was done at your last dental appointment?</Label>
					<Textarea
						id="lastAppointment"
						placeholder="Describe what procedures or treatments were performed"
						rows={2}
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="lastXrays">What is the date of last dental x-rays?</Label>
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant={"outline"}
								className={cn(
									"w-full justify-start text-left font-normal",
									!lastXrays && "text-muted-foreground"
								)}
							>
								<CalendarIcon className="mr-2 h-4 w-4" />
								{lastXrays ? format(lastXrays, "PPP") : <span>Pick a date</span>}
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-auto p-0">
							<Calendar
								mode="single"
								selected={lastXrays}
								onSelect={setLastXrays}
								initialFocus
							/>
						</PopoverContent>
					</Popover>
				</div>

				<YesNoWithDetails
					id="orthodonticTreatment"
					detailsPlaceholder={"Describe your problem"}
					question="Have you ever had orthodontic treatment (braces)?"
				/>

				<YesNoWithDetails
					detailsPlaceholder={"Describe your problem"}
					id="dentalAppliances"
					question="Do you wear removable dental appliances (dentures, partials, retainers, mouthguards)?"
				/>
			</FormSection>

			<FormSection title="Current Symptoms">
				<YesNoWithDetails
					id="bleedingGums"
					detailsPlaceholder={"Describe your problem"}

					question="Do your gums bleed when you brush or floss?"
				/>

				<YesNoWithDetails
					id="teethSensitive"
					detailsPlaceholder={"Describe your problem"}
					question="Are your teeth sensitive to cold, hot, sweets, or pressure?"
				/>

				<YesNoWithDetails
					id="cankerSores"
					detailsPlaceholder={"Describe your problem"}
					question="Do you have frequent canker sores or ulcers in your mouth?"
				/>

				<YesNoWithDetails
					id="periodontalTreatments"
					detailsPlaceholder={"Describe your problem"}
					question="Have you ever had any periodontal (gum) treatments?"
				/>

				<YesNoWithDetails
					id="jawProblems"
					detailsPlaceholder={"Describe your problem"}
					question="Do you have any clicking, popping, or discomfort in your jaw joints (TMJ)?"
				/>

				<YesNoWithDetails
					id="teethGrinding"
					detailsPlaceholder={"Describe your problem"}
					question="Do you brux or grind your teeth?"
				/>

				<YesNoWithDetails
					id="dryMouth"
					detailsPlaceholder={"Describe your problem"}

					question="Is your mouth often dry?"
				/>
			</FormSection>

			<FormSection title="Medical History">
				<div className="space-y-2">
					{/*<Label htmlFor="headMouthInjury">Have you ever had a serious injury to your head or mouth? If yes, describe.</Label>*/}
					{/*<Textarea*/}
					{/*	id="headMouthInjury"*/}
					{/*	placeholder="Describe any serious injuries to your head or mouth"*/}
					{/*	rows={2}*/}
					{/*/>*/}

					<YesNoWithDetails
						id={"headMouthInjury"}
						detailsPlaceholder={"Describe any serious injuries to your head or mouth"}
						question={"Have you ever had a serious injury to your head or mouth? If yes, describe."}
					/>
				</div>

				<div className="space-y-2">
					{/*<Label htmlFor="dentalProblems">Have you ever had problems with previous dental treatment? If yes, describe.</Label>*/}
					{/*<Textarea*/}
					{/*	id="dentalProblems"*/}
					{/*	placeholder="Describe any problems with previous dental treatment"*/}
					{/*	rows={2}*/}
					{/*/>*/}

					<YesNoWithDetails
						id={"dentalProblems"}
						detailsPlaceholder={"Describe any problems with previous dental treatment"}
						question={"Have you ever had problems with previous dental treatment? If yes, describe."}
					/>
				</div>

				<div className="space-y-2">
					{/*<Label htmlFor="anesthesiaReaction">Have you ever had a reaction to dental anesthesia? If yes, describe.</Label>*/}
					{/*<Textarea*/}
					{/*	id="anesthesiaReaction"*/}
					{/*	placeholder="Describe any reactions to dental anesthesia"*/}
					{/*	rows={3}*/}
					{/*/>*/}

					<YesNoWithDetails
						id={"anesthesiaReaction"}
						detailsPlaceholder={"Describe any reactions to dental anesthesia"}
						question={"Have you ever had a reaction to dental anesthesia? If yes, describe."}
					/>
				</div>
			</FormSection>

			<FormSection title="Oral Care & Appearance">
				<div className="space-y-2">
					<Label htmlFor="teethAppearance">How do you feel about the appearance of your teeth?</Label>
					<Textarea
						id="teethAppearance"
						placeholder="Share your thoughts about your teeth's appearance"
						rows={3}
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="brushingFrequency">How often do you brush your teeth?</Label>
					<Input id="brushingFrequency" placeholder="e.g., twice daily, once daily, etc." />
				</div>

				<div className="space-y-2">
					<Label htmlFor="flossingFrequency">How often do you floss?</Label>
					<Input id="flossingFrequency" placeholder="e.g., daily, weekly, never, etc." />
				</div>

				<div className="space-y-2">
					<Label htmlFor="mouthwashUse">Do you use any mouthwash? If so, what kind and how often?</Label>
					<Textarea
						id="mouthwashUse"
						placeholder="Describe your mouthwash usage"
						rows={2}
					/>
				</div>
			</FormSection>
		</div>
	);
};