// ASSETS
import './AboutMe.css'

// COMPONENTS
import Title from '../Title/Title'
import ExperienceBox from '../ExperienceBox/ExperienceBox'

function AboutMe () {

    return (
        <>
            <Title title='Sobre mim' position='left'/>
            <div className='about d-flex fd-column'>
                <p className='name'>Natália Winter Rovaris</p>
                <p className='description'>
                    I'm more than one in love for Front-End. My experience with interface design turn me one extremely criterious with
    alignments, margins, colors and a lot other resorces in CSS. Today I work with projects in a whole world. Codifiding in my
    home office, in a quiet interior of São Paulo, Brazil.
                </p>
                <div className='network d-flex'>
                    <p>INSTAGRAM</p>
                    <p>GITHUB</p>
                    <p>EMAIL</p>
                </div>
            </div>
            <div className='experiences d-flex fd-column'>
                <div className='experiences-l1 d-flex'>
                    <ExperienceBox showImage={true} title='html & css'>
                        Responsive websites with fast loading.
                    </ExperienceBox>
                    <ExperienceBox showImage={true} title='html & css'>
                        Responsive websites with fast loading.
                    </ExperienceBox>
                    <ExperienceBox showImage={true} title='html & css'>
                        Responsive websites with fast loading.
                    </ExperienceBox>
                    <ExperienceBox showImage={true} title='html & css'>
                        Responsive websites with fast loading.
                    </ExperienceBox>
                </div>
                <div className='experiences-l2 d-flex'>
                    <ExperienceBox showImage={false} title='Ive had experiences with'>
                        Firebase Database
                        MySQL Database <br />
                        GIT, GitHub, Bitbucket <br />
                        Coding PHP <br />
                        Figma, Adobe XD, Sketch <br />
                        CSS Preprocessors <br />
                        Digital Marketing <br />
                        Coding Python (Django)
                    </ExperienceBox>
                    <ExperienceBox showImage={false} title='I have years of experience with'>
                        Firebase Database
                        MySQL Database <br />
                        GIT, GitHub, Bitbucket <br />
                        Coding PHP <br />
                        Figma, Adobe XD, Sketch <br />
                        CSS Preprocessors <br />
                        Digital Marketing <br />
                        Coding Python (Django)
                    </ExperienceBox>
                    <ExperienceBox showImage={false} title='I work and study about'>
                        Firebase Database
                        MySQL Database <br />
                        GIT, GitHub, Bitbucket <br />
                        Coding PHP <br />
                        Figma, Adobe XD, Sketch <br />
                        CSS Preprocessors <br />
                        Digital Marketing <br />
                        Coding Python (Django)
                    </ExperienceBox>
                </div>
            </div>
        </>
    )
}

export default AboutMe