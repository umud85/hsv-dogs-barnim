"use client";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';

function VeranstaltungenPage() {
  return (
    <Box>
      <Container maxWidth="md">
        <Typography variant="h5" gutterBottom>
          Veranstaltungen
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="table">
            <TableBody>
              <TableRow>
                <TableCell>14.04.2023</TableCell>
                <TableCell>
                  Frühjahresprüfung BH/IGP
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>22.07.2023</TableCell>
                <TableCell>
                  Drei-Länder-Pokalkampf <br />
                  Pokalkampf in B+C mit befreundeten Vereinen aus 
                  Mecklenburg-Vorpommern und Sachsen-Anhalt
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  )
}

export default VeranstaltungenPage;