import React from 'react'

export default function TopSectionTitle({title}) {
  return (
    <h3 class=" relative border-b-2 pb-3 mb-6 text-2xl before:absolute before:w-40 before:h-[2px] before:left-0 before:top-11 before:bg-main">{title}</h3>
  )
}
