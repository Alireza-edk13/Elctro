
import Footer from '@/components/modules/Footer/Footer'
import Header from '@/components/modules/Header/Header'
import React from 'react'

export default async function MainLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer/>
        </>
    )
}
