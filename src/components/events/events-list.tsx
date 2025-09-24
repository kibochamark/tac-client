import { Badge, Grid } from '@mantine/core'
import { BiError } from 'react-icons/bi'
import EventStatCard from './eventstats'

const EventList = () => {
  return (
    <Grid mt="md" gutter="sm">
      <Grid.Col span={{ base: 6, sm: 3 }}>
        <EventStatCard name="Open Events" count={8} icon={<Badge size={"6"}  circle color='red' />} />
      </Grid.Col>
      <Grid.Col span={{ base: 6, sm: 3 }}>
        <EventStatCard name="Under Review" count={3} icon={<Badge size={"6"} circle color='blue' />} />
      </Grid.Col>
      <Grid.Col span={{ base: 6, sm: 3 }}>
        <EventStatCard name="Resolved" count={1} icon={<Badge size={"6"} circle />} />
      </Grid.Col>
      <Grid.Col span={{ base: 6, sm: 3 }}>
        <EventStatCard name="Critical Events" count={2} icon={<BiError color='red' />} iconColor='red' />
      </Grid.Col>
    </Grid>
  )
}

export default EventList
