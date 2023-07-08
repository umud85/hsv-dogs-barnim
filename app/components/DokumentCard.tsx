import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export default function AnfahrtCard() {
  return (
    <Card sx={{
      width: 200,
    }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <FilePresentIcon className='mr-1' />
          Dokumente
        </Typography>

        <Typography variant="body2">
          <PictureAsPdfIcon className='mr-1' />
          Platzhalter 1 
        </Typography>
        <Typography variant="body2">
          <PictureAsPdfIcon className='mr-1' />
          Platzhalter 2
        </Typography>
      </CardContent>
    </Card>
  );
}
