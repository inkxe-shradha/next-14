import Modal from '@/app/components/Modal/Modal'
import photosArray from '@/app/helper/random-photos-constant'
import Image from 'next/image'

const PhotoModal = ({ params: { id } }: { params: { id: string } }) => {
    const photo: any = photosArray.find(photo => String(photo.id) === id)
    console.log('This is my photo loaded');

    return (
        <Modal>
            <Image src={photo.img} alt={photo.img} className='w-full max-h-[500px] object-cover aspect-square' width={500} height={500} />
            <div className="bg-white text-black font-semibold font-sans p-4">
                <h2 className="text-xl font-semibold">
                    {photo.name}
                </h2>
                <h3>
                    {photo.photographer}
                </h3>
                <h3>
                    {photo.location}
                </h3>
            </div>
        </Modal>
    )
}

export default PhotoModal