import * as React from 'react';
import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Rating } from '@mui/material';
import Typography from '@mui/material/Typography';


export default function Cardcomp() {
  return (

    <CardActionArea sx={{ height: '9vw', width: '60vw', marginY: '1vw', marginX: '0px  !Important', borderRadius: 3 }} >

      <Card elevation={3} sx={{ height: '9vw', width: '60vw', margin: 0, backgroundColor: 'rgba(255,255,255, 0.3)', borderRadius: 3, display: '-webkit-inline-flex' }} >
        <CardMedia component={'img'}
          image="https://source.unsplash.com/random" sx={{ borderRadius: '10px 0px 0px 10px', margin: 0, height: '170px', width: '250px', }} />


        <CardContent sx={{marginRight:'0px !important', width: '0px !important '}}>

          <CardHeader sx={{ width: '45vw', paddingY: 1, paddingRight: '0px !Important' }} title='Hello er[[pgdfgsf]dg[]erergerg erg ergrgfdg sdg sdfg title' subheader='hello sub' />
          <Typography variant='h5' sx={{ marginX: 2 }} component={'span'} >$600</Typography><br />
          <Typography variant='subtitle1' component={'span'}> <Rating readOnly value={3.5} /> </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  )
}
