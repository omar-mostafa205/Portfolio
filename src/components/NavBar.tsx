"use client";
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { FloatingNav } from './ui/floating-navbar'

const NavBar = () => {
    const navItems = [
        {
            name: "Tech stack",
            link: "#tech",
        },
        {
            name: "Projects",
            link: "#projects",
        },
        {
            name: "Contact",
            link: "#contact",

        }
    ]
    
    return (
        <>
            <nav className='flex flex-row items-center justify-between mx-auto w-full max-w-[80rem] py-10 text-white px-8'>
                <Link href="/">
                    <Image src={"/omL.png"} alt="logo" width={50} height={50} />
                </Link>

                <div>
                    <ul className='flex flex-row text-center gap-10'>
                        {navItems.map((item) => (
                            <li key={item.name} className='hover:text-[#ccabff] cursor-pointer'>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <a href="#about">
                    <button
                        className="flex cursor-pointer items-center gap-2 rounded-md px-6 py-3 font-medium text-white 
                        bg-gradient-to-r from-[#161A31] to-[#06091F] 
                        border border-[#22233a] 
                        shadow-[inset_0_0_8px_rgba(255,255,255,0.05)] 
                        hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] 
                        transition-all duration-300"
                    >
                        My Resume
                    </button>
                </a>
            </nav>

            <FloatingNav navItems={navItems} />
        </>
    )
}

export default NavBar