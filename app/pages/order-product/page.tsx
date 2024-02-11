"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const OrderProduct = () => {
    const router = useRouter();
    const handelOnclick = () => {
        router.push('/')
    }
  return (
    <>
        <div>OrderProduct</div>
        <button className='mt-10 rounded-t' onClick={handelOnclick}> Click Me </button>
    </>
  )
}

export default OrderProduct