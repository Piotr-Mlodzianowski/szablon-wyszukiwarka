import React, {useEffect, useState} from 'react';
import Menu from './menu/menu';
import Opening from "./opening/opening";
import About from "./about/about";
import Example from "./example/example";
import Footer from "./footer/footer";
import BurgerMenu from "./burgerMenu/burgerMenu";

const Homepage = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const windowSizeHandler = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", windowSizeHandler);

        return () => {
            window.removeEventListener("resize", windowSizeHandler);
        };
    }, [])

    return (
        <>
            {windowWidth <= 800 ?
                <BurgerMenu startRoute={"#opening"} aboutRoute={"#about"} exampleRoute={"#example"}
                            searchRoute={"searchApp"}/> :
                <Menu startRoute={"#opening"} aboutRoute={"#about"} exampleRoute={"#example"}
                      searchRoute={"searchApp"}/>}

            <Opening/>
            <About/>
            <Example/>
            <Footer/>
        </>
    );
};

export default Homepage;


/*
<Menu startRoute={"#opening"} aboutRoute={"#about"} exampleRoute={"#example"} searchRoute={"searchApp"}/>*/
