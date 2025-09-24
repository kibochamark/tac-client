'use client'
import { Paper, Stack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'
import { toast } from 'sonner'
import CalendarHeader from './calendar-header'
import MonthView from './month-view'
import WeekView from './week-view'
import AppointmentForm from './appointment-form'
import AppointmentDetailsModal from './appointment-details-modal'
import { Appointment, AppointmentFormData, UserRole } from './types'

interface CalendarViewProps {
  appointments: Appointment[]
  onAppointmentClick?: (appointment: Appointment) => void
  onCreateAppointment?: () => void
  userRole?: UserRole
}

const CalendarView: React.FC<CalendarViewProps> = ({
  appointments,
  onAppointmentClick,
  onCreateAppointment,
  userRole = 'nurse'
}) => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [viewMode, setViewMode] = useState<'month' | 'week'>('month')
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null)
  const [formOpened, { open: openForm, close: closeForm }] = useDisclosure(false)
  const [detailsOpened, { open: openDetails, close: closeDetails }] = useDisclosure(false)
  const [conflictWarning, setConflictWarning] = useState<string | null>(null)

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1)
      } else {
        newDate.setMonth(prev.getMonth() + 1)
      }
      return newDate
    })
  }

  const navigateWeek = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev)
      if (direction === 'prev') {
        newDate.setDate(prev.getDate() - 7)
      } else {
        newDate.setDate(prev.getDate() + 7)
      }
      return newDate
    })
  }

  const handleNavigate = (direction: 'prev' | 'next') => {
    if (viewMode === 'month') {
      navigateMonth(direction)
    } else {
      navigateWeek(direction)
    }
  }

  const checkForConflicts = (doctorName: string, date: Date, time: string) => {
    const appointmentDateTime = new Date(date)
    const [hours, minutes] = time.split(':').map(Number)
    appointmentDateTime.setHours(hours, minutes, 0, 0)

    const conflicts = appointments.filter(appointment => {
      if (appointment.doctorName !== doctorName) return false

      const existingDateTime = new Date(appointment.date)
      const [existingHours, existingMinutes] = appointment.time.split(':').map(Number)
      existingDateTime.setHours(existingHours, existingMinutes, 0, 0)

      const timeDiff = Math.abs(appointmentDateTime.getTime() - existingDateTime.getTime())
      const minutesDiff = timeDiff / (1000 * 60)

      return minutesDiff < 60 // 1 hour buffer
    })

    if (conflicts.length > 0) {
      setConflictWarning(`Dr. ${doctorName} has ${conflicts.length} conflicting appointment(s) within 1 hour.`)
      return true
    }

    setConflictWarning(null)
    return false
  }

  const handleAppointmentClick = (appointment: Appointment) => {
    setSelectedAppointment(appointment)
    openDetails()
    onAppointmentClick?.(appointment)
  }

  const handleCreateAppointment = (clickedDate?: Date) => {
    setSelectedDate(clickedDate || null)
    openForm()
    onCreateAppointment?.()
  }

  const handleFormSubmit = (formData: AppointmentFormData) => {
    if (checkForConflicts(formData.doctorName, formData.date, formData.time)) {
      return
    }

    // Create new appointment
    const newAppointment: Appointment = {
      id: Date.now().toString(),
      patientName: formData.patientName,
      doctorName: formData.doctorName,
      date: formData.date,
      time: formData.time,
      reason: formData.reason,
      status: 'scheduled',
      duration: 60
    }

    toast.success('Appointment created successfully!')
    // Here you would typically add the appointment to your state or make an API call
  }

  return (
    <Stack>
      {/* Calendar Header */}
      <Paper p="md" withBorder>
        <CalendarHeader
          currentDate={currentDate}
          viewMode={viewMode}
          onNavigate={handleNavigate}
          onViewModeChange={setViewMode}
          onCreateAppointment={handleCreateAppointment}
          userRole={userRole}
        />

        {/* Calendar Content */}
        {viewMode === 'month' ? (
          <MonthView
            currentDate={currentDate}
            appointments={appointments}
            onAppointmentClick={handleAppointmentClick}
            onCreateAppointment={handleCreateAppointment}
          />
        ) : (
          <WeekView
            currentDate={currentDate}
            appointments={appointments}
            onAppointmentClick={handleAppointmentClick}
            onCreateAppointment={handleCreateAppointment}
          />
        )}
      </Paper>

      {/* Appointment Details Modal */}
      <AppointmentDetailsModal
        appointment={selectedAppointment}
        opened={detailsOpened}
        onClose={closeDetails}
      />

      {/* Create Appointment Form */}
      <AppointmentForm
        opened={formOpened}
        onClose={closeForm}
        onSubmit={handleFormSubmit}
        userRole={userRole}
        conflictWarning={conflictWarning}
        selectedDate={selectedDate || currentDate}
      />
    </Stack>
  )
}

export default CalendarView