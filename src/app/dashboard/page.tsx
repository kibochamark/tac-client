'use client'

import { Grid, Paper, Stack } from '@mantine/core'
import VascularAccessChart from "../../components/access-chart"
import CommonAccessEvents from "../../components/access-events"
import AppointmentsTable from "../../components/appointments-table"
import DoctorsList from "../../components/doctors-list"
import DashboardHeader from "../../components/header"
import QuickActions from "../../components/quick-actions"
import StatsCards from "../../components/statscard"

const DashboardPage = () => (
  // <Container fluid p={0} style={{ minHeight: '100vh', overflow: 'hidden' }}>
    <Stack gap={0} style={{ height: '100vh' }}>
      <DashboardHeader username='Sarah' showGreeting={true} notificationCount={5} />

      {/* <Container 
        fluid 
        p={{ base: 'xs', sm: 'sm', md: 'md' }} 
        style={{ flex: 1, overflow: 'auto' }}
      > */}
        <Stack gap="md">
          <StatsCards />

          {/* Chart and Quick Actions */}
          <Grid>
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <Paper radius="md" shadow="sm" p={{ base: 'sm', sm: 'md' }}>
                <VascularAccessChart />
              </Paper>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <QuickActions />
            </Grid.Col>
          </Grid>

          {/* Events and Doctors */}
          <Grid>
            <Grid.Col span={{ base: 12, lg: 8 }}>
              <Paper radius="xl" shadow="sm" p={{ base: 'sm', sm: 'md' }}>
                <CommonAccessEvents />
              </Paper>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <DoctorsList />
            </Grid.Col>
          </Grid>

          {/* Appointments */}
          <Paper radius="xl" shadow="sm" p={{ base: 'sm', sm: 'md' }}>
            <AppointmentsTable />
          </Paper>
        </Stack>
      {/* </Container> */}
    </Stack>
  // </Container>
)

export default DashboardPage
