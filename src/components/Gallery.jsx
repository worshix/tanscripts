import Image from 'next/image';

function Gallery({ images }) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {images.map((image, index) => (
                <div key={"image-"+index} className="flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="w-full h-64 relative">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            layout="fill"
                            objectFit="contain"
                            className="h-full w-auto transition-transform hover:scale-110 duration-300 ease-linear"
                        />
                    </div>
                    <p className="p-4 text-center text-main-300 font-semibold">{image.description}</p>
                </div>
            ))}
        </section>
    );
}

export default Gallery;
