'use client'
import {
  Badge,
  Button,
  Flex,
  Group,
  Modal,
  Paper,
  rem,
  ScrollArea,
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
  const [scrolled, setScrolled] = useState(false)

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
      onDelete?.(appointmentId)
  }

  return (
    <Stack gap="lg">
      {/* Search + Filters */}
      <Paper withBorder p="md" radius="md">
        <Stack gap="md">
          <div className='flex flex-col md:flex-row gap-2'>
            <TextInput
              placeholder="Search appointments..."
              leftSection={<Search size={18} />}
              radius="xl"
              size="xs"
              variant="filled"
              className="md:grow"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <Select
              data={[
                { value: 'scheduled', label: 'Scheduled' },
                { value: 'completed', label: 'Completed' },
                { value: 'cancelled', label: 'Cancelled' }
              ]}
              placeholder="All Statuses"
              radius="xl"
              size="xs"
              variant="filled"
              className="md:grow"
              value={statusFilter}
              onChange={setStatusFilter}
              clearable
            />
          </div>
        </Stack>
      </Paper>

      {/* Table */}
      <Paper radius="md" shadow="sm" p="md" withBorder>
        <Text size="sm" py="md">Appointments ({filteredAppointments.length})</Text>
        <ScrollArea
          onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
        >
          <Table striped highlightOnHover verticalSpacing="sm" style={{ minWidth: 800 }}>
            <Table.Thead>
              <Table.Tr
                className={`text-left ${scrolled ? 'sticky top-0 z-20' : ''}`}
                style={scrolled ? { backgroundColor: 'white', backdropFilter: 'blur(8px)' } : {}}
              >
                <Table.Th fw={500}>Patient</Table.Th>
                <Table.Th fw={500}>Doctor</Table.Th>
                <Table.Th fw={500}>Date & Time</Table.Th>
                <Table.Th fw={500}>Status</Table.Th>
                <Table.Th fw={500}>Reason</Table.Th>
                <Table.Th fw={500}>Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {filteredAppointments.map((appointment) => (
                <Table.Tr key={appointment.id}>
                  <Table.Td>
                    <Text size="sm" fw={500}>{appointment.patientName}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="sm">{appointment.doctorName}</Text>
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
                    <Badge color={getStatusColor(appointment.status)} size="sm">
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

                      <Eye size={16} onClick={() => handleView(appointment)} />

                      {userRole === 'nurse' && (
                        <>
                          <Edit size={16} onClick={() => handleEdit(appointment)} />
                          <Trash2 size={16} onClick={() => handleDelete(appointment.id)} />
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
        </ScrollArea>
      </Paper>

      {/* Appointment Details Modal */}
      <Modal
        opened={opened}
        onClose={close}
        title="Appointment Details"
        size={rem(500)}
        radius="md"
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
                <Button variant="outline" onClick={close} size="sm">
                  Close
                </Button>
                <Button onClick={() => {
                  close()
                  handleEdit(selectedAppointment)
                }} size="sm">
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
