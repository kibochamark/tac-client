import { Paper, Select, Stack, TextInput } from '@mantine/core'
import { BiSearch } from 'react-icons/bi'

const EventFilters = () => {
  return (
    <Paper withBorder p="md" radius="md">
      <Stack gap="md">
        <div className='flex flex-col md:flex-row gap-2'>
          <TextInput
            placeholder="Search by patient, MRN, or event type..."
            leftSection={<BiSearch size={18} />}
            radius="xl"
            size="sm"
            variant="filled"
            className="md:grow"
          />

          <Select
            data={['All Statuses', 'Open', 'Under Review', 'Resolved']}
            defaultValue="All Statuses"
            radius="xl"
            size="sm"
            variant="filled"
            className="md:grow"
          />
          <Select
            data={['All Severities', 'Critical', 'High', 'Medium', 'Low']}
            defaultValue="All Severities"
            radius="xl"
            size="sm"
            variant="filled"
            className="md:grow"
          />
        </div>
      </Stack>
    </Paper>
  )
}

export default EventFilters
