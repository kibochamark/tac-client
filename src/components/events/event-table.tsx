import { Badge, Paper, ScrollArea, Table, Text } from '@mantine/core'
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
      <Text size="sm" py={"md"}>Events ({events.length})</Text>
      <ScrollArea
        onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
      >
        <Table striped highlightOnHover verticalSpacing="sm" style={{ minWidth: 900 }}>
          <Table.Thead>
            <Table.Tr
              className={`text-left ${scrolled ? 'sticky top-0 z-20' : ''}`}
              style={scrolled ? { backgroundColor: 'white', backdropFilter: 'blur(8px)' } : {}}
            >
              <Table.Th fw={500}>Patient</Table.Th>
              <Table.Th fw={500}>MRN</Table.Th>
              <Table.Th fw={500}>Event Type</Table.Th>
              <Table.Th fw={500}>Severity</Table.Th>
              <Table.Th fw={500}>Status</Table.Th>
              <Table.Th fw={500}>Date & Time</Table.Th>
              <Table.Th fw={500}>Reported By</Table.Th>
              <Table.Th fw={500}>Assigned To</Table.Th>
              <Table.Th fw={500}>Actions</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {events.map((event) => (
              <Table.Tr key={event.mrn}>
                <Table.Td>
                  <Text size="sm">{event.patient}</Text>
                </Table.Td>
                <Table.Td>
                  <Text size="xs" c="dimmed">{event.mrn}</Text>
                </Table.Td>
                <Table.Td>
                  <Text size="sm">{event.eventType}</Text>
                </Table.Td>
                <Table.Td>
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
                </Table.Td>
                <Table.Td>
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
                </Table.Td>
                <Table.Td>
                  <Text size="sm">{event.date} {event.time}</Text>
                </Table.Td>
                <Table.Td>
                  <Text size="sm">{event.reportedBy}</Text>
                </Table.Td>
                <Table.Td>
                  <Text size="sm">{event.assignedTo}</Text>
                </Table.Td>
                <Table.Td>
                  <BsEye size={16} onClick={() => onEventSelect(event)} />
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </ScrollArea>
    </Paper>
  )
}

export default EventTable
