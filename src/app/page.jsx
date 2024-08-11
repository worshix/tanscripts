import Card from '@/components/Card';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import ContactForm from '@/components/ContactForm';
import Gallery from '@/components/Gallery';
import testImages  from './../../public/Images';
import VideoGallery from '@/components/VideoGallery';

const HomePageAnime = dynamic(() => import('./HomePageAnime'), { ssr: false });
const BasicAnimations = dynamic(() => import('./../components/BasicAnimations'), { ssr: false });
const contacts = [
    {
        id:'contact-1',
        name:'WhatsApp',
        link:'https://wa.me/263713664345',
        bootstrapIcon:'whatsapp',
        details:'(263) 713 664 345',
    },    
    {
        id:'contact-2',
        name:'facebook',
        link:'#',
        bootstrapIcon:'facebook',
        details:'page_name',
    },
    {
        id:'contact-3',
        name:'instagram',
        link:'#',
        bootstrapIcon:'instagram',
        details:'insta user name',
    },
    {
        id:'contact-4',
        name:'E-Mail',
        link:'#',
        bootstrapIcon:'envelope',
        details:'tandzapa@gmail.com',
    },
    {
        id:'contact-5',
        name:'Mobile',
        link:'tel:+263713664345',
        bootstrapIcon:'phone',
        details:'(263) 713664345'
    }
]
const service1 = {
    title:'Engineering Services',
    route:'/engineering',
    image:'automation.jpg',
    alt:"industrial automation",
    details:[
        {
            title:'Industrial Automation',
            details:[
                'Designing, development, implementation and maintenance of customized manufacturing and industrial systems',
                'Plant upgrades'
            ]
        },
        {
            title:'Embedded Systems',
            details:[
                'Microcontrollers and IoT based solutions including the respective hardware, firmware, and maintenance support',
            ]
        },
        {
            title:'Electrification',
            details:[
                'Industrial Electrification',
                'Domestic Electrification',
                'Solar Installation'
            ]
        }
    ],
} 
const service2 = {
    title:'Training',
    route:'/training',
    image:'training.jpg',
    alt:"engineering training",
    details:[
        {
            title:'Industrial Automation',
            details:[
                'Programmable Logic Controller(PLC) (Unitronics, Mitsubishi, Siemens, Codmay)',
                'SCADA'
            ]
        },
        {
            title:'Embedded Systems',
            details:[
                'Embedded Programming',
                'Hardware development (Schematic design, PCB design)'
            ]
        },
        {
            title:'Electrification',
            details:[
                'Phototronic systems design',
                'Phototronic systems installation'
            ]
        }
    ],
} 
//images to test the gallery
const images =  testImages.slice(0,5)
//tester videos
const videos = [
    { src: '/assets/video1.mp4', type: 'video/mp4', description: 'This video shows absolute nonsense and should be taken down' },
    { src: '/assets/video2.mp4', type: 'video/mp4', description: 'This video shows absolute nonsense and should be taken down' },
    { src: '/assets/video3.mp4', type: 'video/mp4', description: 'This video shows absolute nonsense and should be taken down' },
    // Add more videos as needed
];

export default function Home() {
    return (
        <main>
            {/* hero */}
            <section className="hero pt-6 w-full overflow-x-hidden h-screen text-white flex flex-col items-center justify-center">
                <h1 className="hero-text-1 text-4xl sm:text-5xl font-extrabold text-center hero-font mb-2">Unlocking Industrial Automation Potential</h1>
                <h1 className="hero-text-2 text-2xl sm:text-3xl font-bold text-center hero-font mb-2">While</h1>
                <h1 className="hero-text-3 text-4xl sm:text-5xl font-extrabold text-center hero-font mb-4">Training the Next Generation</h1>
                <p className="motto font-bold text-lg sm:text-xl text-white text-center mb-6">Where Embedded Systems Meet Industrial Strength</p>
                <div className="buttons flex flex-row gap-4 justify-center py-10">
                    <Link href='/contacts' className="call-btn-left hover:scale-110 transition-transform ease-linear duration-200 bg-sky-500 p-3 font-bold rounded-lg block w-fit">Get In Touch<span className="bi bi-phone-vibrate animate-bounce inline-block ml-1"></span></Link>
                    <Link href='/contacts' className="call-btn-right hover:scale-110 transition-transform ease-linear duration-200 bg-orange-400 p-3 font-bold rounded-lg block w-fit">Start Training</Link>
                </div>
            </section>

            {/* services overview */}
            <section className="landing-services">
                <Card {...service1} />
                <Card {...service2} />
            </section>

            {/* latest posts */}
            <h1 className='text-center font-bold text-2xl sm:text-3xl text-main-400 m-4 sidebar'>Latest Activities</h1>
            <section className="latest-stuff">
                <h1 className="text-lg text-main2 text-center font-bold">images</h1>
                <artcile className="latest-images">
                    {/* Latest images in here, just 5 is enough */}
                    <Gallery images = {images} />
                </artcile>
                <h1 className="text-lg text-main2 text-center font-bold">Videos</h1>
                <artcile className="latest-videos">
                    {/* Latest videos in here, just 3 is enough */}
                    <VideoGallery videos={videos} />;
                    <a id="contact-us"></a>
                </artcile>
            </section>

            {/* contacts and form */}
            <section className="p-2">
                <h1 className='text-center font-bold text-2xl sm:text-3xl text-main-400 m-4 sidebar'>Contact Us</h1>
                <article className='the-contacts flex flex-col gap-2 sm:flex-row flex-wrap justify-center'>
                        {contacts.map((item) => {
                            return(
                                <Link href={item.link} id={item.id} key={item.id} className='flex flex-shrink-0 bg-main-300 bg-opacity-10 w-[300px] mx-auto sm:mx-0 shadow-md sm:w-1/3 slide-in-left'><i className={`bi-${item.bootstrapIcon} p-2 bg-white col-${item.bootstrapIcon} rounded-r-md text-lg bg-opacity-15 block`}></i><div className='flex flex-col justify-center items-center w-4/5'><h2 className='font-bold'>{item.name}</h2>{item.details}<h2></h2></div></Link>
                            )
                        })}
                </article>
                <ContactForm />
            </section>
            <HomePageAnime />
            <BasicAnimations />
        </main>
    )
}
