// ASSETS
import './Menu.css'

function Menu () {

    return (
        <div className=' menu d-flex fd-column al-center'>
            <div className='menu-buttons d-flex fd-column jc-center al-center'>
                <a className='menu-button' href="#home"><h2 className="writing-vertical">home</h2></a>
                <a className='menu-button' href="#projetos"><h2 className="writing-vertical">projetos</h2></a>
                <a className='menu-button' href="#sobre-mim"><h2 className="writing-vertical">sobre mim</h2></a>
                <a className='menu-button' href="#contato"><h2 className="writing-vertical">contato</h2></a>
            </div>
        </div>
    )
}

export default Menu