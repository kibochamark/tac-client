import { z } from 'zod'

// Centralized form options
export const FORM_OPTIONS = {
  sex: [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
  ] as const,

  maritalStatus: [
    { value: 'Single', label: 'Single' },
    { value: 'Married', label: 'Married' },
    { value: 'Divorced', label: 'Divorced' },
    { value: 'Widowed', label: 'Widowed' },
  ] as const,

  bloodGroup: [
    { value: 'O+', label: 'O+' },
    { value: 'O-', label: 'O-' },
    { value: 'A+', label: 'A+' },
    { value: 'A-', label: 'A-' },
    { value: 'B+', label: 'B+' },
    { value: 'B-', label: 'B-' },
    { value: 'AB+', label: 'AB+' },
    { value: 'AB-', label: 'AB-' },
  ] as const,

  accessType: [
    { value: 'AV Fistula', label: 'AV Fistula' },
    { value: 'AV Graft', label: 'AV Graft' },
    { value: 'Central Catheter', label: 'Central Catheter' },
  ] as const,

  accessMaturity: [
    { value: 'Immature', label: 'Immature' },
    { value: 'Mature', label: 'Mature' },
    { value: 'Failed', label: 'Failed' },
  ] as const,

  functionalStatus: [
    { value: 'Functional', label: 'Functional' },
    { value: 'Non-functional', label: 'Non-functional' },
  ] as const,

  clinic: [
    { value: 'Dialysis Center A', label: 'Dialysis Center A' },
    { value: 'Dialysis Center B', label: 'Dialysis Center B' },
    { value: 'Dialysis Center C', label: 'Dialysis Center C' },
    { value: 'Main Hospital', label: 'Main Hospital' },
  ] as const,
} as const

// Extract enum values from options for Zod schema
export const SEX_VALUES = FORM_OPTIONS.sex.map(option => option.value)
export const MARITAL_STATUS_VALUES = FORM_OPTIONS.maritalStatus.map(option => option.value)
export const BLOOD_GROUP_VALUES = FORM_OPTIONS.bloodGroup.map(option => option.value)
export const ACCESS_TYPE_VALUES = FORM_OPTIONS.accessType.map(option => option.value)
export const ACCESS_MATURITY_VALUES = FORM_OPTIONS.accessMaturity.map(option => option.value)
export const FUNCTIONAL_STATUS_VALUES = FORM_OPTIONS.functionalStatus.map(option => option.value)
export const CLINIC_VALUES = FORM_OPTIONS.clinic.map(option => option.value)


// Zod validation schema
export const patientFormSchema = z.object({
  // Personal Information
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  sex: z.enum(SEX_VALUES, {
    message: 'Sex is required',
  }).or(z.undefined()),
  maritalStatus: z.enum(MARITAL_STATUS_VALUES).optional(),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  nationalId: z.string().min(1, 'National ID/SSN is required'),
  bloodGroup: z.enum(BLOOD_GROUP_VALUES, {
    message: 'Blood group is required',
  }).or(z.undefined()),

  // Contact Information
  phoneNumber: z.string().min(1, 'Phone number is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  address: z.string().min(1, 'Address is required'),
  emergencyContactName: z.string().optional(),
  emergencyContactPhone: z.string().optional(),
  insuranceProvider: z.string().optional(),
  insuranceNumber: z.string().optional(),

  // Medical Information
  accessType: z.enum(ACCESS_TYPE_VALUES, {
    message: 'Access type is required',
  }).or(z.undefined()),
  accessLocation: z.string().min(1, 'Access location is required'),
  accessMaturity: z.enum(ACCESS_MATURITY_VALUES).optional(),
  functionalStatus: z.enum(FUNCTIONAL_STATUS_VALUES).optional(),
  surgeon: z.string().min(1, 'Surgeon is required'),
  clinic: z.enum(CLINIC_VALUES).optional(),
  accessCreationDate: z.string().optional(),
  knownAllergies: z.string().optional(),
  currentMedications: z.string().optional(),
  additionalNotes: z.string().optional(),
})

export type PatientFormData = z.infer<typeof patientFormSchema>

export type PatientFormStep = 'personal' | 'contact' | 'medical' | 'review'

// Type helpers for form components
export type SexValue = typeof SEX_VALUES[number]
export type MaritalStatusValue = typeof MARITAL_STATUS_VALUES[number]
export type BloodGroupValue = typeof BLOOD_GROUP_VALUES[number]
export type AccessTypeValue = typeof ACCESS_TYPE_VALUES[number]
export type AccessMaturityValue = typeof ACCESS_MATURITY_VALUES[number]
export type FunctionalStatusValue = typeof FUNCTIONAL_STATUS_VALUES[number]
export type ClinicValue = typeof CLINIC_VALUES[number]
