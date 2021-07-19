import React from 'react'

interface NavBarProps {

}

const Data = [
    {
        name: 'Home',
        link: '/dashboard'
    },
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Contact',
        link: '/contact'
    },
    {
        name: 'Inventory',
        link: '/inventory'
    },
    {
        name: 'Settings',
        link: '/settings'
    },
]

const NavBar: React.FC<NavBarProps> = ({}) => {
        const SideBar = () => (
            <div className="lg:w-1/6 pt-16 md:w-1/3 w-2/4 min-h-screen bg-indigo-500 text-white z-50">
                <div className="grid grid-row">

                    {Data.map((v,i) => (
                        <p key={i} className="hover:bg-blue-400 p-4">
                            <span className="text-xl font-semibold">{v.name}</span>
                        </p>
                    ))}
                </div>

            </div>
            )

        return (
            <>
            <div className="bg-indigo-500 fixed w-full text-white p-4">
                Dashboard
                
            </div>
            <SideBar/>
            </>
        );
}

export default NavBar