// components/Dashboard/DoctorsList.tsx
'use client'

import { Badge } from "@mantine/core"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import { BiUser } from "react-icons/bi"
import { CiCircleCheck, CiClock2 } from "react-icons/ci"

const DoctorsList = () => {
  const doctors = [
    {
      initials: 'MS',
      name: 'Dr. Michael Smith',
      specialty: 'Vascular Access',
      patients: 12,
      status: 'Available',
      statusColor: 'green',
      icon: <CiCircleCheck className="text-green-500" />
    },
    {
      initials: 'SW',
      name: 'Dr. Sarah Wilson',
      specialty: 'Nephrology',
      patients: 8,
      status: 'Busy',
      statusColor: 'yellow',
      icon: <CiClock2 className="text-yellow-500" />
    },
    {
      initials: 'JB',
      name: 'Dr. James Brown',
      specialty: 'Surgery',
      patients: 15,
      status: 'Available',
      statusColor: 'green',
      icon: <CiCircleCheck className="text-green-500" />
    },
    {
      initials: 'ED',
      name: 'Dr. Emily Davis',
      specialty: 'Radiology',
      patients: 0,
      status: 'On Leave',
      statusColor: 'red',
      icon: <AiOutlineExclamationCircle className="text-red-500" />
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
                    <Badge size="sm" variant="light" color={doctor.statusColor} leftSection={doctor.icon}>
                      {doctor.status}
                    </Badge>
                    
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