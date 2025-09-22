'use client'
import { Grid, Stack, Title, Select, TextInput } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import { UseFormReturn } from 'react-hook-form'
import { PatientFormData, FORM_OPTIONS, SexValue, MaritalStatusValue, BloodGroupValue } from './types'

interface PersonalInfoStepProps {
    form: UseFormReturn<PatientFormData>
}

const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({ form }) => {
    const { register, formState: { errors }, setValue, watch } = form

    return (
        <Stack gap="lg">
            <Title order={3} c={"dimmed"}>Personal Information</Title>

            <Grid>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                    <TextInput
                        label="First Name"
                        placeholder="Enter first name"
                        required
                        {...register('firstName')}
                        error={errors.firstName?.message}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                    <TextInput
                        label="Last Name"
                        placeholder="Enter last name"
                        required
                        {...register('lastName')}
                        error={errors.lastName?.message}
                    />
                </Grid.Col>
            </Grid>

                <Grid>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Select
                            label="Sex"
                            placeholder="Select sex"
                            data={FORM_OPTIONS.sex}
                            required
                            value={watch('sex') || null}
                            error={errors.sex?.message}
                            onChange={(value: string | null) => setValue('sex', value as SexValue)}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Select
                            label="Marital Status"
                            placeholder="Select marital status"
                            data={FORM_OPTIONS.maritalStatus}
                            value={watch('maritalStatus') || null}
                            error={errors.maritalStatus?.message}
                            onChange={(value: string | null) => setValue('maritalStatus', value as MaritalStatusValue)}
                        />
                    </Grid.Col>
                </Grid>

            <Grid>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                    <DatePickerInput
                        label="Date of Birth"
                        placeholder="Select date of birth"
                        required
                        value={watch('dateOfBirth') ? new Date(watch('dateOfBirth')!) : null}
                        onChange={(value) => setValue('dateOfBirth', value || '')}
                        error={errors.dateOfBirth?.message}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                    <TextInput
                        label="National ID / SSN"
                        placeholder="Enter national ID or SSN"
                        required
                        {...register('nationalId')}
                        error={errors.nationalId?.message}
                    />
                </Grid.Col>
            </Grid>

                <Grid>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Select
                            label="Blood Group"
                            placeholder="Select blood group"
                            data={FORM_OPTIONS.bloodGroup}
                            required
                            value={watch('bloodGroup') || null}
                            error={errors.bloodGroup?.message}
                            onChange={(value: string | null) => setValue('bloodGroup', value as BloodGroupValue)}
                        />
                    </Grid.Col>
                </Grid>
        </Stack>
    )
}

export default PersonalInfoStep
