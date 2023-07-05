"use client";

import Box from '@mui/material/Box';
import heroImg from '@/public/images/hero-oscar.png';
import Image from 'next/image';

export default function Hero() {
  return (
    <Box component="div" sx={{
      marginTop: "5em"
    }}>
      <div className="hero-img"></div>
    </Box>
  );
}