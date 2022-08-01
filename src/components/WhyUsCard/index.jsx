import * as React from 'react';
import { Box, Paper } from '@mui/material';
import './style.css'

export default function WhyUsCard (){
    return (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            '& > :not(style)': {
              m: 2,
              width: 268,
              height: 196,
            },
          }}
        >
          <Paper variant="outlined">
            <div class = 'whyus--container'>
              <img src = 'src/content/icon_complete-1.png' class = 'whyus--icon'/>
              <p class = 'whyus--title'>Mobil Lengkap</p>
              <p class = 'whyus--desc'>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
            </div>
          </Paper>
          <Paper variant="outlined" >
            <div class = 'whyus--container'>
              <img src = 'src/content/icon_price-1.png' class = 'whyus--icon'/>
              <p class = 'whyus--title'>Harga Murah</p>
              <p class = 'whyus--desc'>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
            </div>
          </Paper>
          <Paper variant="outlined">
            <div class = 'whyus--container'>
              <img src = 'src/content/icon_24hrs-1.png' class = 'whyus--icon'/>
              <p class = 'whyus--title'>Layanan 24 Jam</p>
              <p class = 'whyus--desc'>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
            </div>
          </Paper>
          <Paper variant="outlined">
            <div class = 'whyus--container'>
              <img src = 'src/content/icon_professional-1.png' class = 'whyus--icon'/>
              <p class = 'whyus--title'>Sopir Profesional</p>
              <p class = 'whyus--desc'>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
            </div>
          </Paper>
        </Box>
      )
}