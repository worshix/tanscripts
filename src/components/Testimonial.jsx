import Image from 'next/image';
import Link from 'next/link';

function Testimonial({ clients }) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
            {clients.map((client, index) => (
                <div key={index} className="flex flex-col items-center bg-white rounded-lg overflow-hidden shadow-md p-6">
                    <div className="w-24 h-24 relative mb-4">
                        <Image
                            src={client.image}
                            alt={client.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                        />
                    </div>
                    <h3 className="text-xl font-semibold text-main-300 mb-2">{client.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{client.jobTitle} at {client.company}</p>
                    <div className="flex space-x-4 mb-4">
                        {client.links.map((link, idx) => (
                            <Link key={idx} href={link.href}
                                className="text-main-500 underline">
                                    {link.label}
                            </Link>
                        ))}
                    </div>
                    <p className="text-center text-gray-700 font-light">{client.testimony}</p>
                </div>
            ))}
        </section>
    );
}

export default Testimonial;
