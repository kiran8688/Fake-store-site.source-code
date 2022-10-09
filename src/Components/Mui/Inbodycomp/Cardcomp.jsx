import * as React from 'react';
import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Rating } from '@mui/material';
import Typography from '@mui/material/Typography';


export default function Cardcomp(props) {


//   var rating = props.ratingacc.toString()
//   // console.log(typeof(rating));
// var ratingSplit = rating.split('.')
// var pick = ratingSplit.length==undefined ? 0 :ratingSplit[1] 
// var strtonum = pick== undefined ? 0 : parseInt(pick)
// // var conv =  (strtonum===NaN) ? 0: strtonum
// console.log(strtonum);


  return (

    <CardActionArea sx={{ height: '12vw', width: '60vw', marginY: '1vw', marginX: '0px  !Important', borderRadius: 3 }} >

      <Card elevation={3} sx={{ height: '12vw', width: '60vw', margin: 0, backgroundColor: 'rgba(255,255,255, 0.3)', borderRadius: 3, display: '-webkit-inline-flex' }} >
        <CardMedia component={'img'}
          src={props.img} sx={{ borderRadius: '10px 10px 10px 10px', margin: 2, height: 'auto', width: 'auto', }} />


        <CardContent sx={{marginRight:'0px !important', width: '0px !important '}}>

          <CardHeader sx={{ width: '45vw', paddingY: 1, paddingRight: '0px !Important' }} title={props.name} subheader='hello sub' />
          <Typography variant='h5' sx={{ marginX: 2 }} component={'span'} >${props.price}</Typography><br />
          <Typography variant='subtitle1' component={'span'}> <Rating readOnly value={props.ratingStar} precision={props.ratingacc} /> </Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  )
}
