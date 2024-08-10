import Link from "next/link";

const navItems = [
    {
        name:'Engineering',
        link:'engineering'
    },
    {
        name:'Training',
        link:'training'
    },
    {
        name:'Contacts',
        link:'contacts'
    },    
]
function Navbar(){
    
    return (
        <header className="overflow-hidden">
            <nav className="font-bold gap-2 flex">
                <Link href='/' className="mr-auto p-2 block">Tanscripts Engineering</Link>
                {navItems.map((item) => <Link
                    href={item.link}
                    className='overflow-x-hidden p-2 w-fit block before:scale-x-0'>
                    {item.name}
                    </Link>
                )}
            </nav>
        </header>
    )
}

export default Navbar