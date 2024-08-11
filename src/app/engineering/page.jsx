import ServiceCard from "@/components/ServiceCard";
import Services from "../../../public/assets/Services";
import dynamic from "next/dynamic";

const BasicAnimations = dynamic(() => import('./../../components/BasicAnimations'), { ssr: false });


function Engineering(){
    return(
        <main>
            <section className="w-full overflow-x-hidden">
                <h1 key='automation-header' className="text-orange-400 text-center text-xl font-bold my-4 md:text-2xl md:my-6 slide-in-top">Industrial Automation</h1>
                <article key='automation' className="w-full flex flex-col flex-wrap gap-2 sm:flex-row justify-center">
                    { Services.industrialAutomation.map((item) => <ServiceCard key={item.id} prop = {item} />) }
                </article>
                <h1 key='automation-header' className="text-orange-400 text-center text-xl font-bold my-4 md:text-2xl md:my-6 slide-in-top">Embedded Systems</h1>
                <article key='embedded' className="w-full flex flex-col flex-wrap gap-2 sm:flex-row justify-center">
                    { Services.embeddedSystems.map((item) => <ServiceCard key={item.id} prop = {item} />) }
                </article>
                <h1 key='automation-header' className="text-orange-400 text-center text-xl font-bold my-4 md:text-2xl md:my-6 slide-in-top">Other Services</h1>
                <article key='other' className="w-full">
                    <ul className=" w-full p-2 flex flex-row flex-wrap gap-1 overflow-x-hidden border-y-2 border-orange-400 justify-center">
                        {Services.otherServices.map((item) => <li id={item.id} key={item.id} className="bg-white bg-opacity-15 h-fit p-2 font-bold font-mono slide-in-left">{item.title}</li>)}
                    </ul>
                </article>
            </section>

            {/* all posts to do with engineering services */}
            <h1 className='text-center font-bold text-2xl sm:text-3xl text-main-400 m-4 slide-in-top'>Activities</h1>
            <section className="engineering-services">

            </section>

            {/* testimonials for engineering services */}
            <h1 className='text-center font-bold text-2xl sm:text-3xl text-main-400 m-4 slide-in-top'>Testimonials</h1>
            <section className="engineering-testimonials">

            </section>
            <BasicAnimations />
        </main>
    )
}

export default Engineering