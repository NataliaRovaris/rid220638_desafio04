import Header from "../components/Header/Header"
import Projects from "../components/Projects/Projects"
import AboutMe from "../components/AboutMe/AboutMe"
import Contact from "../components/Contact/Contact"

function Home() {
    return (
        <>
            <section id="home"><Header /></section>
            <section id="projetos"><Projects /></section>
            <section id="sobre-mim"><AboutMe /></section>
            <section id="contato"><Contact /></section>
        </>
    )
}

export default Home