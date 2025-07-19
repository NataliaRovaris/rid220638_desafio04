// ASSETS
import './Projects.css'

// COMPONENTS
import Title from '../Title/Title'
import ProjectItem from '../ProjectItem/ProjectItem'

function Projects () {

    return (
        <>
            <Title title='Projetos' position='right'/>
            <div className=' projects d-grid'>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
                <ProjectItem/>
            </div>
        </>
    )
}

export default Projects