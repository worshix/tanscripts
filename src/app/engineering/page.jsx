import ServiceCard from "@/components/ServiceCard";
import Services from "../../../public/assets/Services";
import dynamic from "next/dynamic";
import Gallery from "@/components/Gallery";
import VideoGallery from "@/components/VideoGallery";
import images from './../../../public/Images';
import Testimonial from "@/components/Testimonial";
import testimonials from "../../../public/assets/testimonials";


const BasicAnimations = dynamic(() => import('./../../components/BasicAnimations'), { ssr: false });
const videos = [
    { src: '/assets/video1.mp4', type: 'video/mp4', description: 'This video shows absolute nonsense and should be taken down' },
    { src: '/assets/video2.mp4', type: 'video/mp4', description: 'This video shows absolute nonsense and should be taken down' },
    { src: '/assets/video3.mp4', type: 'video/mp4', description: 'This video shows absolute nonsense and should be taken down' },
    // Add more videos as needed
];


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
                <h1 className="text-xl text-main2 text-center font-bold">Engineering Images</h1>
                <artcile className="latest-images">
                    {/* Latest images in here, just 5 is enough */}
                    <Gallery images = {images} />
                </artcile>
                <h1 className="text-xl text-main2 text-center font-bold">Engineering Videos</h1>
                <artcile className="latest-videos">
                    {/* Latest videos in here, just 3 is enough */}
                    <VideoGallery videos={videos} />;
                </artcile>
            </section>

            {/* testimonials for engineering services */}
            <h1 className='text-center font-bold text-2xl sm:text-3xl text-main-400 m-4 slide-in-top'>Testimonials</h1>
                <Testimonial clients={testimonials}/>
            <BasicAnimations />
        </main>
    )
}

export default Engineering