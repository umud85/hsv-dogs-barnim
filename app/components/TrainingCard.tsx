import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DateRangeIcon from '@mui/icons-material/DateRange';

export default function KontaktCard() {
  return (
    <Card sx={{
      width: 200,
    }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        <DateRangeIcon className='mr-1' />
          Trainingszeiten
        </Typography>
        {/* <Typography sx={{ mb: 1 }} color="text.secondary">
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
        </Typography> */}
      </CardContent>
    </Card>
  );
}
