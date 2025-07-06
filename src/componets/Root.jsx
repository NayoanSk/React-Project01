import React from 'react';
import Navbar from './Navbar';
import { HashRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Products from './Products';
import Blog from './Blog';
import Contact from './Contact';
import About from './About';
import Footer from './Footer';

const Root = () => {
    return (
        <div>
            <HashRouter>
                <Navbar></Navbar>
                <div className='container mx-auto px-4'></div>
                <Routes>
                    <Route path="/" element = {<HomePage/>}></Route>
                    <Route path="/products" element = {<Products/>}></Route>
                    <Route path='/blog' element = {<Blog/>}></Route>
                    <Route path='/contact' element = {<Contact/>}></Route>
                    <Route path='/about' element = {<About/>}></Route>
                </Routes>
                <Footer></Footer>
            </HashRouter>
            
        </div>
    );
};

export default Root;