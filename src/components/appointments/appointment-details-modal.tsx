'use client'
import { Badge, Group, Modal, Stack, Text } from '@mantine/core'
import { Appointment } from './types'

interface AppointmentDetailsModalProps {
  appointment: Appointment | null
  opened: boolean
  onClose: () => void
}

const AppointmentDetailsModal: React.FC<AppointmentDetailsModalProps> = ({
  appointment,
  opened,
  onClose
}) => {
  if (!appointment) return null

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Appointment Details"
      size="md"
    >
      <Stack>
        <Group>
          <Text fw={500}>Patient:</Text>
          <Text>{appointment.patientName}</Text>
        </Group>
        <Group>
          <Text fw={500}>Doctor:</Text>
          <Text>{appointment.doctorName}</Text>
        </Group>
        <Group>
          <Text fw={500}>Date & Time:</Text>
          <Text>{appointment.date.toLocaleDateString()} at {appointment.time}</Text>
        </Group>
        <Group>
          <Text fw={500}>Status:</Text>
          <Badge
            color={
              appointment.status === 'completed' ? 'green' :
                appointment.status === 'cancelled' ? 'red' : 'blue'
            }
          >
            {appointment.status}
          </Badge>
        </Group>
        <Group>
          <Text fw={500}>Duration:</Text>
          <Text>{appointment.duration} minutes</Text>
        </Group>
        <Group>
          <Text fw={500}>Reason:</Text>
          <Text>{appointment.reason}</Text>
        </Group>
      </Stack>
    </Modal>
  )
}

export default AppointmentDetailsModal
