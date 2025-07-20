// ASSETS
import './AboutMe.css'

// COMPONENTS
import Title from '../Title/Title'
import ExperienceBox from '../ExperienceBox/ExperienceBox'

function AboutMe () {

// Links
    const instagram_link = 'https://www.instagram.com/nataliarovaris/?igsh=ZnFua3Ima2NocnRr&utm_source=q#';
    const github_link = 'https://github.com/NataliaRovaris';
    const email_link = 'mailto:nataliarovaris@hotmail.com';

    return (
        <>
            <Title title='Sobre mim' position='left'/>
            <div className='about d-flex fd-column'>
                <p className='name'>Natália Winter Rovaris</p>
                <p className='description'>
                    Sou Engenheira de Software formada pela UFRGS, com formação técnica 
                    em Eletrônica pelo Liberato, e experiência em desenvolvimento de 
                    sistemas em C++, Python e SQL, além de projetos com JavaScript e 
                    Node.js. Ao longo da minha trajetória, tive contato com diferentes 
                    áreas da tecnologia, desde sistemas embarcados até soluções web e ERP. 
                    Venho me dedicando aos estudos na área de desenvolvimento web, e 
                    atualmente estou aprofundando esses conhecimentos por meio do curso de 
                    Engenharia de Software na DNC, com foco em lógica de programação, front-end 
                    e back-end. No meu trabalho atual, atuo na criação e manutenção de dashboards, 
                    solucionando problemas e desenvolvendo visualizações que auxiliam a análise 
                    de dados e a tomada de decisões dentro da empresa.
                </p>
                <div className='network d-flex'>
                    <a href={instagram_link}><p>INSTAGRAM</p></a>
                    <a href={github_link}><p>GITHUB</p></a>
                    <a href={email_link}><p>EMAIL</p></a>
                </div>
            </div>
            <div className='experiences d-flex fd-column'>
                <div className='experiences-l1 d-flex'>
                    <ExperienceBox showImage={true} title='Dashboard e Dados'>
                        Melhor experiência do usuário.
                    </ExperienceBox>
                    <ExperienceBox showImage={true} title='HTML & CSS'>
                        Responsividade e alta performance.
                    </ExperienceBox>
                    <ExperienceBox showImage={true} title='React.js'>
                        Sistemas integrados com Node.js.
                    </ExperienceBox>
                    <ExperienceBox showImage={true} title='Metodologias Ágeis'>
                        Organização e flexibilidade.
                    </ExperienceBox>
                </div>
                <div className='experiences-l2 d-flex'>
                    <ExperienceBox showImage={false} title='Tenho experiência com'>
                        C, C++ (Qt), Python <br />
                        JavaScript, TypeScript, React, Node.js <br />
                        SQL (MySQL) <br />
                        Git/Github <br />
                        Scrum, Agile methodologies
                    </ExperienceBox>
                    <ExperienceBox showImage={false} title='Tenho anos de experiência em'>
                        Desenvolvimento em C++ <br />
                        SQL (MySQL) <br />
                        Git/Github <br />
                        Dashboards (Power BI, Excel, Python) <br />
                        Gestão de projetos ágeis com Scrum
                    </ExperienceBox>
                    <ExperienceBox showImage={false} title='Atuo e estudo sobre'>
                        JavaScript moderno e TypeScript <br />
                        Frameworks React e Node.js <br />
                        Princípios Clean Code e SOLID <br />
                        Design responsivo (HTML, CSS) <br />
                        SQL (MySQL)
                    </ExperienceBox>
                </div>
            </div>
        </>
    )
}

export default AboutMe