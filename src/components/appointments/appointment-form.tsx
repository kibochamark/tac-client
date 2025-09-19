'use client'
import { useState } from 'react'
import {
    Alert,
    Button,
    Flex,
    Modal,
    Select,
    Stack,
    Textarea
} from '@mantine/core'
import { DatePickerInput, TimeInput } from '@mantine/dates'
import { AlertCircle } from 'lucide-react'
import { AppointmentFormData, UserRole } from './types'

interface AppointmentFormProps {
    opened: boolean
    onClose: () => void
    onSubmit: (data: AppointmentFormData) => void
    userRole?: UserRole
    conflictWarning?: string | null
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({
    opened,
    onClose,
    onSubmit,
    userRole = 'nurse',
    conflictWarning
}) => {
    // Sample doctors data
    const doctors = [
        { value: 'dr-smith', label: 'Dr. Michael Smith' },
        { value: 'dr-johnson', label: 'Dr. Sarah Johnson' },
        { value: 'dr-wilson', label: 'Dr. David Wilson' },
        { value: 'dr-brown', label: 'Dr. Emily Brown' }
    ]

    // Sample patients data
    const patients = [
        { value: 'patient-1', label: 'John Doe' },
        { value: 'patient-2', label: 'Jane Smith' },
        { value: 'patient-3', label: 'Robert Johnson' },
        { value: 'patient-4', label: 'Maria Garcia' }
    ]

    const [formData, setFormData] = useState<AppointmentFormData>({
        patientName: '',
        doctorName: '',
        date: new Date(),
        time: '',
        reason: ''
    })

    const handleSubmit = () => {
        if (!formData.patientName || !formData.doctorName || !formData.time || !formData.reason) {
            return
        }

        onSubmit(formData)
        setFormData({
            patientName: '',
            doctorName: '',
            date: new Date(),
            time: '',
            reason: ''
        })
        onClose()
    }

    const handleClose = () => {
        setFormData({
            patientName: '',
            doctorName: '',
            date: new Date(),
            time: '',
            reason: ''
        })
        onClose()
    }

    return (
        <Modal
            opened={opened}
            onClose={handleClose}
            title="Schedule New Appointment"
            size="md"
        >
            <Stack>
                {userRole === 'nurse' && (
                    <Alert icon={<AlertCircle size={16} />} color="blue">
                        You have appointment scheduling permissions.
                    </Alert>
                )}

                {conflictWarning && (
                    <Alert icon={<AlertCircle size={16} />} color="orange">
                        {conflictWarning}
                    </Alert>
                )}

                <Select
                    label="Patient"
                    placeholder="Search for patient"
                    data={patients}
                    searchable
                    value={formData.patientName}
                    onChange={(value) => setFormData(prev => ({ ...prev, patientName: value || '' }))}
                    required
                />

                <Select
                    label="Doctor"
                    placeholder="Select doctor"
                    data={doctors}
                    value={formData.doctorName}
                    onChange={(value) => setFormData(prev => ({ ...prev, doctorName: value || '' }))}
                    required
                />

                <DatePickerInput
                    label="Date"
                    value={formData.date}
                    onChange={(value) =>
                        setFormData(prev => ({
                            ...prev,
                            date: value ? new Date(value) : new Date()
                        }))
                    }
                    required
                />

                <TimeInput
                    label="Time"
                    placeholder="Select time"
                    value={formData.time}
                    onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                    required
                />

                <Textarea
                    label="Reason for Visit"
                    placeholder="Enter reason for appointment"
                    value={formData.reason}
                    onChange={(e) => setFormData(prev => ({ ...prev, reason: e.target.value }))}
                    required
                    minRows={3}
                />

                <Flex justify="flex-end" gap="md" mt="md">
                    <Button variant="outline" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit}>
                        Schedule Appointment
                    </Button>
                </Flex>
            </Stack>
        </Modal>
    )
}

export default AppointmentForm
