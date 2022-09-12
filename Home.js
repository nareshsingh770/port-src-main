import React from 'react';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Services from './components/home/Services';
import Skills from './components/home/Skills';
import Contact from './components/home/Contact';
// import AxiosTest from './components/home/AxiosTest';

const Home = (props) => {


    return (
        <>
            <Hero />
            <About />
            <Services />
            <Skills />
            <Contact />
            {/* <AxiosTest /> */}
        </>
    )
}

export default Home
