// ASSETS
import './Header.css'
import Logo from '../../assets/logo.svg'

function Header () {

    return (
        <header>
            <img src={ Logo } alt="Logo DNC" />
            <h3>front-end.web(developer)</h3>
        </header>
    )
}

export default Header