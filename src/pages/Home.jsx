import { useState, useEffect } from 'react';

// COMPONENTS
import Menu from '../components/Menu/Menu';
import Header from "../components/Header/Header"
import Projects from "../components/Projects/Projects"
import AboutMe from "../components/AboutMe/AboutMe"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"

function Home() {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved === 'true';
    });

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
        const elements_secondary_color = document.querySelectorAll('.secondary-color');
            elements_secondary_color.forEach((el) => {
            el.classList.toggle('dark-mode', darkMode);
        });
        
        const elements_text_gray = document.querySelectorAll('.text-gray');
            elements_text_gray.forEach((el) => {
            el.classList.toggle('dark-mode', darkMode);
        });
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);


    return (
        <>
            <div className='d-flex'>
                <div className='ps-fixed'>
                    <Menu />
                </div>
                <div>
                    <section id="home"><Header /></section>
                    <section id="projetos"><Projects /></section>
                    <section id="sobre-mim"><AboutMe /></section>
                    <section id="contato"><Contact /></section>
                    <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>
                </div>
            </div>
        </>
    )
}

export default Home