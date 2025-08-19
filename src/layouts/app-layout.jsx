import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header'

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <Header/>
        <Outlet/>
      </main>
      <div className='p-10 text-center bg-gray-800 mt-10'>
        Made with 💗 by Saurav Kumar
      </div>
    </div>
  )
}

export default AppLayout
