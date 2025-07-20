// ASSETS
import './Header.css'
import Logo from '../../assets/logo.svg'

function Header () {

    return (
        <header>
            <img src={ Logo } alt="Logo DNC" />
            <div className='d-flex'>
                <div className=' menu d-flex jc-space-between fd-column'>
                    <a className='menu-button' href="#home"><h2 className="writing-vertical">home</h2></a>
                    <a className='menu-button' href="#projetos"><h2 className="writing-vertical">projetos</h2></a>
                    <a className='menu-button' href="#sobre-mim"><h2 className="writing-vertical">sobre mim</h2></a>
                    <a className='menu-button' href="#contato"><h2 className="writing-vertical">contato</h2></a>
                </div>
                <h3>front-end.web(developer)</h3>

            </div>
        </header>
    )
}

export default Header