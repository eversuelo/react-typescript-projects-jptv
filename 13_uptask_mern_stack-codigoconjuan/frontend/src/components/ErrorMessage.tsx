import React from 'react'

export default function ErrorMessage({children}: {children:React.ReactNode}) {

  return (
    <div className='text-center my-4 bg-red-100 text-red-600 p-3 uppercase text-sm font-semibold'>
      {children}
    </div>
  )
}
