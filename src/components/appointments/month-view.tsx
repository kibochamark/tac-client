'use client'
import { Badge, Grid, Paper, Stack, Text } from '@mantine/core'
import { Appointment } from './types'

interface MonthViewProps {
  currentDate: Date
  appointments: Appointment[]
  onAppointmentClick: (appointment: Appointment) => void
  onCreateAppointment: () => void
}

const MonthView: React.FC<MonthViewProps> = ({
  currentDate,
  appointments,
  onAppointmentClick,
  onCreateAppointment
}) => {
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }

    return days
  }

  const getAppointmentsForDate = (date: Date) => {
    return appointments.filter(appointment => {
      const appointmentDate = new Date(appointment.date)
      return appointmentDate.toDateString() === date.toDateString()
    })
  }

  const days = getDaysInMonth(currentDate)
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <Grid>
      {dayNames.map(day => (
        <Grid.Col key={day} span={12 / 7}>
          <Text ta="center" fw={600} c="dimmed" size="sm">
            {day}
          </Text>
        </Grid.Col>
      ))}
      {days.map((day, index) => (
        <Grid.Col key={index} span={12 / 7}>
          <Paper
            h={100}
            p="xs"
            style={{
              border: '1px solid #e9ecef',
              cursor: day ? 'pointer' : 'default',
              opacity: day ? 1 : 0.3
            }}
            onClick={() => day && onCreateAppointment()}
          >
            {day && (
              <>
                <Text size="sm" fw={500}>
                  {day.getDate()}
                </Text>
                <Stack gap={2} mt={4}>
                  {getAppointmentsForDate(day).slice(0, 2).map(appointment => (
                    <Badge
                      key={appointment.id}
                      size="xs"
                      color={
                        appointment.status === 'completed' ? 'green' :
                          appointment.status === 'cancelled' ? 'red' : 'blue'
                      }
                      onClick={(e) => {
                        e.stopPropagation()
                        onAppointmentClick(appointment)
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      {appointment.time} - {appointment.patientName}
                    </Badge>
                  ))}
                  {getAppointmentsForDate(day).length > 2 && (
                    <Text size="xs" c="dimmed">
                      +{getAppointmentsForDate(day).length - 2} more
                    </Text>
                  )}
                </Stack>
              </>
            )}
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  )
}

export default MonthView
