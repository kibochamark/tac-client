import { Group, Paper, Select, TextInput } from '@mantine/core'
import { BiSearch } from 'react-icons/bi'

const EventFilters = () => {
  return (
    <Paper withBorder p="md" radius="md">
      <Group grow>
        <TextInput
          placeholder="Search by patient, MRN, or event type..."
          leftSection={<BiSearch size={18} />}
          radius="xl"
          size="md"
          variant="filled"
        />
        <Select
          data={['All Statuses', 'Open', 'Under Review', 'Resolved']}
          defaultValue="All Statuses"
          radius="xl"
          size="md"
          variant="filled"
        />
        <Select
          data={['All Severities', 'Critical', 'High', 'Medium', 'Low']}
          defaultValue="All Severities"
          radius="xl"
          size="md"
          variant="filled"
        />
      </Group>
    </Paper>
  )
}

export default EventFilters
