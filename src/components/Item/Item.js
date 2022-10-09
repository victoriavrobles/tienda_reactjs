import './style.css'
import { Link } from 'react-router-dom'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

export default function Item ({item}) {
    return (
        // <div className="items">
        // <div className="item">
        //     <Typography variant='h5' align='center'>{item.title}</Typography>
        //     <img style={{height: "200px", width: "auto"}} src={item.image} alt= {item.title}></img>
        //     <p style={{fontStyle: "italic"}}>{item.description}</p>
        //     <Typography variant='body1' align='center'>Precio: ${item.price}</Typography>
        //     <Button color="warning" variant='outlined' fullWidth><Link to={`/item/${item.id}`}>Ver más</Link></Button>
        // </div>
        // </div>

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
      <CardActions>
        <Button size="small" color="primary">
        <Link to={`/item/${item.id}`}>Ver más</Link>
        </Button>
      </CardActions>
    </Card>

    )
}