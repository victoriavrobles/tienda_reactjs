import React from 'react';
import { Box, Typography } from "@mui/material"


const Footer = () => {
    return(
        <Box sx={{width: '100%', background: "#5C6BC0", mt: "40px", p: "20px", position: 'fixed', bottom: '0'}}>
            <footer>
            <Typography variant="h6" noWrap sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: '#f8ffd7', textDecoration: 'none',}}>
            © TIENDA DE LIBROS 2022 · Todos los derechos reservados
          </Typography>
          </footer>
        </Box>
    )
}

export default Footer