import { ActionIcon, Badge, Paper, ScrollArea, Table } from '@mantine/core'
import { Dispatch, FC, SetStateAction } from 'react'
import { BsEye } from 'react-icons/bs'

interface Event {
  patient: string,
  mrn: string,
  eventType: string,
  severity: string,
  status: string,
  date: string,
  time: string,
  reportedBy: string,
  assignedTo: string,
}
interface EventTableProps {
  events: Event[],
  scrolled: boolean,
  setScrolled: Dispatch<SetStateAction<boolean>>,
  onEventSelect: (event: Event) => void
}

const EventTable: FC<EventTableProps> = ({ events, scrolled, setScrolled, onEventSelect }) => {
  return (
    <Paper radius="md" shadow="sm" p="md" withBorder>
      <ScrollArea onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
        <Table striped highlightOnHover verticalSpacing="sm">
          <thead>
            <tr className={`text-left bg-white z-20 p-4 ${scrolled ? 'sticky top-0' : ''}`}>
              <th>Patient</th>
              <th>MRN</th>
              <th>Event Type</th>
              <th>Severity</th>
              <th>Status</th>
              <th>Date & Time</th>
              <th>Reported By</th>
              <th>Assigned To</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.mrn}>
                <td>{event.patient}</td>
                <td>{event.mrn}</td>
                <td>{event.eventType}</td>
                <td>
                  <Badge
                    color={
                      event.severity === "Critical" ? "red" :
                        event.severity === "High" ? "orange" :
                          event.severity === "Medium" ? "yellow" : "green"
                    }
                    size="sm"
                  >
                    {event.severity}
                  </Badge>
                </td>
                <td>
                  <Badge
                    color={
                      event.status === "Open" ? "red" :
                        event.status === "Under Review" ? "blue" :
                          "green"
                    }
                    size="sm"
                  >
                    {event.status}
                  </Badge>
                </td>
                <td>{event.date} {event.time}</td>
                <td>{event.reportedBy}</td>
                <td>{event.assignedTo}</td>
                <td>
                  <ActionIcon variant="light" color="blue" radius="xl" onClick={() => onEventSelect(event)}>
                    <BsEye size={18} />
                  </ActionIcon>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ScrollArea>
    </Paper>
  )
}

export default EventTable
