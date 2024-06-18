import photosArray from '@/app/helper/random-photos-constant'
import Image from 'next/image'
import React from 'react'

const PhotoPage = ({ params: { id } }: { params: { id: string } }) => {
    const photo: any = photosArray.find(photo => String(photo.id) === id)
    return (
        <div className='container mx-auto my-10'>
            <div className="w-1/2 mx-auto">
                <div>
                    <h1 className="text-center text-3xl font-bold my-4">
                        {photo.name}
                    </h1>
                    <Image src={photo.img} alt={photo.name} className='w-full object-cover aspect-square' width={500} height={800} />
                    <div className="bg-white py-4 text-black text-center">
                        <h3 className='text-black text-center font-extrabold text-3xl'>{photo.paragrapher} </h3>
                        <h3 className='text-black text-center mt-3'>{photo.location} </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoPage