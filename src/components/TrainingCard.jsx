import Link from "next/link";

export default function TrainingCard(prop){
    //takes in an argument with the props
    const { id, title, details } = prop.prop; //for some reason prop.prop is working
    return(
        <>
        <articles className="training-card w-[300px] bg-white bg-opacity-15 overflow-hidden isolate rounded-xl pb-2 card-container flex-shrink-0 mx-auto sm:mx-0 shadow-md shadow-black slide-in-bottom" id={id}>
            <div className="w-[300px] h-[100px] bg-main-300"></div>
            <div className="p-1 bg-main-300 w-fit rounded-full mx-auto relative -mt-[50px]"><div className="bg-white h-[90px] w-[90px] rounded-full flex justify-center items-center"><i className="block bi bi-mortarboard text-slate-500 text-5xl"></i></div></div>
            <h2 className="font-bold text-center">{title}</h2>
            <Link className="block w-fit p-1 my-4 font-bold text-sm m-2 mb-auto underline underline-offset-1 text-orange-400" href='/contactus'>Begin Training</Link>
            <ul className="pl-6 p-2 list-disc mb-auto">
                {details.map((item, index) => (<li key={"detail-item"+index}>{item}</li>))}
            </ul>
        </articles>
        </>
    )
}