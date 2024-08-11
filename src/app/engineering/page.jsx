import ServiceCard from "@/components/ServiceCard";
import Services from "../../../public/assets/Services";

function Engineering(){
    return(
        <main>
            <section className="w-full overflow-x-hidden">
                <h1 key='automation-header' className="text-orange-400 text-center text-xl font-bold my-4 md:text-2xl md:my-6">Industrial Automation</h1>
                <article key='automation' className="w-full flex flex-col flex-wrap gap-2 sm:flex-row justify-center">
                    { Services.industrialAutomation.map((item) => <ServiceCard prop = {item} />) }
                </article>
                <h1 key='embedded-header' className="text-orange-400 text-center text-xl font-bold mt-4 mb-2">Embedded Systems</h1>
                <article key='embedded' className="w-full flex flex-col flex-wrap gap-2 sm:flex-row justify-center">
                    { Services.embeddedSystems.map((item) => <ServiceCard prop = {item} />) }
                </article>
                <h1 key='other-header' className="text-orange-400 text-center text-xl font-bold mt-4 mb-2">Other Services</h1>
                <article key='other' className="w-full">
                    <ul className=" w-full p-2 flex flex-row flex-wrap gap-1 overflow-x-hidden border-y-2 border-orange-400 justify-center">
                        {Services.otherServices.map((item) => <li id={item.id} key={item.id} className="bg-white bg-opacity-15 h-fit p-2 font-bold font-mono">{item.title}</li>)}
                    </ul>
                </article>
            </section>
        </main>
    )
}

export default Engineering