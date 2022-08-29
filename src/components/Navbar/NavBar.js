import logo from '../../logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import './style.css'


const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div>
                <img style={{ width: 60, height: 60 }} src={logo} alt="logo"></img>
            </div>
            <div>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
            <CartWidget/>
            <div>
                <button>Ingresar</button>
            </div>
        </div>

    )
};

export default NavBar;