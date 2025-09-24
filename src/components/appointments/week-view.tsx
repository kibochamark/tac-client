'use client'
import { Badge, Grid, Paper, Stack, Text } from '@mantine/core'
import { Appointment } from './types'

interface WeekViewProps {
  currentDate: Date
  appointments: Appointment[]
  onAppointmentClick: (appointment: Appointment) => void
  onCreateAppointment?: (selectedDate?: Date) => void
}

const WeekView: React.FC<WeekViewProps> = ({
  currentDate,
  appointments,
  onAppointmentClick,
  onCreateAppointment
}) => {
  const getWeekDays = (date: Date) => {
    const startOfWeek = new Date(date)
    startOfWeek.setDate(date.getDate() - date.getDay())

    const weekDays = []
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek)
      day.setDate(startOfWeek.getDate() + i)
      weekDays.push(day)
    }

    return weekDays
  }

  const getAppointmentsForDate = (date: Date) => {
    return appointments.filter(appointment => {
      const appointmentDate = new Date(appointment.date)
      return appointmentDate.toDateString() === date.toDateString()
    })
  }

  const weekDays = getWeekDays(currentDate)
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <Grid>
      {weekDays.map((day, index) => (
        <Grid.Col key={index} span={12 / 7}>
          <Paper 
           h={100}
            style={{ 
              border: '1px solid #e9ecef',
              cursor: 'pointer'
            }}
            onClick={() => onCreateAppointment?.(day)}
          >
            <Text ta="center" fw={600} size="sm">
              {dayNames[index]} {day.getDate()}
            </Text>
            <Stack gap={2}>
              {getAppointmentsForDate(day).map(appointment => (
                <Badge
                  key={appointment.id}
                  size="sm"
                  color={
                    appointment.status === 'completed' ? 'green' :
                      appointment.status === 'cancelled' ? 'red' : 'blue'
                  }
                  onClick={() => onAppointmentClick(appointment)}
                  style={{ cursor: 'pointer' }}
                >
                  {appointment.time} - {appointment.patientName}
                </Badge>
              ))}
            </Stack>
          </Paper>
        </Grid.Col>
      ))}
    </Grid>
  )
}

export default WeekView
