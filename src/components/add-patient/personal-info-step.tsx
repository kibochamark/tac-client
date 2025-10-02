'use client'
import { Grid, Stack, Title, Select, TextInput, Text } from '@mantine/core'
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
            <div className="shadow-md p-4 lg:p-14 rounded-xl">   
            <div className='text-center mb-4 lg:mb-8'>
            <Title order={3} c={"dimmed"} >Personal Information</Title>
            <Text>Enter the patient&apos;s basic personal details</Text>
            </div>

            <Grid mb="md">
                <Grid.Col span={{ base: 12, sm: 6 }}>
                    <TextInput
                        label="First Name"
                        placeholder="Enter first name"
                        required
                        size="sm"
                        radius="xl"
                        {...register('firstName')}
                        error={errors.firstName?.message}
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                    <TextInput
                        label="Last Name"
                        placeholder="Enter last name"
                        required
                        size="sm"
                        radius="xl"
                        {...register('lastName')}
                        error={errors.lastName?.message}
                    />
                </Grid.Col>
            </Grid>

                <Grid mb="md">
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Select
                            label="Sex"
                            placeholder="Select sex"
                            data={FORM_OPTIONS.sex}
                            required
                            size="sm"
                            radius="xl"
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
                            size="sm"
                            radius="xl"
                            value={watch('maritalStatus') || null}
                            error={errors.maritalStatus?.message}
                            onChange={(value: string | null) => setValue('maritalStatus', value as MaritalStatusValue)}
                        />
                    </Grid.Col>
                </Grid>

            <Grid mb="md">
                <Grid.Col span={{ base: 12, sm: 6 }}>
                    <DatePickerInput
                        label="Date of Birth"
                        placeholder="Select date of birth"
                        required
                        size="sm"
                        radius="xl"
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
                        size="sm"
                        radius="xl"
                        {...register('nationalId')}
                        error={errors.nationalId?.message}
                    />
                </Grid.Col>
            </Grid>

                <Grid mb="md">
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                        <Select
                            label="Blood Group"
                            placeholder="Select blood group"
                            data={FORM_OPTIONS.bloodGroup}
                            required
                            size="sm"
                            radius="xl"
                            value={watch('bloodGroup') || null}
                            error={errors.bloodGroup?.message}
                            onChange={(value: string | null) => setValue('bloodGroup', value as BloodGroupValue)}
                        />
                    </Grid.Col>
                </Grid>
            </div>
            </Stack>
    )
}

export default PersonalInfoStep
