import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';


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
                    <li><Link to = "/" className='hover:text-amber-500 duration-300 ease-linear' >Home</Link></li>
                    <li><Link to= "/products" className='hover:text-amber-500 duration-300 ease-linear' >Products</Link></li>
                    <li><Link to = "/blog" className='hover:text-amber-500 duration-300 ease-linear' >Blog</Link></li>
                    <li><Link to = "/contact" className='hover:text-amber-500 duration-300 ease-linear' >Contact</Link></li>
                    <li><Link to = "/about" className='hover:text-amber-500 duration-300 ease-linear' >About</Link></li>
                </ul>
                <button className='hidden md:block border-2 px-2 cursor-pointer'>Login</button>
                {/* mobile menu collapsed */}
                <div className={`md:hidden transition-all transform ease-linear duration-300 absolute w-full top-full left-0 bg-amber-300 ${isOpen ? "block" : "hidden"}`}>
                    <ul className='flex flex-col items-center py-4'>
                        <li><Link to = "/" onClick={handleLinkClick}>Home</Link></li>
                        <li><Link to= "/products" onClick={handleLinkClick}>Products</Link></li>
                        <li><Link to = "/blog" onClick={handleLinkClick}>Blog</Link></li>
                        <li><Link to = "/contact" onClick={handleLinkClick}>Contact</Link></li>
                        <li><Link to = "/about" onClick={handleLinkClick}>About</Link></li>
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