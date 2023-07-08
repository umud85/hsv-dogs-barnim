import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface VorstandCardProps {
  name: string;
  imgUrl: string;
}

export default function VorstandCard({name, imgUrl}: VorstandCardProps) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 300 }}
        image={imgUrl}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Typography>Email: 
          <Button size="small">ps@dogs-barnim.de</Button>
        </Typography>
      </CardContent>
    </Card>
  );
}