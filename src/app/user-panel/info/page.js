import EditFormSection from '@/components/templates/UserPanel/EditFormSection/EditFormSection'
import { authUser } from '@/app/api/utils/serverHelpers'
import React from 'react'

export default async function page() {

    const user = await authUser()
    return (
        <>
            <EditFormSection user={JSON.parse(JSON.stringify(user))} />
        </>
    )
}
