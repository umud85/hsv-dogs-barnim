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
        <Typography variant="h5" component="div">
        </Typography>
        <Typography sx={{ mb: 1 }} color="text.secondary">
          VPG-Sport:
        </Typography>
        <Typography variant="body2">
          Di. u Do.: ab 18 Uhr
        </Typography>
        <Typography sx={{ mb: 1, mt: 1.5 }} color="text.secondary">
          Breitensport:
        </Typography>
        <Typography variant="body2">
          Mo. u Mi.: ab 19 Uhr
        </Typography>
      </CardContent>
    </Card>
  );
}
