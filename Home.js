import React from 'react';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Services from './components/home/Services';
import Skills from './components/home/Skills';
import Contact from './components/home/Contact';

const Home = (props) => {


    return (
        <>
            <Hero />
            <About />
            <Services />
            <Skills />
            <Contact />
        </>
    )
}

export default Home
