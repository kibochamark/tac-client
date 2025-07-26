'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {
  const router = useRouter()
  return (
    <div>
      <button onClick={()=>router.push('/dashboard')}>Click me</button>
    </div>
  )
}

export default Page