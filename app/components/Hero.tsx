"use client";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Hero() {
  return (
    <Box sx={{
      display: { xs: "block", xl: "inline-block" },
      marginTop: "5em",
    }}>
      <Box component="div">
        <div className="hero-img"></div>
      </Box>
      <Container maxWidth="sm" className='mt-4'>
        <Typography variant="h6" color="inherit" gutterBottom>
            Willkommen auf der Homepage vom {'"Hundesportverein DOGS-Barnim 09 e.V."'}.
          </Typography>
        <Typography variant="body2">
          Wir betreiben sowohl IGP-Sport (VPG: Vielseitigkeitsprüfung für Gebrauchshunde), als auch Breitensport (Agility/ Dogdancing/ "Tonnenhopsen") mit unseren Hunden und freuen uns über jeden, der auch Interesse an Hundesport hat. Dabei ist es egal, welcher Rasse der Hund angehört oder wie alt Hund und Herrchen sind. Im Vordergrund steht der Spaß an der Teamarbeit mit dem Vierbeiner.
          Außerdem bieten wir seit August 2011 eine Hundeschule an, in der alle Hundebesitzer, die kein Interesse an einem Vereinsbeitritt haben, herzlich willkommen sind.
          Unser Trainingsplatz befindet sich in der Coppistraße 11 - 15 in 16227 Eberswalde.
          Falls Du neugierig geworden bist, schau doch einfach während der Trainingszeiten mal vorbei und mache Dir Dein eigenes Bild! Wir freuen uns darauf!
        </Typography>
      </Container>
      <Box>
      </Box>
    </Box>
  );
}