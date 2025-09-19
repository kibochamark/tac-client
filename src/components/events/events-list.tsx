import { Badge, Group } from '@mantine/core'
import { BiError } from 'react-icons/bi'
import EventStatCard from './eventstats'

const EventList = () => {
  return (
    <Group grow mt="md">
      <EventStatCard name="Open Events" count={8} icon={<Badge size='xs' circle color='red' />} />
      <EventStatCard name="Under Review" count={3} icon={<Badge size='xs' color='blue' />} />
      <EventStatCard name="Resolved" count={1} icon={<Badge size='xs' />} />
      <EventStatCard name="Critical Events" count={2} icon={<BiError color='red' />} iconColor='red' />
    </Group>
  )
}

export default EventList
