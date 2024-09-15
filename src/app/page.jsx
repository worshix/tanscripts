import Card from '@/components/Card';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Gallery from '@/components/Gallery';
import VideoGallery from '@/components/VideoGallery';
import { createClient } from '@/prismicio';

export const metadata = {
    title: "Tanscripts Engineering | Industrial Automation & Engineering Solutions",
}
  
  
const client = createClient();

const HomePageAnime = dynamic(() => import('./HomePageAnime'), { ssr: false });
const BasicAnimations = dynamic(() => import('./../components/BasicAnimations'), { ssr: false });
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
                'Solar Installations'
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

export default async function Home() {
    const images = await client.getAllByType('image');
    const videos = await client.getAllByType('video');
    console.log(images);
    return (
        <main className="overflow-x-hidden">
            {/* hero */}
            <section className="hero pt-6 w-full overflow-x-hidden h-screen text-white flex flex-col items-center justify-center">
                <h1 className='w-full'>
                    <span className="hero-text-1 text-4xl sm:text-5xl font-extrabold text-center hero-font mb-2">Unlocking Industrial Automation Potential</span>
                    <span className="hero-text-2 text-2xl sm:text-3xl font-bold text-center hero-font mb-2">While</span>
                    <span className="hero-text-3 text-4xl sm:text-5xl font-extrabold text-center hero-font mb-4">Training the Next Generation</span>
                </h1>
                <p className="motto font-bold text-lg sm:text-xl text-white text-center mb-6">Where Embedded Systems Meet Industrial Strength</p>
                <div className="buttons flex flex-row gap-4 justify-center py-10">
                    <Link href='mailto:transcriptsengineering@gmail.com' className="spin-btn hover:scale-110 bg-sky-500 p-3 font-bold rounded-lg block w-fit">Get In Touch<span className="bi bi-phone-vibrate animate-bounce inline-block ml-1"></span></Link>
                    <Link href='/contactus' className="spin-btn hover:scale-110 bg-orange-400 p-3 font-bold rounded-lg block w-fit">Start Training</Link>
                </div>
            </section>

            {/* services overview */}
            <section className="landing-services overflow-x-hidden">
                <Card {...service1} />
                <Card {...service2} />
            </section>

            {/* latest posts */}
            <h2 className='text-center font-bold text-2xl sm:text-3xl text-main-400 m-4 sidebar'>Latest Activities</h2>
            <section className="latest-stuff overflow-x-hidden">
                <h3 className="text-lg text-main2 text-center font-bold sm:text-2xl">Images</h3>
                <artcile className="latest-images">
                    {/* Latest images in here, just 5 is enough */}
                    <Gallery images = {images} />
                </artcile>
                <h3 className="text-lg text-main2 text-center font-bold sm:text-2xl">Videos</h3>
                <artcile className="latest-videos overflow-x-hidden">
                    {/* Latest videos in here, just 3 is enough */}
                    <VideoGallery videos={videos} />;
                    <a id="contact-us"></a>
                </artcile>
            </section>

            {/* contacts and form */}
    <section className="relative bg-gradient-to-br from-main-400 to-main-600 text-white py-16 overflow-hidden">
      
      {/* SVG Curve */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-x-0 bottom-0 -mb-1"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,245.3C672,267,768,277,864,250.7C960,224,1056,160,1152,138.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-4xl sm:text-5xl font-bold mb-6">
          Let&apos;s Automate Your Future
        </h3>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          Transform your manufacturing and industrial processes with cutting-edge automation solutions. 
          From robotics to intelligent control systems, we have the expertise to take your operations 
          to the next level.
        </p>
        
        {/* Call to Action Button */}
        <Link href="/contactus">
          <span className="inline-block px-8 py-4 text-lg font-semibold bg-white text-main-500 rounded-lg shadow-lg hover:bg-main-100 transition-colors">
            Get In Touch
          </span>
        </Link>
      </div>
    </section>
            <HomePageAnime />
            <BasicAnimations />
        </main>
    )
}
