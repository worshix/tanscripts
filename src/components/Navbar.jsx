import Link from "next/link";

const navItems = [
    {
        name:'Engineering',
        link:'#'
    },
    {
        name:'Training',
        link:'#'
    },
    {
        name:'Contacts',
        link:'#'
    },    
]
function Navbar(){
    
    return (
        <header className="overflow-hidden">
            <nav className="text-white font-bold gap-2 flex">
                <Link href='/' className="mr-auto p-2 tan block">Tanscripts Engineering</Link>
                {navItems.map((item) => <Link
                    href={item.link}
                    className='overflow-x-hidden p-2 w-fit before:w-[60px] before:h-[3px] before:absolute before:bg-white before:top-[30px] block before:scale-x-0 hover:before:-scale-x-100 before:transition-transform before:duration-300 before:ease-linear before:origin-center before:block'>
                    {item.name}
                    </Link>
                )}
            </nav>
        </header>
    )
}

export default Navbar