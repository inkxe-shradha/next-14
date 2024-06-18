import photosArray from "@/app/helper/random-photos-constant"
import Image from "next/image"
import Link from "next/link"

const PhotoFeed = () => {
    return (
        <main className="container mx-auto">
            <h1 className="text-center text-3xl font-bold my-4">
                New Wonder of AI world of Photos
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    photosArray.map(({ id, img, name }) => <Link href={`photo-feed/${id}`} key={id}>
                        <Image alt={name} src={img} className='w-full object-cover aspect-square' width={250} height={250} />
                    </Link>)
                }
            </div>
        </main>
    )
}

export default PhotoFeed