import Link from 'next/link'
import React from 'react'

function ErrorPage() {
  return (
    <div className='w-screen h-[calc(100vh-65px)] flex justify-center items-center flex-col'>
      <h1 className='text-primary mb-4 text-4xl'>Page Not Found</h1>
      <Link href='/' className='block p-2 rounded-md bg-secondary text-white px-4'>Go To Home</Link>
    </div>
  )
}

export default ErrorPage
