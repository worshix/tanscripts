//import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

const contacts = [
    {
        id:'contact-1',
        name:'WhatsApp',
        link:'https://wa.me/263713664345',
        bootstrapIcon:'whatsapp',
        details:'(263) 713 664 345',
        color:'#3DD877'
    },    
    {
        id:'contact-2',
        name:'facebook',
        link:'#',
        bootstrapIcon:'facebook',
        details:'page_name',
        color:''
    },
    {
        id:'contact-3',
        name:'instagram',
        link:'#',
        bootstrapIcon:'instagram',
        details:'insta user name',
        color:''
    },
    {
        id:'contact-4',
        name:'E-Mail',
        link:'#',
        bootstrapIcon:'envelope',
        details:'tandzapa@gmail.com',
        color:'',
    },
    {
        id:'contact-5',
        name:'Mobile',
        link:'#',
        bootstrapIcon:'phone',
        details:'(263) 713 664 345',
        color:''
    }
]

function Contacts(){
    return(
        <section className='contacts-page text-white mt-4'>
            <h1 className='text-center font-bold text-2xl sm:text-4xl text-main-400 m-4 sidebar -translate-x-96'>Contact<i className='text-white not-italic'>{' '+'Us'}</i></h1>
            <article className='the-contacts flex flex-col gap-2 sm:flex-row flex-wrap justify-center hero translate-x-full'>
                    {contacts.map((item) => {
                        return(
                            <Link href={item.link} id={item.id} className='flex flex-shrink-0 bg-white bg-opacity-10 w-[300px] mx-auto sm:mx-0 shadow-md sm:w-1/3'><i className={`bi bi-${item.bootstrapIcon} p-2  bg-white text-white rounded-r-md text-lg bg-opacity-15 block`}></i><div className='flex flex-col justify-center items-center w-4/5'><h2 className='font-bold'>{item.name}</h2>{item.details}<h2></h2></div></Link>
                        )
                    })}
            </article>
            <h1 className='text-center font-bold text-2xl sm:text-4xl text-main-400 m-4 sidebar -translate-x-96'>Other<i className='text-white not-italic'>{' '+'Details'}</i></h1>
            <article className='p-2 hero translate-x-full'>
                {/* Put your mission here mujaya */}
                Other details
            </article>
            <h1 className='text-center font-bold text-2xl sm:text-4xl text-main-400 m-4 sidebar -translate-x-96'>Let's<i className='text-white not-italic'>{' '+'talk'}</i></h1>
            <article className='hero translate-x-full'>
                {/* <ContactForm /> */}
            </article>
        </section>
    )
}

export default Contacts