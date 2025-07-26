// components/Dashboard/DoctorsList.tsx
'use client'

import { BiUser } from "react-icons/bi"

const DoctorsList = () => {
  const doctors = [
    {
      initials: 'MS',
      name: 'Dr. Michael Smith',
      specialty: 'Vascular Access',
      patients: 12,
      status: 'Available',
      statusColor: 'bg-green-100 text-green-700',
      statusDot: 'bg-green-500'
    },
    {
      initials: 'SW',
      name: 'Dr. Sarah Wilson',
      specialty: 'Nephrology',
      patients: 8,
      status: 'Busy',
      statusColor: 'bg-yellow-100 text-yellow-700',
      statusDot: 'bg-yellow-500'
    },
    {
      initials: 'JB',
      name: 'Dr. James Brown',
      specialty: 'Surgery',
      patients: 15,
      status: 'Available',
      statusColor: 'bg-green-100 text-green-700',
      statusDot: 'bg-green-500'
    },
    {
      initials: 'ED',
      name: 'Dr. Emily Davis',
      specialty: 'Radiology',
      patients: 0,
      status: 'On Leave',
      statusColor: 'bg-red-100 text-red-700',
      statusDot: 'bg-red-500'
    }
  ]

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-200 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
          <BiUser className="w-4 h-4 text-purple-500" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Doctors List</h3>
      </div>

      <div className="space-y-4">
        {doctors.map((doctor, index) => (
          <div key={index} className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-blue-500 font-semibold">
              {doctor.initials}
            </div>

            <div className="flex-1 items-center flex gap-2 space-x-3">
              <div className="flex flex-col">
                <h4 className="font-semibold text-gray-900">{doctor.name}</h4>

                <p className="text-sm text-gray-600 ">{doctor.specialty}</p>
              </div>
              <div className="">
                <span className="text-sm text-gray-500">Patients</span>
                <div className="font-bold text-gray-900 text-right">{doctor.patients}</div>
              </div>
              <div className="flex  items-center space-x-2 mt-1">
                <div className={`w-2 h-2 ${doctor.statusDot} rounded-full`}></div>
                <span className={`px-2 py-1 rounded-2xl text-xs font-medium ${doctor.statusColor}`}>
                  {doctor.status}
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorsList