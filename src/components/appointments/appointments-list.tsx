'use client'
import {
  ActionIcon,
  Badge,
  Button,
  Flex,
  Group,
  Modal,
  Paper,
  Select,
  Stack,
  Table,
  Text,
  TextInput
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import {
  Calendar,
  Edit,
  Eye,
  Filter,
  Search,
  Trash2
} from 'lucide-react'
import { useState } from 'react'
import { Appointment, UserRole } from './types'

interface AppointmentsListProps {
  appointments: Appointment[]
  onEdit?: (appointment: Appointment) => void
  onDelete?: (appointmentId: string) => void
  onView?: (appointment: Appointment) => void
  userRole?: UserRole
}

const AppointmentsList: React.FC<AppointmentsListProps> = ({
  appointments,
  onEdit,
  onDelete,
  onView,
  userRole = 'nurse'
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string | null>(null)
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)
  const [opened, { open, close }] = useDisclosure(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'green'
      case 'cancelled': return 'red'
      case 'scheduled': return 'blue'
      default: return 'gray'
    }
  }

  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = appointment.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         appointment.reason.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = !statusFilter || appointment.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const handleView = (appointment: Appointment) => {
    setSelectedAppointment(appointment)
    open()
    onView?.(appointment)
  }

  const handleEdit = (appointment: Appointment) => {
    onEdit?.(appointment)
  }

  const handleDelete = (appointmentId: string) => {
    if (confirm('Are you sure you want to delete this appointment?')) {
      onDelete?.(appointmentId)
    }
  }

  return (
    <Stack>
      {/* Filters */}
      <Paper p="md" withBorder>
        <Group justify="space-between" mb="md">
          <Text size="lg" fw={600}>Appointments</Text>
          <Group>
            <TextInput
              placeholder="Search appointments..."
              leftSection={<Search size={16} />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: 300 }}
            />
            <Select
              placeholder="Filter by status"
              data={[
                { value: 'scheduled', label: 'Scheduled' },
                { value: 'completed', label: 'Completed' },
                { value: 'cancelled', label: 'Cancelled' }
              ]}
              value={statusFilter}
              onChange={setStatusFilter}
              clearable
              leftSection={<Filter size={16} />}
            />
          </Group>
        </Group>

        {/* Appointments Table */}
        <Table striped highlightOnHover>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Patient</Table.Th>
              <Table.Th>Doctor</Table.Th>
              <Table.Th>Date & Time</Table.Th>
              <Table.Th>Status</Table.Th>
              <Table.Th>Reason</Table.Th>
              <Table.Th>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {filteredAppointments.map((appointment) => (
              <Table.Tr key={appointment.id}>
                <Table.Td>
                  <Text fw={500}>{appointment.patientName}</Text>
                </Table.Td>
                <Table.Td>
                  <Text>{appointment.doctorName}</Text>
                </Table.Td>
                <Table.Td>
                  <Group gap="xs">
                    <Calendar size={14} />
                    <Text size="sm">
                      {appointment.date.toLocaleDateString()} at {appointment.time}
                    </Text>
                  </Group>
                </Table.Td>
                <Table.Td>
                  <Badge color={getStatusColor(appointment.status)} variant="light">
                    {appointment.status}
                  </Badge>
                </Table.Td>
                <Table.Td>
                  <Text size="sm" c="dimmed" lineClamp={1}>
                    {appointment.reason}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Group gap="xs">
                    <ActionIcon
                      variant="light"
                      color="blue"
                      onClick={() => handleView(appointment)}
                    >
                      <Eye size={16} />
                    </ActionIcon>
                    {userRole === 'nurse' && (
                      <>
                        <ActionIcon
                          variant="light"
                          color="yellow"
                          onClick={() => handleEdit(appointment)}
                        >
                          <Edit size={16} />
                        </ActionIcon>
                        <ActionIcon
                          variant="light"
                          color="red"
                          onClick={() => handleDelete(appointment.id)}
                        >
                          <Trash2 size={16} />
                        </ActionIcon>
                      </>
                    )}
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>

        {filteredAppointments.length === 0 && (
          <Text ta="center" c="dimmed" py="xl">
            No appointments found
          </Text>
        )}
      </Paper>

      {/* Appointment Details Modal */}
      <Modal
        opened={opened}
        onClose={close}
        title="Appointment Details"
        size="md"
      >
        {selectedAppointment && (
          <Stack>
            <Group>
              <Text fw={500}>Patient:</Text>
              <Text>{selectedAppointment.patientName}</Text>
            </Group>
            <Group>
              <Text fw={500}>Doctor:</Text>
              <Text>{selectedAppointment.doctorName}</Text>
            </Group>
            <Group>
              <Text fw={500}>Date & Time:</Text>
              <Text>{selectedAppointment.date.toLocaleDateString()} at {selectedAppointment.time}</Text>
            </Group>
            <Group>
              <Text fw={500}>Status:</Text>
              <Badge color={getStatusColor(selectedAppointment.status)}>
                {selectedAppointment.status}
              </Badge>
            </Group>
            <Group>
              <Text fw={500}>Duration:</Text>
              <Text>{selectedAppointment.duration} minutes</Text>
            </Group>
            <Group>
              <Text fw={500}>Reason:</Text>
              <Text>{selectedAppointment.reason}</Text>
            </Group>
            
            {userRole === 'nurse' && (
              <Flex justify="flex-end" gap="md" mt="md">
                <Button variant="outline" onClick={close}>
                  Close
                </Button>
                <Button onClick={() => {
                  close()
                  handleEdit(selectedAppointment)
                }}>
                  Edit Appointment
                </Button>
              </Flex>
            )}
          </Stack>
        )}
      </Modal>
    </Stack>
  )
}

export default AppointmentsList
