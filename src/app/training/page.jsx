import TrainingCard from "@/components/TrainingCard";
import Services from "../../../public/assets/Services";

function Training(){
    return(
        <>
        <section>
        <h1 className="text-orange-400 text-center text-xl font-bold mt-4 mb-2 my-4">Training</h1>
        <article className="flex justify-center flex-col gap-2 sm:flex-row flex-wrap mt-4">
                {Services.training.map((item) => <TrainingCard prop = {item}/>)}
            </article>
            <article className="text-white mt-2 flex gap-2 flex-wrap">
                <div>
                    <h1 className="font-bold text-center">Training Methodology</h1>
                    <ul className="list-disc pl-6">
                        <li>Theoretical lectures</li>
                        <li>Practical hands-on sessions</li>
                        <li>Project-based learning</li>
                        <li>Case studies and group discussions</li>
                        <li>One-on-one mentorship and guidance</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold text-center">Training Materials</h1>
                    <ul className="list-disc pl-6">
                        <li>Comprehensive training manual</li>
                        <li>Software and tools for programming and design</li>
                        <li>Hardware kits for hands-on practice</li>
                        <li>Access to online resources and tutorials</li>
                    </ul>
                </div>
                <div>
                    <h1 className="font-bold text-center">Prerequisites</h1>
                    <ul className="list-disc pl-6">
                        <li>Basic knowledge of electronics and programming</li>
                        <li>Familiarity with circuit analysis and design</li>
                        <li>No prior experience with solar installations or PLC programming required</li>
                    </ul>    
                </div>
            </article>
        </section>
        </>
    )
}

export default Training