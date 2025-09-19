'use client'
import { Select, TextInput, Textarea, Radio, Group, Stack, Title, Grid } from '@mantine/core'
import { UseFormReturn } from 'react-hook-form'
import { PatientFormData, FORM_OPTIONS, AccessTypeValue, AccessMaturityValue, FunctionalStatusValue, ClinicValue } from './types'
import { DatePickerInput } from '@mantine/dates'

interface MedicalInfoStepProps {
  form: UseFormReturn<PatientFormData>
}

const MedicalInfoStep: React.FC<MedicalInfoStepProps> = ({ form }) => {
  const { register, formState: { errors }, setValue, watch } = form

  return (
    <Stack gap="lg">
      <Title order={3} c="dimmed">Medical Information</Title>
      
        <Grid>
          <Grid.Col span={6}>
            <Select
              label="Access Type"
              placeholder="Select access type"
              data={FORM_OPTIONS.accessType}
              required
              value={watch('accessType') || null}
              error={errors.accessType?.message}
              onChange={(value) => setValue('accessType', value as AccessTypeValue)}
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              label="Access Location"
              placeholder="Enter access location"
              required
              {...register('accessLocation')}
              error={errors.accessLocation?.message}
            />
          </Grid.Col>
        </Grid>

      <Grid>
        <Grid.Col span={6}>
          <Select
            label="Access Maturity"
            placeholder="Select access maturity"
            data={FORM_OPTIONS.accessMaturity}
            value={watch('accessMaturity') || null}
            error={errors.accessMaturity?.message}
            onChange={(value) => setValue('accessMaturity', value as AccessMaturityValue)}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Stack gap="xs">
            <label style={{ fontSize: '14px', fontWeight: 500 }}>Functional Status</label>
            <Radio.Group
              value={watch('functionalStatus')}
              onChange={(value) => setValue('functionalStatus', value as FunctionalStatusValue)}
            >
              <Group>
                {FORM_OPTIONS.functionalStatus.map((option) => (
                  <Radio key={option.value} value={option.value} label={option.label} />
                ))}
              </Group>
            </Radio.Group>
            {errors.functionalStatus && (
              <span style={{ color: 'red', fontSize: '12px' }}>
                {errors.functionalStatus.message}
              </span>
            )}
          </Stack>
        </Grid.Col>
      </Grid>

      <Grid>
        <Grid.Col span={6}>
          <TextInput
            label="Surgeon"
            placeholder="Enter surgeon name"
            required
            {...register('surgeon')}
            error={errors.surgeon?.message}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <Select
            label="Clinic"
            placeholder="Select clinic"
            data={FORM_OPTIONS.clinic}
            value={watch('clinic') || null}
            error={errors.clinic?.message}
            onChange={(value) => setValue('clinic', value as ClinicValue)}
          />
        </Grid.Col>
      </Grid>

      <DatePickerInput
        label="Access Creation Date"
        placeholder="Select access creation date"
        value={watch('accessCreationDate') ? new Date(watch('accessCreationDate')!) : null}
        onChange={(value) => setValue('accessCreationDate', value || '')}
        error={errors.accessCreationDate?.message}
      />

      <Textarea
        label="Known Allergies"
        placeholder="Enter known allergies"
        minRows={3}
        {...register('knownAllergies')}
        error={errors.knownAllergies?.message}
      />

      <Textarea
        label="Current Medications"
        placeholder="Enter current medications"
        minRows={3}
        {...register('currentMedications')}
        error={errors.currentMedications?.message}
      />

      <Textarea
        label="Additional Notes"
        placeholder="Enter any additional notes"
        minRows={3}
        {...register('additionalNotes')}
        error={errors.additionalNotes?.message}
      />
    </Stack>
  )
}

export default MedicalInfoStep
