import { PrismicNextImage } from '@prismicio/next';

function Gallery({ images }) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {images.map((image, index) => (
                <div 
                    key={"image-" + index} 
                    className="flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-md slide-in-left"
                >
                    <div className="relative w-full pt-[75%]"> {/* This ensures a consistent aspect ratio */}
                        <PrismicNextImage
                            field={image.data.image}
                            objectFit="cover"
                            className="absolute inset-0 w-full h-full object-cover transition-transform hover:scale-110 duration-300 ease-linear"
                        />
                    </div>
                    <p className="p-4 text-center text-main-300 font-semibold">{image.data.description}</p>
                </div>
            ))}
        </section>
    );
}

export default Gallery;
