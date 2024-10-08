
import NavBar from '@/components/templates/UserPanel/NavBar/NavBar'
import SideBar from '@/components/templates/UserPanel/SideBar/SideBar'
import { authAdmin, authUser } from '@/app/api/utils/serverHelpers';
import React from 'react'

export default async function UserPanelLayout({ children }) {
    const isAdmin = await authAdmin();
    return (
        <>
            <NavBar />
            <div className='grid grid-cols-12'>
                <div className="xxl:col-span-2">
                    <SideBar isAdmin={isAdmin ? true : false} />
                </div>
                <div className=" col-span-12 xxl:col-span-10">
                    <div className='mt-24 px-4 sm:px-8 space-y-10 mb-9'>
                        {children}
                    </div>
                </div>
            </div>

        </>
    )
}
