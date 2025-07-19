// ASSETS
import './Contact.css'

//Image
import Figma from '../../assets/figma.svg'
import Linkedin from '../../assets/linkedin.svg'
import Instagram from '../../assets/instagram.svg'
import Github from '../../assets/github.svg'
import Dribbble from '../../assets/dribbble.svg'
import Youtube from '../../assets/youtube.svg'

// COMPONENTS
import Title from '../Title/Title'

function Contact () {

    return (
        <>
            <Title title='Contato' position='center'/>
            <div className='networks d-flex jc-center'>
                <a href='/'><img src={Figma} alt="Figma" /></a>
                <a href='/'><img src={Linkedin} alt="Linkedin" /></a>
                <a href='/'><img src={Instagram} alt="Instagram" /></a>
                <a href='/'><img src={Github} alt="Github" /></a>
                <a href='/'><img src={Dribbble} alt="Dribbble" /></a>
                <a href='/'><img src={Youtube} alt="Youtube" /></a>
            </div>
        </>
    )
}

export default Contact