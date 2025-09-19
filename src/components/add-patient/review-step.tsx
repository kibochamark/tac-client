'use client'
import {
    Badge,
    Box,
    Button,
    Card,
    Divider,
    Grid,
    Group,
    Stack,
    Text,
    Title
} from '@mantine/core'
import { UseFormReturn } from 'react-hook-form'
import { PatientFormData } from './types'

interface ReviewStepProps {
    form: UseFormReturn<PatientFormData>
    onEdit: (step: 'personal' | 'contact' | 'medical') => void
    onSubmit: () => void
    isSubmitting: boolean
}

const ReviewStep: React.FC<ReviewStepProps> = ({ form, onEdit, onSubmit, isSubmitting }) => {
    const { getValues } = form
    const data = getValues()

    const formatDate = (dateString: string | undefined) => {
        if (!dateString) return 'Not specified'
        const date = new Date(dateString)
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date)
    }

    const InfoCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
        <Card shadow="sm" padding="md" radius="md" withBorder>
            <Stack gap="sm">
                <Group justify="space-between">
                    <Title order={4}>{title}</Title>
                    <Button variant="subtle" size="xs" onClick={() => onEdit(title.toLowerCase().split(' ')[0] as 'personal' | 'contact' | 'medical')}>
                        Edit
                    </Button>
                </Group>
                {children}
            </Stack>
        </Card>
    )

    return (
        <Stack gap="lg">
            <Title order={3} c="dimmed">Review & Submit</Title>

            <Text size="sm" c="dimmed">
                Please review all the information below before submitting. You can edit any section by clicking the &quot;Edit&quot; button.
            </Text>

            <InfoCard title="Personal Information">
                <Grid>
                    <Grid.Col span={6}>
                        <Text size="sm"><strong>Name:</strong> {data.firstName} {data.lastName}</Text>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Text size="sm"><strong>Sex:</strong> {data.sex}</Text>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Text size="sm"><strong>Date of Birth:</strong> {formatDate(data.dateOfBirth)}</Text>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Text size="sm"><strong>Blood Group:</strong> <Badge color="red" variant="light">{data.bloodGroup}</Badge></Text>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Text size="sm"><strong>Marital Status:</strong> {data.maritalStatus || 'Not specified'}</Text>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Text size="sm"><strong>National ID/SSN:</strong> {data.nationalId}</Text>
                    </Grid.Col>
                </Grid>
            </InfoCard>

            <InfoCard title="Contact Information">
                <Grid>
                    <Grid.Col span={6}>
                        <Text size="sm"><strong>Phone:</strong> {data.phoneNumber}</Text>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Text size="sm"><strong>Email:</strong> {data.email}</Text>
                    </Grid.Col>
                    <Grid.Col span={12}>
                        <Text size="sm"><strong>Address:</strong> {data.address}</Text>
                    </Grid.Col>
                    {data.emergencyContactName && (
                        <Grid.Col span={6}>
                            <Text size="sm"><strong>Emergency Contact:</strong> {data.emergencyContactName}</Text>
                        </Grid.Col>
                    )}
                    {data.emergencyContactPhone && (
                        <Grid.Col span={6}>
                            <Text size="sm"><strong>Emergency Phone:</strong> {data.emergencyContactPhone}</Text>
                        </Grid.Col>
                    )}
                    {data.insuranceProvider && (
                        <Grid.Col span={6}>
                            <Text size="sm"><strong>Insurance Provider:</strong> {data.insuranceProvider}</Text>
                        </Grid.Col>
                    )}
                    {data.insuranceNumber && (
                        <Grid.Col span={6}>
                            <Text size="sm"><strong>Insurance Number:</strong> {data.insuranceNumber}</Text>
                        </Grid.Col>
                    )}
                </Grid>
            </InfoCard>

            <InfoCard title="Medical Information">
                <Grid>
                    <Grid.Col span={6}>
                        <Text size="sm"><strong>Access Type:</strong> <Badge color="blue" variant="light">{data.accessType}</Badge></Text>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Text size="sm"><strong>Access Location:</strong> {data.accessLocation}</Text>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Text size="sm"><strong>Surgeon:</strong> {data.surgeon}</Text>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Text size="sm"><strong>Clinic:</strong> {data.clinic || 'Not specified'}</Text>
                    </Grid.Col>
                    {data.accessMaturity && (
                        <Grid.Col span={6}>
                            <Text size="sm"><strong>Access Maturity:</strong> <Badge color="green" variant="light">{data.accessMaturity}</Badge></Text>
                        </Grid.Col>
                    )}
                    {data.functionalStatus && (
                        <Grid.Col span={6}>
                            <Text size="sm"><strong>Functional Status:</strong> <Badge color={data.functionalStatus === 'Functional' ? 'green' : 'red'} variant="light">{data.functionalStatus}</Badge></Text>
                        </Grid.Col>
                    )}
                    {data.accessCreationDate && (
                        <Grid.Col span={6}>
                            <Text size="sm"><strong>Access Creation Date:</strong> {formatDate(data.accessCreationDate)}</Text>
                        </Grid.Col>
                    )}
                </Grid>

                {(data.knownAllergies || data.currentMedications || data.additionalNotes) && (
                    <>
                        <Divider my="sm" />
                        {data.knownAllergies && (
                            <Box>
                                <Text size="sm" fw={500}>Known Allergies:</Text>
                                <Text size="sm" c="dimmed">{data.knownAllergies}</Text>
                            </Box>
                        )}
                        {data.currentMedications && (
                            <Box>
                                <Text size="sm" fw={500}>Current Medications:</Text>
                                <Text size="sm" c="dimmed">{data.currentMedications}</Text>
                            </Box>
                        )}
                        {data.additionalNotes && (
                            <Box>
                                <Text size="sm" fw={500}>Additional Notes:</Text>
                                <Text size="sm" c="dimmed">{data.additionalNotes}</Text>
                            </Box>
                        )}
                    </>
                )}
            </InfoCard>

            <Box mt="xl">
                <Button
                    size="lg"
                    fullWidth
                    variant="gradient"
                    gradient={{ from: 'violet', to: 'purple', deg: 45 }}
                    onClick={onSubmit}
                    loading={isSubmitting}
                >
                    Submit Patient Information
                </Button>
            </Box>
        </Stack>
    )
}

export default ReviewStep
