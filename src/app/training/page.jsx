import TrainingCard from "@/components/TrainingCard";
import Services from "../../../public/assets/Services";
import dynamic from "next/dynamic";
import Gallery from "@/components/Gallery";
import VideoGallery from "@/components/VideoGallery";
import Testimonial from "@/components/Testimonial";
import testimonials from "../../../public/assets/testimonials";
import { createClient } from '@/prismicio';
import Link from "next/link";
import socials from "../../../public/socials";

export const metadata = {
    title: "Zimtech Engineering | Training Engineering",
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
        <div className="flex justify-center flex-col gap-2 sm:flex-row flex-wrap mt-4 mb-8">
                {Services.training.map((item, index) => <TrainingCard key={"training-card"+index} prop = {item}/>)}
            </div>
            <article className="mt-6 flex gap-2 flex-wrap justify-center items-top sm:text-lg">
                <div className="sm:w-[360px]">
                    <h2 className="text-orange-400 font-bold text-center slide-in-left">Training Methodology</h2>
                    <ul className="list-disc pl-6 slide-in-top">
                        <li>Theoretical lectures</li>
                        <li>Practical hands-on sessions</li>
                        <li>Project-based learning</li>
                        <li>Case studies and group discussions</li>
                        <li>One-on-one mentorship and guidance</li>
                    </ul>
                </div>
                <div className="sm:w-[360px]">
                    <h2 className="text-orange-400 font-bold text-center slide-in-left">Training Materials</h2>
                    <ul className="list-disc pl-6 slide-in-top">
                        <li>Comprehensive training manual</li>
                        <li>Software and tools for programming and design</li>
                        <li>Hardware kits for hands-on practice</li>
                        <li>Access to online resources and tutorials</li>
                    </ul>
                </div>
                <div className="sm:w-[360px]">
                    <h2 className="text-orange-400 font-bold text-center slide-in-left">Prerequisites</h2>
                    <ul className="list-disc pl-6 slide-in-top">
                        <li>Basic knowledge of electronics and programming</li>
                        <li>Familiarity with circuit analysis and design</li>
                        <li>No prior experience with solar installations or PLC programming required</li>
                    </ul>    
                </div>
            </article>
        </section>
                {/* all posts to do with training services */}
            {/* <h2 className='text-center font-bold text-2xl sm:text-3xl text-main-400 m-4 slide-in-top'>Activities</h2> */}
            {/* <section className="training-services">
            <h3 className="text-xl text-main2 text-center font-bold">Training Images</h3>
                <artcile className="latest-images">
                    Latest images in here, just 5 is enough
                    <Gallery images = {images} />
                </artcile>
                <h3 className="text-xl text-main2 text-center font-bold">Training Videos</h3>
                <artcile className="latest-videos">
                    Latest videos in here, just 3 is enough
                    <VideoGallery videos={videos} />;
                </artcile>

            </section> */}

            {/* testimonials for training services */}
            {/* <h2 className='text-center font-bold text-2xl sm:text-3xl text-main-400 m-4 slide-in-top'>Testimonials</h2> */}
            {/* <Testimonial clients={testimonials}/> */}
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
                Take the first step towards mastering PLCs.
              </h3>
              <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
                Join our comprehensive PLC training program and gain hands-on experience with industry-standard equipment. Enhance your skills and advance your career in automation technology today!
              </p>

              {/* Call to Action Button */}
              <Link href={socials.faceBookTraining} passHref>
                <span className="inline-block px-8 py-4 text-lg font-semibold bg-white text-main-500 rounded-lg shadow-lg hover:bg-main-100 transition-colors">
                  Visit Our Page
                </span>
              </Link>
            </div>

    </section>

            <BasicAnimations />
        </main>
    )
}

export default Training
