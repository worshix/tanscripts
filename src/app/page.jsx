import Card from '@/components/Card';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const HomePageAnime = dynamic(() => import('./HomePageAnime'), { ssr: false });

export default function Home() {
    const service1 = {
        title:'Engineering Services',
        route:'/engineering',
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
        icon:'wrench'
    } 
    const service2 = {
        title:'Training',
        route:'/training',
        details:[
            {
                title:'Industrial Automation',
                details:[
                    'Programmable Logic Controller(PLC) (Unitronics, Mitsubishi, Siemens, Codmay, SCADA)',
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
        icon:'code-slash'
    } 
    return (
        <main>
            <section className="hero pt-6 w-full overflow-x-hidden h-screen text-white flex flex-col items-center justify-center">
                <h1 className="hero-text-1 text-4xl sm:text-5xl font-extrabold text-center hero-font mb-2">Unlocking Industrial Automation Potential</h1>
                <h1 className="hero-text-2 text-2xl sm:text-3xl font-bold text-center hero-font mb-2">While</h1>
                <h1 className="hero-text-3 text-4xl sm:text-5xl font-extrabold text-center hero-font mb-4">Training the Next Generation</h1>
                <p className="motto font-bold text-lg sm:text-xl text-white text-center mb-6">Where Embedded Systems Meet Industrial Strength</p>
                <div className="buttons flex flex-row gap-4 justify-center py-10">
                    <Link href='/contacts' className="call-btn-left hover:scale-110 transition-transform duration-200 bg-sky-500 p-3 font-bold rounded-lg block w-fit">Get In Touch<span className="bi bi-phone-vibrate animate-bounce inline-block ml-1"></span></Link>
                    <Link href='/contacts' className="call-btn-right hover:scale-110 transition-transform duration-200 bg-orange-400 p-3 font-bold rounded-lg block w-fit">Start Training</Link>
                </div>
            </section>
            <HomePageAnime />
        </main>
    )
}
