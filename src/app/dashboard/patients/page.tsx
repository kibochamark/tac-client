'use client';
import {
  Badge,
  Modal,
  Paper,
  rem,
  ScrollArea,
  Select,
  Stack,
  Table,
  Tabs,
  Text,
  TextInput
} from '@mantine/core';
import { useState } from 'react';

import AccessInfo from '@/components/access-info';
import Documents from '@/components/documents';
import { useDisclosure } from '@mantine/hooks';
import { BiEdit, BiSearch } from 'react-icons/bi';
import DashboardHeader from '../../../components/header';
import PersonalInfo from '../../../components/personal-info';

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
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <DashboardHeader
        username="Patient Census"
        description="Manage patient information and vascular access details"
        notificationCount={2}
      />

      <Stack p={{ base: 'sm', sm: 'md' }} gap="lg">
        {/* Search + Filters */}
        <Paper withBorder p="md" radius="md">
          <Stack gap="md">
            <div className='flex flex-col md:flex-row gap-2'>
              <TextInput
                placeholder="Search by name or MRN..."
                leftSection={<BiSearch size={18} />}
                radius="xl"
                size="xs"
                variant="filled"
                className="md:grow"
              />
              
                <Select
                  data={['All Clinics', 'Dialysis Center A', 'Dialysis Center B']}
                  defaultValue="All Clinics"
                  radius="xl"
                  size="xs"
                  variant="filled"
                  className="md:grow"
                />
                <Select
                  data={['All Access Types', 'AVF', 'AVG']}
                  defaultValue="All Access Types"
                  radius="xl"
                  size="xs"
                  variant="filled"
                  className="md:grow"
                />
                <Select
                  data={['All Statuses', 'Active', 'Overdue Evaluation', 'Missing Info']}
                  defaultValue="All Statuses"
                  radius="xl"
                  size="xs"
                  variant="filled"
                  className="md:grow"
                />
            </div>
          </Stack>
        </Paper>

        {/* Table */}
        <Paper radius="md" shadow="sm" p="md" withBorder>
          <Text size="sm" py={"md"}>Patients ({rows.length})</Text>
          <ScrollArea
            h={{ base: 400, sm: 300 }}
            onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
          >
            <Table striped highlightOnHover verticalSpacing="sm" style={{ minWidth: 800 }}>
              <Table.Thead>
                <Table.Tr 
                  className={`text-left ${scrolled ? 'sticky top-0 z-20' : ''}`}
                  style={scrolled ? { backgroundColor: 'white', backdropFilter: 'blur(8px)' } : {}}
                >
                  <Table.Th fw={500}>Patient Name</Table.Th>
                  <Table.Th fw={500} >MRN</Table.Th>
                  <Table.Th fw={500} >Access Type</Table.Th>
                  <Table.Th fw={500} >Location</Table.Th>
                  <Table.Th fw={500} >Status</Table.Th>
                  <Table.Th fw={500} >Last Evaluation</Table.Th>
                  <Table.Th fw={500} >Clinic</Table.Th>
                  <Table.Th fw={500} >Actions</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {rows.map((row) => (
                  <Table.Tr key={row.mrn}>
                    <Table.Td>
                      <Text size="sm" >{row.name}</Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="xs" c="dimmed">{row.mrn}</Text>
                    </Table.Td>
                    <Table.Td>
                      <Badge color={row.access.color} variant="filled" size="sm">
                        {row.access.type}
                      </Badge>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm">{row.location}</Text>
                    </Table.Td>
                    <Table.Td>
                      <Badge color={row.status.color} size="sm">
                        {row.status.label}
                      </Badge>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm">{row.evaluation}</Text>
                    </Table.Td>
                    <Table.Td>
                      <Text size="sm">{row.clinic}</Text>
                    </Table.Td>
                    <Table.Td>
                      <BiEdit size={16} onClick={open} />
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
            <Modal
              opened={opened}
              onClose={close}
              title="Patient Details"
              size={rem(500)}
              radius="md"
            >
              {/* Modal content */}
              <Tabs defaultValue="Personal Information" >
                <Tabs.List>
                  <Tabs.Tab value="Personal Information">Personal Information</Tabs.Tab>
                  <Tabs.Tab value="Access Information"> Access Information</Tabs.Tab>
                  <Tabs.Tab value="Documents">Documents</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="Personal Information">
                  <PersonalInfo />
                </Tabs.Panel>
                <Tabs.Panel value="Access Information">
                  <AccessInfo />
                </Tabs.Panel>
                <Tabs.Panel value="Documents">
                  <Documents />
                </Tabs.Panel>
              </Tabs>
            </Modal>
          </ScrollArea>
        </Paper>
      </Stack>
    </>
  );
};

export default Page;
