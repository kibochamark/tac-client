import { Badge, Button, Flex, Group, Modal, ScrollArea, Stack, Text } from '@mantine/core'
import { FC } from 'react'
import { TbActivityHeartbeat } from 'react-icons/tb'

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
        <Modal opened={opened} onClose={close} size="600" radius="md">
            <Flex align="center" gap="md" mt={-5} w="100%" >
                <TbActivityHeartbeat size={24} />
                <Text fw={700} size="lg" c="dark" mb={10}>Event Details-{eventDetails?.patient}</Text>
            </Flex>
            <ScrollArea h={500}>
                <Stack gap="md">
                    {eventDetails ? (
                        <>
                            <Group grow>
                                <Flex direction={'column'}>
                                    <Text fw={500}>Patient</Text>
                                    <Text>{eventDetails.patient + ' (' + eventDetails.mrnCode + ')'}</Text>
                                </Flex>

                                <Flex direction={'column'}>
                                    <Text fw={500}>Event Type</Text>
                                    <Text>{eventDetails.eventType}</Text>
                                </Flex>
                            </Group>
                            <Group grow>
                                <div>
                                    <Text fw={500}>Severity</Text>
                                    <Badge color={getSeverityColor(eventDetails.severity)} variant="filled" size="sm">
                                        {eventDetails.severity}
                                    </Badge>
                                </div>


                                <div>
                                    <Text fw={500}>Date & Time</Text>
                                    <Text>{eventDetails.dateTime}</Text>
                                </div>
                            </Group>
                            <Group grow>
                                <div>
                                    <Text fw={500}>Reported By</Text>
                                    <Text>{eventDetails.reportedBy}</Text>
                                </div>
                                <div>
                                    <Text fw={500}>Current Status</Text>
                                    <Badge color={getStatusColor(eventDetails.currentStatus)} variant="outline">
                                        {eventDetails.currentStatus}
                                    </Badge>
                                </div>
                            </Group>


                            <Text fw={500}>Description</Text>
                            <Text size="sm" c="dimmed" p="md" className='border border-gray-200 rounded-xl'>
                                {eventDetails.description}
                            </Text>





                            <Text fw={500}>Previous Notes</Text>

                            {eventDetails.previousNotes.length > 0 ? (
                                <Text
                                    size="sm"
                                    c="dimmed"
                                    p="xs"
                                    className='border border-gray-200 rounded-xl'
                                    style={{ whiteSpace: 'pre-line' }}
                                >
                                    {eventDetails.previousNotes.join('\n\n')}
                                </Text>
                            ) : (
                                <Text size="sm" c="dimmed" fs="italic">No previous notes available</Text>
                            )}
                        </>
                    ) : (
                        <Text c="dimmed">No event details available</Text>
                    )}
                </Stack>
            </ScrollArea>


            <Flex justify="flex-end" gap="md" mt="md">
                <Button variant="outline" onClick={handleCancel} size="sm">
                    Cancel
                </Button>
                <Button onClick={handleUpdate} disabled={!eventDetails} size="sm">
                    Update Event
                </Button>
            </Flex>
        </Modal >
    )
}

export default EventModal
