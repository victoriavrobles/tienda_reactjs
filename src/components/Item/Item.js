import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

export default function Item ({item}) {
    return (
        <Card sx={{width: 350, m: '10px'}}>
      <CardActionArea component={Link} to={{ pathname: "/item/" + item.id }}>
        <CardMedia
          component="img"
          height="450"
          width="200"
          image={item.image}
          alt={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">{item.description}</Typography>
          <Typography variant="body2" color="text.secondary">Precio: ${item.price}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center"}}>
        <Button variant="outlined" size="large" color="secondary">
        <Link to={`/item/${item.id}`}>Ver más</Link>
        </Button>
      </CardActions>
    </Card>

    )
}