import Link from "next/link";

export default function TrainingCard(prop){
    //takes in an argument with the props
    const { id, title, details } = prop.prop; //for some reason prop.prop is working
    return(
        <>
        <div className="training-card w-[300px] bg-white bg-opacity-15 text-white overflow-hidden isolate rounded-xl pb-2 card-container flex-shrink-0 mx-auto sm:mx-0" id={id}>
            <div className="w-[300px] h-[100px] bg-main-300"></div>
            <div className="p-1 bg-main-300 w-fit rounded-full mx-auto relative -mt-[50px]"><div className="bg-white h-[90px] w-[90px] rounded-full flex justify-center items-center"><i className="block bi bi-mortarboard text-slate-500 text-5xl"></i></div></div>
            <h1 className="font-bold text-center">{title}</h1>
            <Link className="block w-fit grad p-2 my-4 rounded-full text-white font-bold m-2 mb-auto" href='/Contacts'>Begin Training</Link>
            <ul className="pl-6 p-2 list-disc mb-auto">
                {details.map((item) => (<li>{item}</li>))}
            </ul>
        </div>
        </>
    )
}