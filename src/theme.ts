'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
 
  },
});

export default theme;
