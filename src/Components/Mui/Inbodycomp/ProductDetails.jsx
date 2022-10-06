import React from 'react'
import { Box, Paper, Container, Typography, Card, CardHeader, CardMedia, CardActions, CardActionArea, Rating, Button } from '@mui/material'
import { display } from '@mui/system'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
export default function ProductDetails(props) {
    return (
        <Container maxWidth={'xl'}>
            <Box>
                <Paper elevation={10} sx={{ height: '50vw', backgroundColor: 'rgba(145, 145, 145, 0.7)', borderRadius: '20px 20px 20px 20px', marginTop:3 }}>
                    <Typography variant='h3' component={'h3'} sx={{ backgroundColor: 'rgba(143, 143, 143, 0.1)', color: 'rgba(255,255,255, 0.6)', textAlign: 'center', borderRadius: '20px 20px 0px 0px' }}> Electronics</Typography>

                    <Card sx={{ height: '47vw', backgroundColor: 'rgba(255,255,255, 0.7)', borderRadius: '20px 20px 20px 20px', display: 'flex'  }}>
                        <CardMedia component={'img'}
                            image="https://source.unsplash.com/random" sx={{ borderRadius: 5, marginY: 22, marginX: 5, height: '50vh', width: '30vw', cursor:'-webkit-grab', boxShadow: 24 }} />
                        <Box sx={{ flex: '1 0 40vw', paddingY: 10}}>

                            <CardHeader title='Hello Title' sx={{ paddingX:0 }} />

                                <Rating value={3.5} precision={0.5}  readOnly/> 
                            <Typography variant='h6' component={'div'} sx={{marginBottom:5}}>
                                100
                            </Typography>


                            <Typography variant='h4' component={'div'} gutterBottom>
                                $600
                            </Typography>



                            <Typography variant='h6' component={'div'} sx={{marginRight: 6, height:'17.5vw'}}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores quis natus, ratione soluta voluptates ducimus officia quidem neque eligendi sit numquam sint, suscipit ullam eum quas amet tempora possimus recusandae? Accusantium harum soluta cupiditate et accusamus nihil voluptate architecto illum voluptatem expedita odio, amet molestias laudantium consectetur asperiores eaque aspernatur perspiciatis magnam facere ratione exercitationem optio. Provident unde porro deserunt!
                            </Typography>

                    <Button variant='contained' color={'warning'} endIcon={<ShoppingCartTwoToneIcon/>} sx={{paddingX: 11 , marginY: 1, marginRight: 15 }} >Add to</Button>       
                    <Button variant='contained' color={'info'} startIcon={<ArrowBackRoundedIcon/>}  sx={{paddingX: 12, marginY:1, marginLeft: 15 }} >Back</Button> 

                        </Box>
                    </Card>
                </Paper>
            </Box>

        </Container>
    )
}
