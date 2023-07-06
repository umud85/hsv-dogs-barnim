"use client";

import Box from '@mui/material/Box';
import Hero from '@/app/components/Hero';
import TrainingCard from '@/app/components/TrainingCard';
import AnfahrtCard from '@/app/components/AnfahrtCard';

export default function Homepage() {
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
    }}>
      <Hero />
      <Box sx={{ display: { xs: "none", lg: "inline-block" }, }}>
        <TrainingCard />
        <AnfahrtCard />
      </Box>
    </Box>
  );
}