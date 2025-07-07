import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { NavLink } from 'react-router-dom';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }

     const handleLinkClick = () => {
        setIsOpen(false); // লিংকে ক্লিক করলে মেনু hide
    };
    return (
        <nav className='bg-green-400 text-amber-100 py-5 md:py-6 sticky top-0'>
            <div className='container mx-auto flex justify-between items-center'>
                <h3>My Logo</h3>
                {/* Mobile Menu Button */}
                <div className='md:hidden'>
                    <button onClick={toggleMenu}>
                        {isOpen ? <AiOutlineClose /> : <FaBars />}
                    </button>
                </div>
                <ul className='hidden md:flex space-x-4 md:space-x-6'>
                    <li>
                        <NavLink to = "/" className={({isActive})=> isActive ? "text-yellow-300 ": "text-amber-100"} >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to= "/products" className={({isActive})=> isActive ? "text-yellow-300 ": "text-amber-100"} >
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/blog" className={({isActive})=> isActive ? "text-yellow-300 ": "text-amber-100"} >
                            Blog
                        </NavLink>
                        </li>
                    <li>
                        <NavLink to = "/contact" className={({isActive})=> isActive ? "text-yellow-300 ": "text-amber-100"} >
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to = "/about" className={({isActive})=> isActive ? "text-yellow-300 ": "text-amber-100"} >
                            About
                        </NavLink>
                    </li>
                </ul>
                <button className='hidden md:block border-2 px-2 cursor-pointer'>Login</button>
                
                {/* mobile menu collapsed */}
                <div className={`md:hidden transition-all transform ease-linear duration-300 absolute w-full top-full left-0 bg-blue-400 ${isOpen ? "block" : "hidden"}`}>
                    <ul className='flex flex-col items-center py-4'>
                        <li>
                            <NavLink to = "/" onClick={handleLinkClick} className={({isActive})=> isActive ? "text-yellow-300 ": "text-amber-100"}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to= "/products" onClick={handleLinkClick} className={({isActive})=> isActive ? "text-yellow-300 ": "text-amber-100"}>
                                Products
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to = "/blog" onClick={handleLinkClick} className={({isActive})=> isActive ? "text-yellow-300 ": "text-amber-100"}>
                                Blog
                            </NavLink>
                            </li>
                        <li>
                            <NavLink to = "/contact" onClick={handleLinkClick} className={({isActive})=> isActive ? "text-yellow-300 ": "text-amber-100"}>
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to = "/about" onClick={handleLinkClick}className={({isActive})=> isActive ? "text-yellow-300 ": "text-amber-100"}>
                                About
                            </NavLink>
                        </li>
                        <li>
                           <button className='text-black'>Login</button> 
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;