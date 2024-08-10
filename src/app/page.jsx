import Card from '@/components/Card';
import Link from 'next/link';


export default function Home() {
    const service1 = {
        title:'Engineering Services',
        route:'/engineering',
        details:[
            {
                title:'Industrial Automation',
                details:[
                    'Designing, development, implementation and maintanance of customised manufacturing and industrial systems',
                    'Plant upgrades'
                ]
            },
            {
                title:'Embedded Systems',
                details:[
                    'Microcontrollers and IoT based solutions including the respectie hardware, firmware and maintanace support',
                ]
            },
            {
                title:'Electrification',
                details:[
                    'Industial ELectrification',
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
                    'Embedded Progrmming',
                    'Hardware development (Schematic design, PCB design)'
                ]
            },
            {
                title:'Electrification',
                details:[
                    'Phototronic systems design',
                    'Photronic systems installation'
                ]
            }
        ],
        icon:'code-slash'
    } 
    return (
        <>
            <section className="hero pt-6 w-full overflow-x-hidden h-screen">
                <h1 className="sm:text-4xl font-extrabold text-center">Unlocking industrial automation potential</h1>
                <h1 className="sm:text-2xl font-bold text-center">while</h1>
                <h1 className="sm:text-4xl font-extrabold text-center" >Training the next generation</h1>
                <p className="font-bold sm:text-lg text-xs text-main-50 text-center my-2">where embedded systems meet industrial strength</p>
                <div className="buttons flex flex-row mt-4 gap-2 justify-center">
                    <Link href='/contacts' className="hover:scale-110 hero-btn bg-sky-500 p-2 font-bold m-2 rounded-lg block w-fit">Get In Touch<span className="bi bi-phone-vibrate animate-bounce inline-block ml-1"></span></Link>
                    <Link href='/contacts' className="hover:scale-110 hero-btn bg-orange-400 p-2 font-bold m-2 rounded-lg block w-fit">Start Training</Link>
                </div>
            </section>
                <article className="services flex flex-col gap-4 justify-center mt-2 md:flex-row md:mt-4 mb-4 overflow-x-hidden">
                <Card service = {service1} />
                <Card service = {service2} />
                </article>
        </>
    )
}