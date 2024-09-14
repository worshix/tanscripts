import TrainingCard from "@/components/TrainingCard";
import Services from "../../../public/assets/Services";
import dynamic from "next/dynamic";
import Gallery from "@/components/Gallery";
import VideoGallery from "@/components/VideoGallery";
import Testimonial from "@/components/Testimonial";
import testimonials from "../../../public/assets/testimonials";
import { createClient } from '@/prismicio';


export const metadata = {
    title: "Tanscripts Engineering | Training Engineering",
}

const BasicAnimations = dynamic(() => import('./../../components/BasicAnimations'), { ssr: false });
async function Training(){
    const client = createClient();
    const videos = await client.getAllByType('video');
    const images = await client.getAllByType('image');
    return(
        <main>
        <section>
        <h1 key='automation-header' className="text-orange-400 text-center text-xl font-bold my-4 md:text-2xl md:my-6 slide-in-top">Training</h1>
        <article className="flex justify-center flex-col gap-2 sm:flex-row flex-wrap mt-4 mb-8">
                {Services.training.map((item, index) => <TrainingCard key={"training-card"+index} prop = {item}/>)}
            </article>
            <article className="mt-6 flex gap-2 flex-wrap justify-center items-top sm:text-lg">
                <div className="sm:w-[360px]">
                    <h1 className="text-orange-400 font-bold text-center slide-in-left">Training Methodology</h1>
                    <ul className="list-disc pl-6 slide-in-top">
                        <li>Theoretical lectures</li>
                        <li>Practical hands-on sessions</li>
                        <li>Project-based learning</li>
                        <li>Case studies and group discussions</li>
                        <li>One-on-one mentorship and guidance</li>
                    </ul>
                </div>
                <div className="sm:w-[360px]">
                    <h1 className="text-orange-400 font-bold text-center slide-in-left">Training Materials</h1>
                    <ul className="list-disc pl-6 slide-in-top">
                        <li>Comprehensive training manual</li>
                        <li>Software and tools for programming and design</li>
                        <li>Hardware kits for hands-on practice</li>
                        <li>Access to online resources and tutorials</li>
                    </ul>
                </div>
                <div className="sm:w-[360px]">
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
            <h1 className="text-xl text-main2 text-center font-bold">Training Images</h1>
                <artcile className="latest-images">
                    {/* Latest images in here, just 5 is enough */}
                    <Gallery images = {images} />
                </artcile>
                <h1 className="text-xl text-main2 text-center font-bold">Training Videos</h1>
                <artcile className="latest-videos">
                    {/* Latest videos in here, just 3 is enough */}
                    <VideoGallery videos={videos} />;
                </artcile>

            </section>

            {/* testimonials for training services */}
            <h1 className='text-center font-bold text-2xl sm:text-3xl text-main-400 m-4 slide-in-top'>Testimonials</h1>
            <Testimonial clients={testimonials}/>
            <BasicAnimations />
        </main>
    )
}

export default Training
