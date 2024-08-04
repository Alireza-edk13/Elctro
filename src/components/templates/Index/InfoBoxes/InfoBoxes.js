import React from 'react'
import InfoBox from './InfoBox/InfoBox'

export default function InfoBoxes() {
    return (
        <>
            <div className=' container mt-20'>
                <div className=' bg-mainBg grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 rounded-lg'>
                    <InfoBox icon="FaTruck" title="Free Delivery" text="Orders Over $120" />
                    <InfoBox icon="FaRotate" title="Get Refund" text="Within 30 Days Returns" />
                    <InfoBox icon="RiSecurePaymentLine" title="Safe Payment" text="100% Secure Payment" />
                    <InfoBox icon="BiSupport" title="24/7 Support" text="Feel Free To Call Us" />
                </div>
            </div>
        </>
    )
}
