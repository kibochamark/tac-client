'use client'
import { Grid, Stack, Title, TextInput } from '@mantine/core'
import { UseFormReturn } from 'react-hook-form'
import { PatientFormData } from './types'

interface ContactInfoStepProps {
  form: UseFormReturn<PatientFormData>
}

const ContactInfoStep: React.FC<ContactInfoStepProps> = ({ form }) => {
  const { register, formState: { errors } } = form

  return (
    <Stack gap="lg">
      <Title order={3} c="dimmed">Contact Information</Title>
      
      <Grid>
        <Grid.Col span={6}>
          <TextInput
            label="Phone Number"
            placeholder="Enter phone number"
            required
            {...register('phoneNumber')}
            error={errors.phoneNumber?.message}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            label="Email Address"
            placeholder="Enter email address"
            type="email"
            required
            {...register('email')}
            error={errors.email?.message}
          />
        </Grid.Col>
      </Grid>

      <TextInput
        label="Address"
        placeholder="Enter full address"
        required
        {...register('address')}
        error={errors.address?.message}
      />

      <Grid>
        <Grid.Col span={6}>
          <TextInput
            label="Emergency Contact Name"
            placeholder="Enter emergency contact name"
            {...register('emergencyContactName')}
            error={errors.emergencyContactName?.message}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            label="Emergency Contact Phone"
            placeholder="Enter emergency contact phone"
            {...register('emergencyContactPhone')}
            error={errors.emergencyContactPhone?.message}
          />
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={6}>
          <TextInput
            label="Insurance Provider"
            placeholder="Enter insurance provider"
            {...register('insuranceProvider')}
            error={errors.insuranceProvider?.message}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            label="Insurance Number"
            placeholder="Enter insurance number"
            {...register('insuranceNumber')}
            error={errors.insuranceNumber?.message}
          />
        </Grid.Col>
      </Grid>
    </Stack>
  )
}

export default ContactInfoStep
