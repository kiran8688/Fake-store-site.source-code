import React from 'react'
import { Box, Paper, Container, Typography, Card, CardHeader, CardMedia, CardActions, CardActionArea, Rating, Button } from '@mui/material'
import { display } from '@mui/system'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function ProductDetails(props) {


    var { id } = useParams()


    const [productId, setProductId] = useState(id);
    // setProductId(id)
    //     // console.log(productId);
    const [pDetails, setPDetails] = useState({})

    useEffect(() => {
        let pUrl = `https://fakestoreapi.com/products/${productId}`
        //     //  let cat = category != null ? category : ''
        axios
            .get(pUrl)
            .then((res) => {

                //       // var parameter = window.URL+`${param}`

                setPDetails(res.data)
                //   console.log(pDetails);
                //       // console.log(setShop);

                //       console.log(res.data);
                //       console.log(props.root);

            })
    }, [productId, pDetails])


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

                                <CardHeader title='Hello Title' sx={{ paddingX: 0, }} />
                                <Rating value={3.5} precision={0.5} readOnly />
                                <Typography variant='h6' component={'div'} sx={{ marginBottom: 5 }}>
                                    100
                                </Typography>
                                <CardMedia component={'img'}
                                    image={pDetails.image} sx={{ borderRadius: 5, marginY: 2, marginX: 'auto', height: '40vh', width: 'auto', cursor: '-webkit-grab', boxShadow: 24, alignItems: 'center' }} />
                                <Box sx={{ flex: '1 0 40vw', paddingY: 10 }}>




                                    <Typography variant='h4' component={'div'} gutterBottom>
                                        $600
                                    </Typography>



                                    <Typography variant='h6' component={'div'} sx={{ marginRight: 6, height: '17.5vw' }}>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quis natus, ratione soluta voluptates ducimus officia quidem neque eligendi sit numquam sint, suscipit ullam eum quas amet tempora possimus recusandae? Accusantium harum soluta cupiditate et accusamus nihil voluptate architecto illum voluptatem expedita odio, amet molestias laudantium consectetur asperiores eaque aspernatur perspiciatis magnam facere ratione exercitationem optio. Provident unde porro deserunt!
                                    </Typography>

                                    <Button variant='contained' color={'warning'} endIcon={<ShoppingCartTwoToneIcon />} sx={{ paddingX: 11, marginY: 1, marginRight: 15 }} >Add to</Button>
                                    <Button variant='contained' color={'info'} startIcon={<ArrowBackRoundedIcon />} sx={{ paddingX: 12, marginY: 1, marginLeft: 15 }} >Back</Button>

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
