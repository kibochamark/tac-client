'use client'
import DashboardHeader from '@/components/header'
import { Stack, Tabs, Paper, Group, Text, Badge } from '@mantine/core'
import { useState } from 'react'
import { Calendar, List } from 'lucide-react'
import CalendarView from '@/components/appointments/calendar-view'
import AppointmentsList from '@/components/appointments/appointments-list'
import { Appointment, UserRole } from '@/components/appointments/types'

const AppointmentsPage = () => {
  // Sample appointments data
  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: '1',
      patientName: 'John Doe',
      doctorName: 'Dr. Michael Smith',
      date: new Date(2024, 11, 25, 9, 0),
      time: '09:00',
      reason: 'Follow-up consultation for vascular access',
      status: 'scheduled',
      duration: 60
    },
    {
      id: '2',
      patientName: 'Jane Smith',
      doctorName: 'Dr. Sarah Johnson',
      date: new Date(2024, 11, 25, 14, 30),
      time: '14:30',
      reason: 'Initial consultation and assessment',
      status: 'scheduled',
      duration: 90
    },
    {
      id: '3',
      patientName: 'Robert Johnson',
      doctorName: 'Dr. David Wilson',
      date: new Date(2024, 11, 26, 10, 15),
      time: '10:15',
      reason: 'Post-procedure check-up',
      status: 'completed',
      duration: 45
    },
    {
      id: '4',
      patientName: 'Maria Garcia',
      doctorName: 'Dr. Emily Brown',
      date: new Date(2024, 11, 27, 11, 0),
      time: '11:00',
      reason: 'Emergency consultation',
      status: 'cancelled',
      duration: 30
    }
  ])

  const [userRole] = useState<UserRole>('nurse') // This would come from auth context

  const handleAppointmentClick = (appointment: Appointment) => {
    console.log('Appointment clicked:', appointment)
  }

  const handleCreateAppointment = () => {
    console.log('Create new appointment')
  }

  const handleEditAppointment = (appointment: Appointment) => {
    console.log('Edit appointment:', appointment)
  }

  const handleDeleteAppointment = (appointmentId: string) => {
    setAppointments(prev => prev.filter(apt => apt.id !== appointmentId))
  }

  const handleViewAppointment = (appointment: Appointment) => {
    console.log('View appointment:', appointment)
  }

  const getAppointmentStats = () => {
    const total = appointments.length
    const scheduled = appointments.filter(apt => apt.status === 'scheduled').length
    const completed = appointments.filter(apt => apt.status === 'completed').length
    const cancelled = appointments.filter(apt => apt.status === 'cancelled').length

    return { total, scheduled, completed, cancelled }
  }

  const stats = getAppointmentStats()

  return (
    <>
    <DashboardHeader
        username="Appointments"
        description="Manage appointments and schedule follow-ups"
      />

      <Stack p="md" gap="lg">
        {/* Stats Cards */}
        <Group>
          <Paper p="md" withBorder style={{ flex: 1 }}>
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed">Total Appointments</Text>
                <Text size="xl" fw={700}>{stats.total}</Text>
              </div>
              <Calendar size={24} color="blue" />
            </Group>
          </Paper>
          
          <Paper p="md" withBorder style={{ flex: 1 }}>
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed">Scheduled</Text>
                <Text size="xl" fw={700} c="blue">{stats.scheduled}</Text>
              </div>
              <Badge color="blue" variant="light">Scheduled</Badge>
            </Group>
          </Paper>
          
          <Paper p="md" withBorder style={{ flex: 1 }}>
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed">Completed</Text>
                <Text size="xl" fw={700} c="green">{stats.completed}</Text>
              </div>
              <Badge color="green" variant="light">Completed</Badge>
            </Group>
          </Paper>
          
          <Paper p="md" withBorder style={{ flex: 1 }}>
            <Group justify="space-between">
              <div>
                <Text size="sm" c="dimmed">Cancelled</Text>
                <Text size="xl" fw={700} c="red">{stats.cancelled}</Text>
              </div>
              <Badge color="red" variant="light">Cancelled</Badge>
            </Group>
          </Paper>
        </Group>

        {/* Main Content */}
        <Tabs defaultValue="calendar">
          <Tabs.List>
            <Tabs.Tab value="calendar" leftSection={<Calendar size={16} />}>
              Calendar View
            </Tabs.Tab>
            <Tabs.Tab value="list" leftSection={<List size={16} />}>
              List View
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="calendar" pt="md">
            <CalendarView
              appointments={appointments}
              onAppointmentClick={handleAppointmentClick}
              onCreateAppointment={handleCreateAppointment}
              userRole={userRole}
            />
          </Tabs.Panel>

          <Tabs.Panel value="list" pt="md">
            <AppointmentsList
              appointments={appointments}
              onEdit={handleEditAppointment}
              onDelete={handleDeleteAppointment}
              onView={handleViewAppointment}
              userRole={userRole}
            />
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </>
  )
}

export default AppointmentsPage
