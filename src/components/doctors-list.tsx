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
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl border border-gray-200 p-3 sm:p-4">
      <div className="flex items-center space-x-2 mb-4 sm:mb-6">
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center">
          <BiUser className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" />
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Doctors List</h3>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {doctors.map((doctor, index) => (
          <div key={index} className="flex items-start sm:items-center space-x-2 sm:space-x-3 p-3 sm:p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center text-blue-500 font-semibold text-sm sm:text-base flex-shrink-0">
              {doctor.initials}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base truncate">{doctor.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">{doctor.specialty}</p>
                </div>
                
                <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3">
                  <div className="text-right">
                    <span className="text-xs sm:text-sm text-gray-500">Patients</span>
                    <div className="font-bold text-gray-900 text-sm sm:text-base">{doctor.patients}</div>
                  </div>
                  
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 ${doctor.statusDot} rounded-full flex-shrink-0`}></div>
                    <span className={`px-2 py-1 rounded-2xl text-xs font-medium ${doctor.statusColor} whitespace-nowrap`}>
                      {doctor.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorsList