'use client';
import { useState } from 'react';
import {
  ActionIcon,
  Badge,
  Group,
  Paper,
  ScrollArea,
  Select,
  Stack,
  Table,
  TextInput,
} from '@mantine/core';

import { BiEdit, BiSearch } from 'react-icons/bi';
import DashboardHeader from '../../components/header';

const Page = () => {  
 
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
    {
      name: 'Sarah Johnson',
      mrn: 'MRN002',
      access: { type: 'AVG', color: 'blue', iconColor: 'blue' },
      location: 'R-AVG',
      status: { label: 'Active', color: 'violet' },
      evaluation: '2024-12-10',
      clinic: 'Dialysis Center B',
    },
    {
      name: 'Michael Chen',
      mrn: 'MRN003',
      access: { type: 'AVF', color: 'violet', iconColor: 'green' },
      location: 'L-AVF',
      status: { label: 'Overdue Evaluation', color: 'red' },
      evaluation: '2024-11-20',
      clinic: 'Dialysis Center A',
    },
    {
      name: 'Emily Rodriguez',
      mrn: 'MRN004',
      access: { type: 'AVG', color: 'blue', iconColor: 'blue' },
      location: 'R-AVG',
      status: { label: 'Active', color: 'violet' },
      evaluation: '2024-12-18',
      clinic: 'Dialysis Center A',
    },
    {
      name: 'David Thompson',
      mrn: 'MRN005',
      access: { type: 'AVF', color: 'violet', iconColor: 'green' },
      location: 'R-AVF',
      status: { label: 'Active', color: 'violet' },
      evaluation: '2024-12-12',
      clinic: 'Dialysis Center B',
    },
    {
      name: 'Lisa Wang',
      mrn: 'MRN006',
      access: { type: 'AVG', color: 'blue', iconColor: 'blue' },
      location: 'L-AVG',
      status: { label: 'Overdue Evaluation', color: 'red' },
      evaluation: '2024-11-25',
      clinic: 'Dialysis Center A',
    },
    {
      name: 'Robert Martinez',
      mrn: 'MRN007',
      access: { type: 'AVF', color: 'violet', iconColor: 'green' },
      location: 'L-AVF',
      status: { label: 'Active', color: 'violet' },
      evaluation: '2024-12-20',
      clinic: 'Dialysis Center B',
    },
    {
      name: 'Jennifer Lee',
      mrn: 'MRN008',
      access: { type: 'AVG', color: 'blue', iconColor: 'blue' },
      location: 'R-AVG',
      status: { label: 'Active', color: 'violet' },
      evaluation: '2024-12-14',
      clinic: 'Dialysis Center A',
    },
    {
      name: 'Thomas Anderson',
      mrn: 'MRN009',
      access: { type: 'AVF', color: 'violet', iconColor: 'green' },
      location: 'R-AVF',
      status: { label: 'Overdue Evaluation', color: 'red' },
      evaluation: '2024-11-30',
      clinic: 'Dialysis Center B',
    },
    {
      name: 'Maria Garcia',
      mrn: 'MRN010',
      access: { type: 'AVG', color: 'blue', iconColor: 'blue' },
      location: 'L-AVG',
      status: { label: 'Active', color: 'violet' },
      evaluation: '2024-12-16',
      clinic: 'Dialysis Center A',
    },
    {
      name: 'James Wilson',
      mrn: 'MRN011',
      access: { type: 'AVF', color: 'violet', iconColor: 'green' },
      location: 'L-AVF',
      status: { label: 'Active', color: 'violet' },
      evaluation: '2024-12-19',
      clinic: 'Dialysis Center B',
    },
    {
      name: 'Patricia Brown',
      mrn: 'MRN012',
      access: { type: 'AVG', color: 'blue', iconColor: 'blue' },
      location: 'R-AVG',
      status: { label: 'Overdue Evaluation', color: 'red' },
      evaluation: '2024-11-28',
      clinic: 'Dialysis Center A',
    }
  ];
  const [scrolled, setScrolled] = useState(false);
  return (
    <>
      <DashboardHeader
        username="Patient Census"
        description="Manage patient information and vascular access details"
      />

      <Stack p="md" gap="lg">
        {/* Search + Filters */}
        <Paper withBorder p="md" radius="md" shadow="xs">
          <Group grow>
            <TextInput
              placeholder="Search by name or MRN..."
              leftSection={<BiSearch size={18} />}
              radius="xl"
              size="md"
            />

            <Select
              data={['All Clinics', 'Dialysis Center A', 'Dialysis Center B']}
              defaultValue="All Clinics"
              radius="xl"
              size="md"
            />
            <Select
              data={['All Access Types', 'AVF', 'AVG']}
              defaultValue="All Access Types"
              radius="xl"
              size="md"
            />
            <Select
              data={['All Statuses', 'Active', 'Overdue Evaluation']}
              defaultValue="All Statuses"
              radius="xl"
              size="md"
            />
          </Group>
        </Paper>

        {/* Table */}
        <Paper radius="md" shadow="sm" p="md" withBorder>
          <ScrollArea h={300} onScrollPositionChange={({ y }) => setScrolled(y !== 0)}>
            <Table striped highlightOnHover p="md" verticalSpacing="sm">
                <thead>
                <tr className={`text-left bg-white z-20 p-4 ${scrolled ? 'sticky top-0' : ''}`}>
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
                      <Badge color={row.access.color} variant="filled" size="sm">
                        {row.access.type}
                      </Badge>
                    </td>
                    <td>{row.location}</td>
                    <td>
                      <Badge color={row.status.color} size="sm">
                        {row.status.label}
                      </Badge>
                    </td>
                    <td>{row.evaluation}</td>
                    <td>{row.clinic}</td>
                    <td>
                      <ActionIcon variant="light" color="blue" radius="xl">
                        <BiEdit size={18} />
                      </ActionIcon>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </ScrollArea>
        </Paper>
      </Stack>
    </>
  );
};

export default Page;
