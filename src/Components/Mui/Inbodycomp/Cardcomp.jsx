import * as React from 'react';
import { Button, Card, CardActionArea, CardContent, CardHeader, CardMedia, Rating, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';


export default function Cardcomp(props) {




// const [myState, setMyState] = useState('')
// // console.log(myState);
// const [proShop, setProShop] = useState({})
// useEffect(() =>{
//   setMyState(props.id)
//   // console.log(myState);

//   axios
//     .get(`https://fakestoreapi.com/products/${myState}`)
//     .then((res) => {
      
//       // var parameter = window.URL+`${param}`
      
//       setProShop(res.data)
// console.log(proShop);

// })

// })

//   var rating = props.ratingacc.toString()
//   // console.log(typeof(rating));
// var ratingSplit = rating.split('.')
// var pick = ratingSplit.length==undefined ? 0 :ratingSplit[1] 
// var strtonum = pick== undefined ? 0 : parseInt(pick)
// var mulnum =  strtonum > 0 ? (strtonum/10): parseFloat(0.1)
// // // var conv =  (strtonum===NaN) ? 0: strtonum
// console.log(mulnum);


  return (

    <CardActionArea sx={{ height: '12vw', width: '60vw', marginY: '1vw', marginX: '0px  !Important', borderRadius: 3 }}   face={props.key} to={`/products/${props.id}`} component={Link} >

      <Card elevation={3}  sx={{ height: '12vw', width: '60vw', margin: 0, backgroundColor: 'rgba(255,255,255, 0.3)', borderRadius: 3, display: '-webkit-inline-flex' }} >
        <CardMedia component={'img'} 
          src={props.img} sx={{ borderRadius: '8px 8px 8px 8px', margin: '16px 16px 16px 20px', height: 'auto', boxShadow: 24 ,width: 'auto', backgroundColor: 'rgba(255,255,255, 0.3)' }} />


        <CardContent sx={{marginRight:'0px !important',  width: '0px !important '}}>

          <CardHeader sx={{ width: '40vw', paddingTop: 1, paddingBottom: 1 }} title={props.name} subheader={props.cat} />
          
          <Typography variant='subtitle1' component={'div'} sx={{paddingX:1.5, whiteSpace: 'nowrap', color:'rgba(0,0,0,0.5)' }}> <Rating readOnly component={'div'} sx={{textAlign:'centre',}} value={props.ratingStar}   /> {props.ratingCount}k ratings </Typography>
          <Typography variant='h6' sx={{ marginX: 2 }} component={'Box'} >${props.price}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  )
}
