// ASSETS
import './Footer.css'

function Footer({ darkMode, setDarkMode }) {
    return (
        <>
            <div className='mode d-flex jc-end al-center'>
                <p>modo:</p>
                <a onClick={() => setDarkMode(!darkMode)}>
                    <div className='circle'>
                </div></a>
            </div>
        </>
    )
}

export default Footer