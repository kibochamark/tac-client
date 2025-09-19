import { Modal, Stack, Text, Group, Badge, Divider, ScrollArea, Button, Flex } from '@mantine/core'
import { FC } from 'react'

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

interface EventModalProps {
    opened: boolean
    close: () => void
    eventDetails?: EventDetails
    onUpdate?: (eventDetails: EventDetails) => void
}

const EventModal: FC<EventModalProps> = ({ opened, close, eventDetails, onUpdate }) => {
    const getSeverityColor = (severity: string) => {
        switch (severity) {
            case 'Critical': return 'red'
            case 'High': return 'orange'
            case 'Medium': return 'yellow'
            case 'Low': return 'green'
            default: return 'gray'
        }
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Open': return 'blue'
            case 'In Progress': return 'yellow'
            case 'Resolved': return 'green'
            case 'Closed': return 'gray'
            default: return 'gray'
        }
    }

    const handleUpdate = () => {
        if (eventDetails && onUpdate) {
            onUpdate(eventDetails)
        }
        close()
    }

    const handleCancel = () => {
        close()
    }

    return (
        <Modal opened={opened} onClose={close} title="Event Details" size="xl" radius="md">
            <ScrollArea h={500}>
                <Stack gap="md">
                    {eventDetails ? (
                        <>

                            <Group grow>
                                <Group >
                                    <Text fw={500}>Patient:</Text>
                                    <Text>{eventDetails.patient}</Text>
                                </Group>
                                <Group>
                                    <Text fw={500}>MRN Code:</Text>
                                    <Text>{eventDetails.mrnCode}</Text>
                                </Group>
                            </Group>

                            <Divider />

                            {/* Event Information */}
                            <Group justify="space-between">
                                <Text size="lg" fw={600}>Event Information</Text>
                            </Group>
                            <Group grow>
                                <div>
                                    <Group>
                                        <Text fw={500}>Event Type:</Text>
                                        <Text>{eventDetails.eventType}</Text>
                                    </Group>
                                    <Group>
                                        <Text fw={500}>Severity:</Text>
                                        <Badge color={getSeverityColor(eventDetails.severity)} variant="filled">
                                            {eventDetails.severity}
                                        </Badge>
                                    </Group>
                                </div>
                                <div>
                                    <Group>
                                        <Text fw={500}>Date & Time:</Text>
                                        <Text>{eventDetails.dateTime}</Text>
                                    </Group>
                                    <Group>
                                        <Text fw={500}>Reported By:</Text>
                                        <Text>{eventDetails.reportedBy}</Text>
                                    </Group>
                                </div>
                            </Group>

                            <Group>
                                <Text fw={500}>Current Status:</Text>
                                <Badge color={getStatusColor(eventDetails.currentStatus)} variant="outline">
                                    {eventDetails.currentStatus}
                                </Badge>
                            </Group>

                            <Divider />

                            {/* Description */}
                            <Group justify="space-between">
                                <Text size="lg" fw={600}>Description</Text>
                            </Group>
                            <Text size="sm" c="dimmed" style={{ whiteSpace: 'pre-wrap' }}>
                                {eventDetails.description}
                            </Text>

                            <Divider />

                            {/* Previous Notes */}
                            <Group justify="space-between">
                                <Text size="lg" fw={600}>Previous Notes</Text>
                            </Group>
                            {eventDetails.previousNotes.length > 0 ? (
                                <Stack gap="sm">
                                    {eventDetails.previousNotes.map((note, index) => (
                                        <Text key={index} size="sm" c="dimmed" style={{ whiteSpace: 'pre-wrap' }}>
                                            {note}
                                        </Text>
                                    ))}
                                </Stack>
                            ) : (
                                <Text size="sm" c="dimmed" fs="italic">No previous notes available</Text>
                            )}
                        </>
                    ) : (
                        <Text c="dimmed">No event details available</Text>
                    )}
                </Stack>
            </ScrollArea>

            {/* Action Buttons */}
            <Flex justify="flex-end" gap="md" mt="md">
                <Button variant="outline" onClick={handleCancel}>
                    Cancel
                </Button>
                <Button onClick={handleUpdate} disabled={!eventDetails}>
                    Update Event
                </Button>
            </Flex>
        </Modal >
    )
}

export default EventModal
