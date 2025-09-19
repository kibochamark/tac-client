export interface Appointment {
  id: string
  patientName: string
  doctorName: string
  date: Date
  time: string
  reason: string
  status: 'scheduled' | 'completed' | 'cancelled'
  duration: number
}

export interface AppointmentFormData {
  patientName: string
  doctorName: string
  date: Date
  time: string
  reason: string
}

export type UserRole = 'nurse' | 'doctor' | 'admin'
