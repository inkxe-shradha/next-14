import { notFound } from 'next/navigation'
import React from 'react'

const ReviewDetailsPage = ({params}: {params: {pid: string, reviewId: string}}) => {
  if (params.reviewId == '1') {
    throw new Error (`${params.pid + ' is not a valid pid for review'}`)
  }
  if(parseInt(params.pid, 10) > 100) notFound()
  return (
    <div>ReviewDetailsPage - {params.reviewId} product - {params.pid} </div>
  )
}

export default ReviewDetailsPage