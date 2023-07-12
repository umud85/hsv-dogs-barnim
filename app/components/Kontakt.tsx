"use client";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function Kontakt() {
  return (
    <Container maxWidth="md">
      <Typography
        sx={{ textAlign: "center", marginTop: "3em" }}
        variant="h4"
        component="h1"
        gutterBottom
      >
        Kontakt
      </Typography>
      <Container
        component={Paper}
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1em",
          marginTop: "2em",
          padding: "2em"
        }}
      >
        <Typography variant="body2">
          *Pflichtfelder
        </Typography>
        <form>
          <TextField
            fullWidth
            required
            id="outlined-basic"
            label="Vorname"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Nachname"
            variant="outlined"
          />
          <TextField
            required
            fullWidth
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            required
            fullWidth
            id="outlined-basic"
            label="Telefon"
            variant="outlined"
          />
          <TextField
            required
            fullWidth
            multiline
            minRows={3}
            id="outlined-basic"
            label="Nachricht"
            variant="outlined"
          />
          <Button variant="outlined">Senden</Button>
        </form>
      </Container>
    </Container>
  )
}

export default Kontakt