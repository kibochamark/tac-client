import Link from 'next/link'
import React from 'react'
import { BiHeart } from 'react-icons/bi'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='bg-gray-50 min-h-screen p-4'>
            <div className='w-24 h-24 rounded-full py-4 bg-gradient-to-r from-purple-500 to-purple-400 hover:from-purple-400 hover:to-purple-500 mx-auto flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300'>
                <Link href="/">
                    <BiHeart className='w-10 h-10 text-white ' />

                </Link>
            </div>
            <div className='text-center text-black mt-6'>
                <h1 className='text-2xl font-bold text-center mt-2'>TAC System</h1>
                <p className='mt-2 text-gray-900'>Total Access Care</p>
                <p className='mt-2 text-gray-600'>Secure Healthcare Management Platform</p>
            </div>
            {children}
        </div>
    )
}

export default AuthLayout