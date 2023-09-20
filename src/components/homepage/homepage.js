import React from 'react';
import Menu from './menu/menu';
import Opening from "./opening/opening";
import About from "./about/about";

const Homepage = () => {
	return (
		<>
			<Menu />
			<Opening/>
			<About/>
		</>
	);
};

export default Homepage;
