import React from 'react'

const Docs = ({params}: {params: {
    slug: string[]
}}) => {
    console.log(params.slug);
    
  return (
    <div>
        <h1 className='text-red-300'>Docs</h1>
    </div>
  )
}

export default Docs