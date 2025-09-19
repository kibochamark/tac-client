'use client'
import DashboardHeader from '@/components/header'
import { Stack } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { useState } from 'react'
import EventList from './events-list'
import EventFilters from './event-filters'
import EventTable from './event-table'
import EventModal from './event-modal'

interface Event {
  patient: string
  mrn: string
  eventType: string
  severity: string
  status: string
  date: string
  time: string
  reportedBy: string
  assignedTo: string
  description?: string
  previousNotes?: string[]
}

interface EventDetails {
  patient: string
  mrnCode: string
  eventType: string
  severity: 'Low' | 'Medium' | 'High' | 'Critical'
  dateTime: string
  reportedBy: string
  currentStatus: 'Open' | 'In Progress' | 'Resolved' | 'Closed'
  description: string
  previousNotes: string[]
}

const EventsPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedEvent, setSelectedEvent] = useState<EventDetails | null>(null);

  const events = [
    {
      patient: "John Doe",
      mrn: "MRN001",
      eventType: "Swelling",
      severity: "Medium",
      status: "Under Review",
      date: "2024-12-22",
      time: "14:30",
      reportedBy: "Sarah Johnson",
      assignedTo: "Dr. Michael Smith",
      description: "Patient reported swelling in the left arm around the access site. Swelling appears moderate with some redness. Patient reports mild discomfort.",
      previousNotes: [
        "Initial assessment completed - no immediate concerns",
        "Patient advised to monitor and report any changes",
        "Follow-up scheduled for next week"
      ]
    },
    {
      patient: "Jane Smith",
      mrn: "MRN002",
      eventType: "Infection",
      severity: "Critical",
      status: "Open",
      date: "2024-12-23",
      time: "09:15",
      reportedBy: "Sarah Johnson",
      assignedTo: "Dr. Michael Smith",
      description: "Signs of infection detected at access site. Patient has fever, redness, and purulent discharge. Immediate attention required.",
      previousNotes: [
        "Patient reported feeling unwell yesterday",
        "Temperature elevated to 101.2°F",
        "Blood cultures ordered"
      ]
    },
    {
      patient: "Robert Johnson",
      mrn: "MRN003",
      eventType: "Bleeding",
      severity: "High",
      status: "Resolved",
      date: "2024-12-21",
      time: "16:45",
      reportedBy: "Maria Garcia",
      assignedTo: "Dr. Michael Smith",
      description: "Excessive bleeding from access site during dialysis session. Bleeding controlled with pressure and hemostatic agents.",
      previousNotes: [
        "Patient has history of bleeding disorders",
        "Anticoagulation adjusted",
        "Bleeding resolved - patient stable"
      ]
    }
  ]

  const handleEventSelect = (event: Event) => {
    // Transform the event data to match EventDetails interface
    const eventDetails = {
      patient: event.patient,
      mrnCode: event.mrn,
      eventType: event.eventType,
      severity: event.severity as 'Low' | 'Medium' | 'High' | 'Critical',
      dateTime: `${event.date} ${event.time}`,
      reportedBy: event.reportedBy,
      currentStatus: event.status as 'Open' | 'In Progress' | 'Resolved' | 'Closed',
      description: event.description || 'No description available',
      previousNotes: event.previousNotes || []
    }
    setSelectedEvent(eventDetails)
    open()
  }

  const handleEventUpdate = (updatedEvent: EventDetails) => {
    console.log('Event updated:', updatedEvent)
    // Here you would typically update the event in your state or make an API call
    // For now, we'll just log it
  }

  return (
    <>
      <DashboardHeader
        username="Access Events"
        description="Monitor and manage vascular access events and complications"
      />

      {/* Stats cards */}
      <EventList />

      <Stack p="md" gap="lg">
        {/* Filters */}
        <EventFilters />

        {/* Events Table */}
        <EventTable
          events={events}
          scrolled={scrolled}
          setScrolled={setScrolled}
          onEventSelect={handleEventSelect}
        />

        {/* Modal */}
        <EventModal 
          opened={opened} 
          close={close} 
          eventDetails={selectedEvent || undefined}
          onUpdate={handleEventUpdate}
        />
      </Stack>
    </>
  )
}

export default EventsPage
