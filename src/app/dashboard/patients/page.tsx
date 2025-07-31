import {
  ActionIcon,
  Badge,
  Group,
  Select,
  Table,
  TextInput
} from '@mantine/core';

import { BiEdit, BiSearch } from 'react-icons/bi';
import DashboardHeader from '../../components/header';

const page = () => {
  const rows = [
    {
      name: 'John Doe',
      mrn: 'MRN001',
      access: { type: 'AVF', color: 'violet', iconColor: 'green' },
      location: 'L-AVF',
      status: { label: 'Active', color: 'violet' },
      evaluation: '2024-12-15',
      clinic: 'Dialysis Center A',
    },
    // Other rows...
  ];
  return (
    <>
      <DashboardHeader username='Patient Census' description='Manage patient information and vascular access details' />
      <>
        <Group grow mb="md">
          <TextInput
            placeholder="Search by name or MRN..."
            leftSection={<BiSearch size={16} />}
            radius={'xl'}
         />

          <Select data={['All Clinics', 'Dialysis Center A', 'Dialysis Center B']} defaultValue="All Clinics" radius={'xl'} />
          <Select data={['All Access Types', 'AVF', 'AVG']} defaultValue="All Access Types" radius={'xl'} />
          <Select data={['All Statuses', 'Active', 'Overdue Evaluation']} defaultValue="All Statuses" radius={'xl'} />
        </Group>

        {/* Table */}
        <Table striped highlightOnHover>
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>MRN</th>
              <th>Access Type</th>
              <th>Location</th>
              <th>Status</th>
              <th>Last Evaluation</th>
              <th>Clinic</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.mrn}>
                <td>{row.name}</td>
                <td>{row.mrn}</td>
                <td>
                  <Badge color={row.access.color} variant="filled">
                    {row.access.type}
                  </Badge>
                </td>
                <td>{row.location}</td>
                <td>
                  <Badge color={row.status.color}>{row.status.label}</Badge>
                </td>
                <td>{row.evaluation}</td>
                <td>{row.clinic}</td>
                <td>
                  <ActionIcon variant="transparent" color="blue">
                    <BiEdit size={18} />
                  </ActionIcon>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    </>
  )
}

export default page
