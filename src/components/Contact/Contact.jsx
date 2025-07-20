// ASSETS
import './Contact.css'

//Image
import Figma from '../../assets/figma.svg'
import Linkedin from '../../assets/linkedin.svg'
import Instagram from '../../assets/instagram.svg'
import Github from '../../assets/github.svg'

// COMPONENTS
import Title from '../Title/Title'

function Contact () {

// Links
    const figma_link = 'https://www.figma.com/files/team/779013698209655383/user/779013587239752146?fuid=779013587239752146';
    const linkedin_link = 'https://www.linkedin.com/in/natalia-rovaris/';
    const instagram_link = 'https://www.instagram.com/nataliarovaris/?igsh=ZnFua3Ima2NocnRr&utm_source=q#';
    const github_link = 'https://github.com/NataliaRovaris';

    return (
        <>
            <Title title='Contato' position='center'/>
            <div className='networks d-flex jc-center'>
                <a href={figma_link}><img src={Figma} alt="Figma" /></a>
                <a href={linkedin_link}><img src={Linkedin} alt="Linkedin" /></a>
                <a href={instagram_link}><img src={Instagram} alt="Instagram" /></a>
                <a href={github_link}><img src={Github} alt="Github" /></a>
            </div>
        </>
    )
}

export default Contact