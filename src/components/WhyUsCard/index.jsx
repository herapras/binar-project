import * as React from 'react';
import { Box, Paper } from '@mui/material';
import './style.css'

export default function WhyUsCard (){
    return (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 268,
              height: 196,
            },
          }}
        >
          <Paper variant="outlined">
            <div class = 'whyus--container'>
              <div class = 'whyus--icon'>
                <img src = 'src/content/icon_complete-1.png' />
              </div>
              <h1 class = 'whyus--title'>Mobil Lengkap</h1>
              <p class = 'whyus--des'>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>
          </Paper>
          <Paper variant="outlined" />
          <Paper variant="outlined"/>
          <Paper variant="outlined"/>
        </Box>
      )
}