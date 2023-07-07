"use client";

import Box from '@mui/material/Box';
import Hero from '@/app/components/Hero';
import TrainingCard from '@/app/components/TrainingCard';
import AnfahrtCard from '@/app/components/AnfahrtCard';

export default function Homepage() {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: {xs: "column", lg: "row"},
      alignItems: 'center',
      justifyContent: 'center',
      gap: { xs: "2rem", lg: "1rem" },
    }}>
      <Hero />
      <Box sx={{
        display: "flex",
        flexDirection: { xs: "row", lg: "column" },
        gap: '1rem',
      }}>
        <TrainingCard />
        <AnfahrtCard />
      </Box>
    </Box>
  );
}