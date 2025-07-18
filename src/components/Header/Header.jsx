// ASSETS
import './Header.css'
import Logo from '../../assets/Logo.svg'

function Header () {

    return (
        <header>
            <img src={ Logo } alt="Logo DNC" />
            <div className='d-flex'>
                <div className=' menu d-flex jc-space-between fd-column'>
                    <h2 className='writing-vertical'>home</h2>
                    <h2 className='writing-vertical'>projetos</h2>
                    <h2 className='writing-vertical'>sobre mim</h2>
                    <h2 className='writing-vertical'>contato</h2>
                </div>
                <h3>front-end.web(developer)</h3>

            </div>
        </header>
    )
}

export default Header