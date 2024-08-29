import NavBar from '@/components/templates/AdminPanel/NavBar/NavBar'
import SideBar from '@/components/templates/AdminPanel/SideBar/SideBar'
import { authAdmin } from '@/app/api/utils/serverHelpers';
import { redirect } from 'next/navigation';
import React from 'react'

export default async function AdminPanelLayout({ children }) {

    const isAdmin = await authAdmin();

    if (!isAdmin) {
        redirect("/login")
    }

    return (
        <>
            <NavBar />
            <div className='grid grid-cols-12'>
                <div className="2xl:col-span-2">
                    <SideBar />
                </div>
                <div className=" col-span-12 2xl:col-span-10">
                    <div className='mt-24 px-4 sm:px-8 space-y-10 mb-9'>
                        {children}
                    </div>
                </div>
            </div>

        </>
    )
}
