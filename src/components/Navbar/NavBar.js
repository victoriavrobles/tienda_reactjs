import logo from '../../logo.svg';
import './style.css'

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <img src={logo} alt="logo"></img>
            </div>
            <div>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
            <div>
                <button>Ingresar</button>
            </div>
        </div>

    )
};

export default NavBar;