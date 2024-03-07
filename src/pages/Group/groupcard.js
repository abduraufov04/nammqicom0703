import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function ImgMediaCard() {
  return (
    <Card style={{marginTop:'20px', marginRight:'20px', display:'inline-block'}} sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <Button color="inherit" style={{padding:'0'}} component={Link} to="#">          Guruh nomi
</Button>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent:'space-between'}}>
        <Button size="small">Ulashish</Button>
        <Button size="small">Qo'shilish</Button>
      </CardActions>
    </Card>
  );
}