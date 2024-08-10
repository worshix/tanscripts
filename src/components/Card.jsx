import Link from 'next/link';

function Card({ title, image, details, route}){
    return(
        <>
            <Link href={route} className='service-card mx-auto md:mx-0 flex flex-col md:w-[400px] w-[90%] bg-white rounded-md text-center shadow-md p-2'>
            <h1 className='font-bold mb-2 text-main2 text-xl'>{title}</h1>
                {
                    details.map((item) => {
                        let i = 0;
                        return(
                            <ul key={item.title} className='list-disc pl-6 text-start'>
                                <h1 className='font-bold text-center'>{item.title}</h1>
                                {item.details.map((items) => (<li key={i++}>{items}</li>))}
                            </ul>
                        )
                    })
                }
            </Link>
        </>
    )
} 

export default Card