import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import { AppBar, Toolbar, styled, Typography, Button} from "@mui/material";

const StyleToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent: "space-between"
})


const NavBar = () => {

    return (
        <AppBar elevation={0} position="sticky" sx={{ background: "#C5E1A5", mb: "30px"}}>
            <StyleToolbar>
            <Typography variant="h6" noWrap component="a" href="/" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: '#26418f', textDecoration: 'none',}}
          >
            LIBROS
          </Typography>
                <Typography><Link to="/">Inicio</Link></Typography>
                <Typography><Link to="/productos/ficcion">Ficción</Link></Typography>
                <Typography><Link to="/productos/arte">Arte</Link></Typography>
            <div>
            <Button variant="outlined" sx={{m: 2}}>Ingresar</Button>
            <CartWidget/>
            </div>
            </StyleToolbar>
        </AppBar>
    )
};

export default NavBar;