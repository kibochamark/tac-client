import { Button, Group, Select, Stack, TextInput } from '@mantine/core'
import { DateInput } from '@mantine/dates'

const AccessInfo = () => {
    return (
        <div>
            <Stack>
                <Group grow>
                    <Select label="Access Type" data={['AV Fistula', 'AV Graft', 'Central Catheter']} size="xs" />
                    <TextInput label="Location" radius="md" size="xs" />
                </Group>
                <Group grow>
                    <Select label="Maturity" data={['Mature', 'Immature', 'Failed']} size="xs" />
                    <TextInput label="L-AVF" radius="md" size="xs" />
                </Group>
                <Group grow>
                    <TextInput label="Surgeon" radius="md" size="xs" />
                    <TextInput label="Clinic" placeholder='L-AVF' radius="md" size="xs" />
                </Group>
                <DateInput label="Last Evaluation" radius="md" size="xs" />
            </Stack>
            <Group justify="flex-end" mt="md">
                <Button type="reset" variant="outline" size="xs">Cancel</Button>
                <Button type="submit" size="xs">
                    Save Changes
                </Button>
            </Group>
        </div>
    )
}

export default AccessInfo