/** All the cards for graphic Design **/
import Link from "next/link";
import Image from "next/image";

export default function ServiceCard(prop){
    //takes in an argument with the props
    const { id, title, image, details, description} = prop.prop; //for some reason prop.prop is working
    let i = 0;
    return(
        <>
        <div className="w-[300px] rounded-xl bg-white bg-opacity-15 shadow-md mx-auto sm:mx-2 shadow-black slide-in-bottom" id={id} key={id}>
            <Image className="graphic-image w-full rounded-xl rounded-b-none" src={`/assets/${image}`} alt={title} width={320} height={320}/>
            <ul className="flex justify-between p-2 items-center">
                <li className=" block w-3/5 p-1 bg-main-300 bg-opacity-75 font-bold rounded-md text-center h-fit text-sm text-white">{title}</li>
                <li className="block w-2/5"><Link className="block p-2 font-bold text-slate-500 text-sm" href='/contactus'>Get Service<i className="inline-block bi bi-phone animate-pulse"></i></Link></li>
            </ul>
            <p className="font-bold p-2">{description}</p>
            <ul className="pl-6 list-disc mb-2">
                {details.map((item) => (<li key={`${title}-${i++}`}>{item}</li>))}
            </ul>
        </div>
        </>
    )
}