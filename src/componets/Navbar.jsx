import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <nav className='bg-green-400 text-amber-100 py-5 md:py-6'>
            <div className='container mx-auto flex justify-between items-center'>
                <h3>My Logo</h3>
                {/* Mobile Menu Button */}
                <div>
                    <button onClick={toggleMenu}>
                        {isOpen ? <AiOutlineClose /> : <FaBars />}
                        
                        
                    </button>
                </div>
                <ul className='flex space-x-4 md:space-x-6'>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>About</li>
                </ul>
                <button>Login</button>
            </div>
        </nav>
    );
};

export default Navbar;