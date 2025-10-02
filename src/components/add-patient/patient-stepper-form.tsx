'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { Alert, Button, Group, Stepper } from '@mantine/core'
import { AlertCircle } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import ContactInfoStep from './contact-info-step'
import MedicalInfoStep from './medical-info-step'
import PersonalInfoStep from './personal-info-step'
import ReviewStep from './review-step'
import { PatientFormData, patientFormSchema, PatientFormStep } from './types'
import { usePersistentForm } from '../../hooks/usePersistentForm'

const PatientStepperForm: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState<string | null>(null)

    const form = usePersistentForm<PatientFormData>({
        key: 'patient-form-data',
        schema: patientFormSchema,
        resolver: zodResolver(patientFormSchema),
        mode: 'onChange',
        defaultValues: {
            firstName: '',
            lastName: '',
            sex: undefined,
            maritalStatus: undefined,
            dateOfBirth: '',
            nationalId: '',
            bloodGroup: undefined,
            phoneNumber: '',
            email: '',
            address: '',
            emergencyContactName: '',
            emergencyContactPhone: '',
            insuranceProvider: '',
            insuranceNumber: '',
            accessType: undefined,
            accessLocation: '',
            accessMaturity: undefined,
            functionalStatus: undefined,
            surgeon: '',
            clinic: undefined,
            accessCreationDate: '',
            knownAllergies: '',
            currentMedications: '',
            additionalNotes: '',
        },
    })

    const { trigger } = form

    const steps = [
        { label: 'Personal Info', description: 'Basic information' },
        { label: 'Contact Info', description: 'Contact details' },
        { label: 'Medical Info', description: 'Medical information' },
        { label: 'Review', description: 'Review & submit' },
    ]

    const validateCurrentStep = async () => {
        const currentStepFields = getCurrentStepFields(activeStep)
        const isValid = await trigger(currentStepFields)
        return isValid
    }

    const getCurrentStepFields = (step: number): (keyof PatientFormData)[] => {
        switch (step) {
            case 0:
                return ['firstName', 'lastName', 'sex', 'dateOfBirth', 'nationalId', 'bloodGroup']
            case 1:
                return ['phoneNumber', 'email', 'address']
            case 2:
                return ['accessType', 'accessLocation', 'surgeon']
            default:
                return []
        }
    }

    const nextStep = async () => {
        const isValid = await validateCurrentStep()
        if (isValid) {
            setActiveStep((current) => (current < steps.length - 1 ? current + 1 : current))
            setSubmitError(null)
        }
    }

    const prevStep = () => {
        setActiveStep((current) => (current > 0 ? current - 1 : current))
        setSubmitError(null)
    }

    const goToStep = (step: number) => {
        setActiveStep(step)
        setSubmitError(null)
    }

    const handleEdit = (step: PatientFormStep) => {
        const stepMap = {
            personal: 0,
            contact: 1,
            medical: 2,
            review: 3,
        }
        goToStep(stepMap[step])
    }

    const onSubmit = async () => {
        setIsSubmitting(true)
        setSubmitError(null)

        try {
            const isValid = await form.trigger()
            if (isValid) {
                // const formData = getValues()
                toast.info('Processing patient data...')

                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 2000))

                // Reset form after successful submission
                form.reset()
                setActiveStep(0)
                // Clear localStorage after successful submission
                localStorage.removeItem('patient-form-data')
                toast.success('Patient information submitted successfully!')
            } else {
                setSubmitError('Please fix all validation errors before submitting.')
            }
        } catch {
            setSubmitError('An error occurred while submitting the form. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const renderStepContent = () => {
        switch (activeStep) {
            case 0:
                return <PersonalInfoStep form={form}/>
            case 1:
                return <ContactInfoStep form={form} />
            case 2:
                return <MedicalInfoStep form={form} />
            case 3:
                return (
                    <ReviewStep
                        form={form}
                        onEdit={handleEdit}
                        onSubmit={onSubmit}
                        isSubmitting={isSubmitting}
                    />
                )
            default:
                return null
        }
    }

    return (
        <div>
            {submitError && (
                <Alert
                    icon={<AlertCircle size={16} />}
                    title="Error"
                    color="red"
                    mb="md"
                    onClose={() => setSubmitError(null)}
                    withCloseButton
                >
                    {submitError}
                </Alert>
            )}

            <Stepper active={activeStep} onStepClick={goToStep}>
                {steps.map((step, index) => (
                    <Stepper.Step
                        key={index}
                        label={step.label}
                        description={step.description}
                        allowStepSelect={index < activeStep}
                    />
                ))}
            </Stepper>

            <div style={{ marginTop: '2rem' }}>
                {renderStepContent()}
            </div>

            {activeStep < 3 && (
                <Group justify="space-between" mt="xl">
                    <Button variant="default" onClick={prevStep} disabled={activeStep === 0}>
                        Previous
                    </Button>
                    <Button onClick={nextStep}>
                        {activeStep === steps.length - 2 ? 'Review' : 'Next'}
                    </Button>
                </Group>
            )}
        </div>
    )
}

export default PatientStepperForm
