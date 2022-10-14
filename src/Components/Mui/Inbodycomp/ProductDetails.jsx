import React from 'react'
import { Box, Paper, Container, Typography, Card, CardHeader, CardMedia, CardActions, CardActionArea, Rating, Button } from '@mui/material'
import { display } from '@mui/system'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
export default function ProductDetails(props) {


    var { id } = useParams()
    const navigate  =  useNavigate()


    const [productId, setProductId] = useState(id);
    // setProductId(id)
    //     // console.log(productId);
    const [pDetails, setPDetails] = useState({})

    const [counter, setCounter] = useState(0)

    const cartHandler=() =>{

        setCounter(counter+1)

        alert(counter+1+"  items added to your cart")
    }

    const navigateHandler = () =>{
        navigate (-1)
    }

    useEffect(() => {

        let pUrl = `https://fakestoreapi.com/products/${productId}`
        let pId = productId >= 0 ? 

        //     //  let cat = category != null ? category : ''
        axios
            .get(pUrl)
            .then((res) => {

                //       // var parameter = window.URL+`${param}`

                setPDetails(res.data)
                //       // console.log(setShop);
                
                console.log(pDetails);
                //       console.log(res.data);
                //       console.log(props.root);

            }): navigate('/*')
    }, [])


    return (
        <Container maxWidth={'xl'}>
            {/* <Container maxWidth={'xl'}> */}
            <Box sx={{}}>
                <Paper elevation={10} sx={{ height: '50vw', backgroundColor: 'rgba(145, 145, 145, 0.7)', borderRadius: '20px 20px 20px 20px', marginTop: 3 }}>
                    <Typography variant='h3' component={'h3'} sx={{ backgroundColor: 'rgba(143, 143, 143, 0.1)', color: 'rgba(255,255,255, 0.6)', textAlign: 'center', borderRadius: '20px 20px 0px 0px' }}>

                        {pDetails.category}

                    </Typography>

                    <Box sx={{ bgcolor: 'rgba(255,255,255,0)', height: '47vw', borderRadius: '15px !important', paddingY: 0, paddingX: '0px !imporant' }} >
                        <Card className='prodcont' sx={{ height: '47vw', backgroundColor: 'rgba(255,255,255, 0.7)', borderRadius: '20px 20px 20px 20px', overflowY: 'scroll', }}>
                            <Box  sx={{ marginRight: '0px !important', }}>

                                
                                    <Typography variant='h4' component={'div'}  sx={{marginX: 10, marginY:5 ,paddingX: 0, }}>
                                        {pDetails.title}<br/>
                                        {pDetails['rating'['rate']]}
                                    </Typography>
                                
                                <Typography variant='h6' component={'div'} sx={{ marginX: 10, marginBottom: 5 }}>
                                    {}
                                </Typography>
                                {/* <Rating value={3.5} precision={0.5} sx={{marginX: 9,}} readOnly /> */}
                                <CardMedia component={'img'}
                                    image={pDetails.image} sx={{ borderRadius: 5, marginY: 2, marginX: 'auto', height: '40vh', width: 'auto', cursor: '-webkit-grab', boxShadow: 24, alignItems: 'center' }} />
                                <Box sx={{ flex: '1 0 40vw', paddingY: 10 }}>




                                    <Typography variant='h4' component={'div'} sx={{marginX:10}} gutterBottom>
                                       $ {pDetails.price} USD
                                    </Typography>



                                    <Typography variant='h6' component={'div'} sx={{ marginX: 10, height: '15vw' }}>
                                        {pDetails.description}
                                    </Typography>

                                    <Box sx={{marginX:10, marginY: 2,  display: 'flex' ,justifyContent: 'space-evenly'}}>
                                    <Button variant='contained' color={'warning'} endIcon={<ShoppingCartTwoToneIcon />} sx={{ paddingX:15 }} onClick={() =>{cartHandler()}} >Add to</Button>
                                    <Button variant='contained' color={'info'} startIcon={<ArrowBackRoundedIcon />} sx={{ paddingX:16 }} onClick={() =>{navigateHandler()}} >Back</Button>
                                    </Box>

                                </Box>
                            </Box>
                        </Card>
                    </Box>
                    {/* </Container> */}
                </Paper>
            </Box>







        </Container>


    )
}
