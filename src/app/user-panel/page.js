import InfoBox from '@/components/templates/AdminPanel/InfoBox/InfoBox'
import React from 'react'

export default function page() {
    return (
        <>
            <h4 className=' font-morabba text-main text-2xl'>علیرضا خوش اومدی !</h4>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                <InfoBox title="سفارشات" count={52} />
                <InfoBox title="علاقه مندی ها" count={"0" + 3} />
                <InfoBox title="تیکت ها" count={12} />
            </div>
            <div>
                <h4 className=' mt-20  border-b-2 border-mainBlack pb-10 font-morabba text-main text-2xl'>آخرین محصولات اضافه شده به علاقه مندی ها</h4>
                <div className=' grid grid-cols-4 gap-6 mt-10'>
                    
                </div>
            </div>

        </>
    )
}
