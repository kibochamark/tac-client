'use client'

import VascularAccessChart from "../components/access-chart"
import CommonAccessEvents from "../components/access-events"
import AppointmentsTable from "../components/appointments-table"
import DoctorsList from "../components/doctors-list"
import QuickActions from "../components/quick-actions"
import StatsCards from "../components/statscard"

const DashboardPage = () => (
  <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">

    <div className="flex-1 flex flex-col">

      <main className="flex-1 p-4 sm:p-6 overflow-auto">
        <StatsCards />

        {/* Chart and Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <VascularAccessChart />
            </div>
          </div>
          <div>
            <QuickActions />
          </div>
        </div>

        {/* Events and Doctors */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow ">
              <CommonAccessEvents />
            </div>
          </div>
          <div>
            <DoctorsList />
          </div>
        </div>

        {/* Appointments */}
        <div className="overflow-x-auto bg-white rounded-2xl shadow">
          <AppointmentsTable />
        </div>
      </main>
    </div>
  </div>
)

export default DashboardPage
