import React from 'react';
import Menu from './menu/menu';
import Opening from "./opening/opening";
import About from "./about/about";
import Example from "./example/example";

const Homepage = () => {
    return (
        <>
            <Menu/>
            <Opening/>
            <About/>
            <Example/>
        </>
    );
};

export default Homepage;
