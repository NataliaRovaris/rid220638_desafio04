// ASSETS
import './ExperienceBox.css'

function ExperienceBox ({showImage, image, title, children}) {

    return (
        <>
            <div className='box d-flex al-center'>
                {
                    showImage &&
                    <img src={image}/>
                }
                <div className='division'></div>
                <div className={`box-description d-flex fd-column ${!showImage ? 'space-up' : ''}`}>
                    <h4>{title}</h4>
                    <p className={`${showImage ? 'p-small' : 'p-medium'}`}>{children}</p>
                </div>
            </div>
        </>
    )
}

export default ExperienceBox