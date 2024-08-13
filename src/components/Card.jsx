import Link from 'next/link';
import Image from 'next/image';

function Card({ title, image, details, route, alt }) {
    return (
        <section className="relative flex flex-col sm:flex-row p-4 gap-4">
            <article className="w-full sm:w-1/2 flex flex-col items-center relative slide-in-left">
            <h1 className="font-bold text-main-300 text-xl mt-4 sm:mt-2 text-center sm:text-left p-2">{title}</h1>
                <div className="w-full">
                    <Image
                        className="rounded-lg"
                        src={"/assets/" + image}
                        width={600}
                        height={600}
                        alt={alt}
                        layout="responsive"
                    />
                    <Link href={route}
                         className="absolute top-14 left-2 bg-main-300 text-white font-bold py-1 px-3 rounded-lg hover:bg-main2 transition-all duration-200 ease-linear active:scale-95"
                            >Explore
                    </Link>
                </div>
            </article>
            <article className="w-full sm:w-1/2 flex flex-col justify-center slide-in-right">
                {details.map((item, index) => (
                    <div key={index} className="mb-4">
                        <h2 className="font-bold text-lg text-center sm:text-left mb-2 sm:text-xl md:text-2xl">{item.title}</h2>
                        {item.details.map((li, liIndex) => (
                            <p key={liIndex} className="font-light text-center sm:text-left sm:text-lg">
                                <span className="bi-arrow-up-right-circle text-main2 mr-2"></span>
                                {li}
                            </p>
                        ))}
                    </div>
                ))}
            </article>
        </section>
    );
}

export default Card;
