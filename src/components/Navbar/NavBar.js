import logo from '../../logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import './style.css'
import {Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='navbar-container'>
            <div>
            <Link to="/"> <img style={{ width: 60, height: 60 }} src={logo} alt="logo"></img> </Link>
            </div>
            <div>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/productos/ficcion">Ficción</Link></li>
                    <li><Link to="/productos/arte">Arte</Link></li>
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