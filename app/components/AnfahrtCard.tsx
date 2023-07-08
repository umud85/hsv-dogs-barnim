import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function AnfahrtCard() {
  return (
    <Card sx={{
      width: 200,
    }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <LocationOnIcon className='mr-1' />
          Ort
        </Typography>

        <Typography variant="body2">
          Coppistr. 11-15 
        </Typography>
        <Typography variant="body2">
          16225 Eberswalde
        </Typography>
      </CardContent>
    </Card>
  );
}
