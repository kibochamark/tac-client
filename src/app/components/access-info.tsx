import { Select, Stack, TextInput } from '@mantine/core'
import { DateInput } from '@mantine/dates'

const AccessInfo = () => {
    return (
        <div>
            <Stack>
            <Select label="Access Type" data={['AV Fistula', 'AV Graft', 'Central Catheter']} />
                <TextInput label="Location" />
                <Select label="Maturity" data={['Mature', 'Immature', 'Failed']} />
                <TextInput label="L-AVF" />
                <TextInput label="Surgeon" />
                <TextInput label="Clinic" placeholder='L-AVF' />
                <DateInput label="Last Evaluation" />
            </Stack>
        </div>
    )
}

export default AccessInfo