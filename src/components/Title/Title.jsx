// ASSETS
import './Title.css'

function Title ({title, position, ...props}) {

    return (
        <>
            <div className={
                `title d-flex fd-column 
                ${position === 'right' ? 'al-end' : 
                    position === 'center' ? 'al-center' : ''}`
                } {...props}>
                <h1>{title}</h1>
                {
                    position != 'center' &&
                    <div className='retangle'></div>
                }
            </div>
        
        </>
    )
}

export default Title