import React from 'react'
import Brand from './Brand/Brand'

export default function Brands() {
  return (
    <section>
        <div className='container my-20'>
            <div className=' grid grid-cols-6'>
                <Brand pic="4"/>
                <Brand pic="5"/>
                <Brand pic="6"/>
                <Brand pic="7"/>
                <Brand pic="8"/>
                <Brand pic="10"/>
            </div>
        </div>
    </section>
  )
}
