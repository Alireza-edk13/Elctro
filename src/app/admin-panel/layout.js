import NavBar from '@/components/templates/AdminPanel/NavBar/NavBar'
import SideBar from '@/components/templates/AdminPanel/SideBar/SideBar'
import React from 'react'

export default async function AdminPanelLayout({ children }) {
    return (
        <>
            <NavBar />
            <div className='grid grid-cols-12  bg-FooterBg min-h-screen mx-auto bg-cover'>
                <div className="md:col-span-2">
                    <SideBar />
                </div>
                <div className=" col-span-12 lg:col-span-10">
                    <div className=' mt-24 px-4 sm:px-8 space-y-10 mb-9'>
                        {children}
                    </div>
                </div>
            </div>

        </>
    )
}
