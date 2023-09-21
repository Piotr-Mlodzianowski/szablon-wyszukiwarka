import React from 'react';
import Menu from './menu/menu';
import Opening from "./opening/opening";
import About from "./about/about";
import Example from "./example/example";
import Footer from "./footer/footer";

const Homepage = () => {
    return (
        <>
            <Menu/>
            <Opening/>
            <About/>
            <Example/>
            <Footer/>
        </>
    );
};

export default Homepage;
