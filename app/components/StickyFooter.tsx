"use client";

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      HSV Dogs Barnim e.V.
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function StickyFooter() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '15vh',
        }}
      >
        <CssBaseline />
      
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm" sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: "1em"
            }}
          >
            <Copyright />
            <Typography variant="body2" color="text.secondary" sx={{
              marginLeft: 'auto',
            }}>
              Impressum
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <Link href="/datenschutz">Datenschutz</Link>
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}