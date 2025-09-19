'use client'
import { Button, Group, Text } from '@mantine/core'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'

interface CalendarHeaderProps {
  currentDate: Date
  viewMode: 'month' | 'week'
  onNavigate: (direction: 'prev' | 'next') => void
  onViewModeChange: (mode: 'month' | 'week') => void
  onCreateAppointment: () => void
  userRole?: 'nurse' | 'doctor' | 'admin'
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentDate,
  viewMode,
  onNavigate,
  onViewModeChange,
  onCreateAppointment,
  userRole = 'nurse'
}) => {
  return (
    <Group justify="space-between" mb="md">
      <Group>
        <Text size="xl" fw={700}>
          {currentDate.toLocaleDateString('en-US', {
            month: 'long',
            year: 'numeric'
          })}
        </Text>
        <Group gap="xs">
          <Button
            variant="light"
            size="sm"
            onClick={() => onNavigate('prev')}
          >
            <ChevronLeft size={16} />
          </Button>
          <Button
            variant="light"
            size="sm"
            onClick={() => onNavigate('next')}
          >
            <ChevronRight size={16} />
          </Button>
        </Group>
      </Group>

      <Group>
        <Button.Group>
          <Button
            variant={viewMode === 'month' ? 'filled' : 'light'}
            onClick={() => onViewModeChange('month')}
          >
            Month
          </Button>
          <Button
            variant={viewMode === 'week' ? 'filled' : 'light'}
            onClick={() => onViewModeChange('week')}
          >
            Week
          </Button>
        </Button.Group>

        {userRole === 'nurse' && (
          <Button leftSection={<Plus size={16} />} onClick={onCreateAppointment}>
            New Appointment
          </Button>
        )}
      </Group>
    </Group>
  )
}

export default CalendarHeader
