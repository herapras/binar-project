import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth= '1440'>
        <Box sx={{ bgcolor: '#0D28A6', height: '25vh' }} >
            <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <Link to = '/carlist'>
                    <button class = 'hero--button'>Mulai Sewa Mobil</button>
            </Link>
        </Box>
      </Container>
    </React.Fragment>
  );
}