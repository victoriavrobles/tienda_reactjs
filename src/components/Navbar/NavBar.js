import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import { AppBar, Toolbar, styled, Typography, IconButton, Button} from "@mui/material";

// const NavBar = () => {
//     return (
//         <div className='navbar-container'>
//             <div>
//             <Link to="/"> <img style={{ width: 60, height: 60 }} src={logo} alt="logo"></img> </Link>
//             </div>
//             <div>
//                 <ul>
//                     <li><Link to="/">Inicio</Link></li>
//                     <li><Link to="/productos/ficcion">Ficción</Link></li>
//                     <li><Link to="/productos/arte">Arte</Link></li>
//                 </ul>
//             </div>
//             <CartWidget/>
//             <div>
//                 <button>Ingresar</button>
//             </div>
//         </div>

//     )
// };

// export default NavBar;

const StyleToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent: "space-between"
})


const NavBar = () => {

    return (
        <AppBar elevation={0} position="sticky" sx={{ background: "#C5E1A5", mb: 2}}>
            <StyleToolbar>
            <Typography variant="h6" noWrap component="a" href="/" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: '#26418f', textDecoration: 'none',}}
          >
            LIBROS
          </Typography>
                <Typography><Link to="/">Inicio</Link></Typography>
                <Typography><Link to="/productos/ficcion">Ficción</Link></Typography>
                <Typography><Link to="/productos/arte">Arte</Link></Typography>
                <Typography><Link to="/contacto">Contacto</Link></Typography>
            <div>
            <Button variant="outlined" sx={{m: 2}}>Ingresar</Button>
            <CartWidget/>
            </div>
            </StyleToolbar>
        </AppBar>
    )
};

export default NavBar;