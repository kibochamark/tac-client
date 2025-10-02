'use client'
import { Grid, Stack, Title, TextInput, Text } from '@mantine/core'
import { UseFormReturn } from 'react-hook-form'
import { PatientFormData } from './types'

interface ContactInfoStepProps {
  form: UseFormReturn<PatientFormData>
}

const ContactInfoStep: React.FC<ContactInfoStepProps> = ({ form }) => {
  const { register, formState: { errors } } = form

  return (
    <Stack gap="xl">
      <div className="shadow-md p-4 lg:p-14 rounded-xl">
        <div className='text-center mb-4 lg:mb-8'>
          <Title order={3} c="dimmed" >Contact Information</Title>
          <Text>Enter contact details and emergency contact</Text>
        </div>

        <Grid mb="md">
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              label="Phone Number"
              placeholder="Enter phone number"
              required
              size="sm"
              radius="xl"
              {...register('phoneNumber')}
              error={errors.phoneNumber?.message}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              label="Email Address"
              placeholder="Enter email address"
              type="email"
              required
              size="sm"
              radius="xl"
              {...register('email')}
              error={errors.email?.message}
            />
          </Grid.Col>
        </Grid>

        <TextInput
          label="Address"
          placeholder="Enter full address"
          required
          size="sm"
          radius="xl"
          mb="md"
          {...register('address')}
          error={errors.address?.message}
        />

        <Grid mb="md">
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              label="Emergency Contact Name"
              placeholder="Enter emergency contact name"
              size="sm"
              radius="xl"
              {...register('emergencyContactName')}
              error={errors.emergencyContactName?.message}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              label="Emergency Contact Phone"
              placeholder="Enter emergency contact phone"
              size="sm"
              radius="xl"
              {...register('emergencyContactPhone')}
              error={errors.emergencyContactPhone?.message}
            />
          </Grid.Col>
        </Grid>

        <Grid mb="md">
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              label="Insurance Provider"
              placeholder="Enter insurance provider"
              size="sm"
              radius="xl"
              {...register('insuranceProvider')}
              error={errors.insuranceProvider?.message}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6 }}>
            <TextInput
              label="Insurance Number"
              placeholder="Enter insurance number"
              size="sm"
              radius="xl"
              {...register('insuranceNumber')}
              error={errors.insuranceNumber?.message}
            />
          </Grid.Col>
        </Grid>
      </div>
    </Stack>
  )
}

export default ContactInfoStep
