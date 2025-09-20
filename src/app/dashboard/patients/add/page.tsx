'use client'
import React from 'react'
import { Button, Group, Container, Title, Stack } from '@mantine/core'
import { ArrowLeft, Users } from 'lucide-react'
import Link from 'next/link'
import PatientStepperForm from '@/components/add-patient/patient-stepper-form'

const AddPatientPage = () => {
  return (
    <Container size="lg" py="xl">
      <Stack gap="xl">
        {/* Header with Back Button */}
        <Group justify="space-between" align="center" mb="md">
          <Group gap="xl" align="center">
            <Link href="/dashboard/patients" style={{ textDecoration: 'none' }}>
              <Button
                variant="outline"                
                size="sm"
                leftSection={<ArrowLeft size={18} />}
                radius="xl"       
              >
                Back to Patients
              </Button>
            </Link>
            <Group gap="xs" align="center">
              <Users size={24} color="#667eea" />
              <Title order={2} fw={500}>
                Add New Patient
              </Title>
            </Group>
          </Group>
        </Group>

        {/* Form */}
        <PatientStepperForm />
      </Stack>
    </Container>
  )
}

export default AddPatientPage