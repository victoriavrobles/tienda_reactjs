import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import { AppBar, Toolbar, styled, Typography} from "@mui/material";

const StyleToolbar = styled(Toolbar) ({
    display: "flex",
    justifyContent: "space-between"
})


const NavBar = () => {

    return (
        <AppBar elevation={0} position="sticky" sx={{ background: "#C5E1A5", mb: "20px"}}>
            <StyleToolbar>
            <Typography variant="h6" noWrap sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: '#26418f', textDecoration: 'none',}}
        >
        <Link to="/">TIENDA DE LIBROS</Link>
        </Typography>
                <Typography><Link to="/">Inicio</Link></Typography>
                <Typography><Link to="/productos/ficcion">Ficción</Link></Typography>
                <Typography><Link to="/productos/arte">Arte</Link></Typography>
                <Typography><Link to="/productos/literatura">Literatura</Link></Typography>
                <Typography><Link to="/productos/autoayuda">Autoayuda</Link></Typography>
            <CartWidget/>
            </StyleToolbar>
        </AppBar>
    )
};

export default NavBar;