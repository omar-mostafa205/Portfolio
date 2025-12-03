"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { FloatingNav } from './ui/floating-navbar';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
    ];

    function handleSmoothScroll(e, link) {
        e.preventDefault();
        const targetElement = document.querySelector(link);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false); 
    }

    return (
        <>
            <nav className='flex flex-row items-center justify-between mx-auto w-full max-w-[80rem] py-10 text-white px-8 relative'>
                <Link href="/">
                    <Image src={"/omL.png"} alt="logo" width={50} height={50} />
                </Link>

                <div className='hidden md:block'>
                    <ul className='flex flex-row text-center gap-10'>
                        {navItems.map((item) => (
                            <li key={item.name} className='hover:text-[#ccabff] cursor-pointer transition-colors duration-200'>
                                <a 
                                    href={item.link}
                                    onClick={(e) => handleSmoothScroll(e, item.link)}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                
                <a className='hidden md:block'>
                    <Link
                        className="flex cursor-pointer items-center gap-2 rounded-md px-6 py-3 font-medium text-white 
                        bg-gradient-to-r from-[#161A31] to-[#06091F] 
                        border border-[#22233a] 
                        shadow-[inset_0_0_8px_rgba(255,255,255,0.05)] 
                        hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] 
                        transition-all duration-300"
                        href="/OmarResume.pdf"
                        download="Omar_Resume.pdf"
                    >
                        My Resume
                    </Link>
                </a>

                <button
                    className='md:hidden z-50 relative'
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <X className="w-6 h-6 text-white" />
                    ) : (
                        <Menu className="w-6 h-6 text-white" />
                    )}
                </button>

                <div
                    className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
                        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                    onClick={() => setIsOpen(false)}
                />

                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-[#0a0a0f] to-[#161A31] border-l border-[#22233a] z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className='flex flex-col h-full pt-20 px-8'>
                        <ul className='flex flex-col gap-6 mb-8'>
                            {navItems.map((item) => (
                                <li key={item.name} className='hover:text-[#ccabff] cursor-pointer transition-colors duration-200 text-lg'>
                                    <a 
                                        href={item.link}
                                        onClick={(e) => handleSmoothScroll(e, item.link)}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <a>
                            <button
                                className="w-full flex cursor-pointer items-center justify-center gap-2 rounded-md px-6 py-3 font-medium text-white 
                                bg-gradient-to-r from-[#161A31] to-[#06091F] 
                                border border-[#22233a] 
                                shadow-[inset_0_0_8px_rgba(255,255,255,0.05)] 
                                hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] 
                                transition-all duration-300"
                            >
                                My Resume
                            </button>
                        </a>
                    </div>
                </div>
            </nav>

            <FloatingNav navItems={navItems} />
        </>
    );
};

export default NavBar;