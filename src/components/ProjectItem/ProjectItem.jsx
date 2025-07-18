// ASSETS
import './ProjectItem.css'

function ProjectItem () {

    return (
        <>
            <div className='itens d-flex jc-space-between'>
                <div className='panel d-flex jc-center al-center fd-column'>
                    <div className='image d-flex jc-center al-center'>
                        <img src="../../../public/project.jpg" alt="projeto 1" />
                    </div>
                    <div className='tags d-flex'>
                        <p className='text-tag'>javascript</p>
                        <p className='text-tag'>html</p>
                        <p className='text-tag'>css</p>
                    </div>
                </div>
                <div className='information d-flex fd-column'>
                    <h4>BeDigital</h4>
                    <p className='text-gray'>Lorem ipsum dolor sit amet, consectetur adipi.
                    Aenean et sem venenatis quam feugiat lla augue sap
                    ien, facilisis blandit purus id, facilisis tinci.

                    Lorem ipsum dolor sit amet, consectetur adipi.
                    Aenean et sem venenatis quam feugiat lla augue sap
                    ien, facilisis blandit purus id, facilisis tinci.</p>
                </div>
            </div>
        </>
    )
}

export default ProjectItem