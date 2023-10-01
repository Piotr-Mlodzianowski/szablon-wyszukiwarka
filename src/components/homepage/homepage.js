import React from 'react';
import Menu from './menu/menu';
import Opening from "./opening/opening";
import About from "./about/about";
import Example from "./example/example";
import Footer from "./footer/footer";

const Homepage = () => {
    return (
        <>
            <Menu startRoute={"#opening"} aboutRoute={"#about"} exampleRoute={"#example"} searchRoute={"searchApp"}/>
            <Opening/>
            <About/>
            <Example/>
            <Footer/>
        </>
    );
};

export default Homepage;
