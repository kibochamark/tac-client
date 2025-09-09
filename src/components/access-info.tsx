import { Button, Divider, Group, Select, Stack, TextInput } from '@mantine/core'
import { DateInput } from '@mantine/dates'

const AccessInfo = () => {
    return (
        <div>
            <Divider mb="xl" />
            <Stack>
                <Group grow>
                    <Select label="Access Type" data={['AV Fistula', 'AV Graft', 'Central Catheter']} />
                    <TextInput label="Location" />
                </Group>
                <Group grow>
                    <Select label="Maturity" data={['Mature', 'Immature', 'Failed']} />
                    <TextInput label="L-AVF" />
                </Group>
                <Group grow>
                    <TextInput label="Surgeon" />
                    <TextInput label="Clinic" placeholder='L-AVF' />
                </Group>
                <DateInput label="Last Evaluation" />
            </Stack>
            <Group justify="flex-end" mt="md">
                <Button type="reset" variant="outline">Cancel</Button>
                <Button type="submit">
                    Save Changes
                </Button>
            </Group>
        </div>
    )
}

export default AccessInfo