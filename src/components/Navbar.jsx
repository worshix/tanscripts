'use client';

import Link from "next/link";

//for navbar routes and on page links
const links = [
    {
        name:"Home",
        link:'/'
    },
    {
        name:"Engineering",
        link:'/engineering'
    },
    {
        name:"Training",
        link:'/training'
    },
    {
        name:"Contact Us",
        link:'contactus'
    },
]

const Navbar = () => {
    let n = 0;
  return (
    <header className="z-40 overflow-hidden">
        {/* for making sure items don't fall under the navbar onload */}
        <div className='w-full h-[50px]'>.</div>
        <nav className="flex px-2 bg-main-500 font-bold navbar w-full fixed z-50 top-0">
            <Link 
                    href="/"
                    className="block mr-auto p-1 selected Home text-xs sm:text-sm active:scale-95"
                    onClick={ () =>{
                    //to hide sidebar
                    const sidebar = document.getElementById('sidebar');
                    sidebar?.classList.remove('sidebar-active');
                    //changing color of selected navlinks 
                    document.getElementsByClassName('selected')[0].classList.remove('selected')
                    const button = document.getElementsByClassName('Home');
                    button[0].classList.add('selected');
                }}><div className="flex gap-1 w-fit rounded-xl bg-white p-3 shadow-md shadow-black font-bold">Tanscripts Engineering</div>
            </Link>
            <ul className="sm:flex m-0 p-0 hidden nav-ul text-xs sm:text-sm text-white">
                {links.map((item) => <li 
                key={`item.name-${n++}`}
                onClick={ () => {
                    const sidebar = document.getElementById('sidebar');
                    if(sidebar?.classList.contains('sidebar-active')){
                        sidebar?.classList.remove('sidebar-active'); 
                    }    
                    document.getElementsByClassName('selected')[0].classList.remove('selected')
                    const button = document.getElementsByClassName(item.name);
                    button[0].classList.add('selected');
                }}
                className={`${item.name} m-0 p-0 display-animate nav-list-item`}>
                <Link key={`link-${n++}`} href={item.link} className="block p-4 hover:text-main2 transition-all duration-300 active:scale-95">{item.name}</Link></li>
            )}
            </ul>
            <button 
            className="text-white p-4 hover:text-main2 display-animate sm:hidden"
            onClick = {() => {
                const sidebar = document.getElementById('sidebar');
                if(!sidebar?.classList.contains('sidebar-active')){
                    sidebar?.classList.add('sidebar-active');
                }
                else{
                    sidebar?.classList.remove('sidebar-active'); 
                }
            }}
            >
                <span className="bi bi-menu-button-wide-fill"></span>
                </button>
        </nav>
        <nav id="sidebar" className="sidebar w-[250px] origin-top bg-main-400 fixed right-4 top-20 z-50 py-6 px-10 transition-all ease duration-500 scale-y-0 shadow-md shadow-black">
            <ul>
                {links.map((item) => <li 
                className="side-item" 
                key={`side-item-${n++}`}
                onClick = {() => {
                    const sidebar = document.getElementById('sidebar');
                    if(sidebar?.classList.contains('sidebar-active')){
                        sidebar?.classList.remove('sidebar-active'); 
                        }
                    }
                }
                >
                <Link href={item.link} className="text-white font-semibold py-8 text-xl">{item.name}</Link>
                </li>)}
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
