// ASSETS
import './ProjectItem.css'

function ProjectItem ({image, title, link, tags, children}) {

    return (
        <>
            <div className='itens d-flex jc-space-between'>
                <a href={link} className='project-link'>
                <div className='panel d-flex jc-center al-center fd-column secondary-color'>
                    <div className='image d-flex jc-center al-center'>
                        <img src={image} alt="projeto 1" />
                    </div>
                    <div className='tags d-flex'>
                        {tags.map((tag, index) => (
                            <p key={index} className='text-tag'>{tag}</p>
                        ))}
                    </div>
                </div></a>
                <div className='information d-flex fd-column'>
                    <h4>{title}</h4>
                    <p className='text-gray'>{children}</p>
                </div>
            </div>
        </>
    )
}

export default ProjectItem