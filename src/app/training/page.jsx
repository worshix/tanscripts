import TrainingCard from "@/components/TrainingCard";
import Services from "../../../public/assets/Services";
import dynamic from "next/dynamic";

const BasicAnimations = dynamic(() => import('./../../components/BasicAnimations'), { ssr: false });

function Training(){
    return(
        <main>
        <section>
        <h1 key='automation-header' className="text-orange-400 text-center text-xl font-bold my-4 md:text-2xl md:my-6 slide-in-top">Training</h1>
        <article className="flex justify-center flex-col gap-2 sm:flex-row flex-wrap mt-4">
                {Services.training.map((item) => <TrainingCard prop = {item}/>)}
            </article>
            <article className=" mt-6 flex gap-2 flex-wrap justify-center space-y-6 items-top">
                <div>
                    <h1 className="text-orange-400 font-bold text-center slide-in-left">Training Methodology</h1>
                    <ul className="list-disc pl-6 slide-in-top">
                        <li>Theoretical lectures</li>
                        <li>Practical hands-on sessions</li>
                        <li>Project-based learning</li>
                        <li>Case studies and group discussions</li>
                        <li>One-on-one mentorship and guidance</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-orange-400 font-bold text-center slide-in-left">Training Materials</h1>
                    <ul className="list-disc pl-6 slide-in-top">
                        <li>Comprehensive training manual</li>
                        <li>Software and tools for programming and design</li>
                        <li>Hardware kits for hands-on practice</li>
                        <li>Access to online resources and tutorials</li>
                    </ul>
                </div>
                <div>
                    <h1 className="text-orange-400 font-bold text-center slide-in-left">Prerequisites</h1>
                    <ul className="list-disc pl-6 slide-in-top">
                        <li>Basic knowledge of electronics and programming</li>
                        <li>Familiarity with circuit analysis and design</li>
                        <li>No prior experience with solar installations or PLC programming required</li>
                    </ul>    
                </div>
            </article>
        </section>
            {/* all posts to do with training services */}
            <h1 className='text-center font-bold text-2xl sm:text-3xl text-main-400 m-4 slide-in-top'>Activities</h1>
            <section className="training-services">

            </section>

            {/* testimonials for training services */}
            <h1 className='text-center font-bold text-2xl sm:text-3xl text-main-400 m-4 slide-in-top'>Testimonials</h1>
            <section className="training-testimonials">

            </section>
        <BasicAnimations />
        </main>
    )
}

export default Training