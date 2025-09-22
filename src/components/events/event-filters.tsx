import { Group, Paper, Select, Stack, TextInput } from '@mantine/core'
import { BiSearch } from 'react-icons/bi'

const EventFilters = () => {
  return (
    <Paper withBorder p="md" radius="md">
      <Stack gap="md">
        <TextInput
          placeholder="Search by patient, MRN, or event type..."
          leftSection={<BiSearch size={18} />}
          radius="xl"
          size="md"
          variant="filled"
        />
        
        <Group grow>
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
      </Stack>
    </Paper>
  )
}

export default EventFilters
