import React from 'react'
import { Container, Typography, Button } from '@mui/material'
import ShoppingBasketTwoTone from '@mui/icons-material/ShoppingBasketTwoTone'
import { Link } from 'react-router-dom'
import ProductsList from './ProductsList'
import axios from 'axios'

export default function Welcome(props) {

  // const getApi = () =>{
    // axios.get('https://fakestoreapi.com/products').then((res)=>{
      // console.log(res.data);
    // })
  // }

  return (
    <Container sx={{ color: 'rgb(255,255,255)', textAlign: 'center', height: '82vh' }} >
            <Typography variant='h3' component={'div'} sx={{ margin: '10vh ' }} >
              Welcome to Fake-Shopping 
            </Typography>
            <Typography variant='h6' component={'div'}  sx={{margin:'18vh 5vh', lineHeight: 2.5}} >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis maiores velit aliquid? Laborum tempora nihil consequatur perferendis voluptatem placeat nesciunt doloribus, et nemo incidunt, ipsum recusandae possimus obcaecati repellendus ipsa expedita repudiandae ut voluptas sed beatae? Dolorum quo cum officiis, suscipit quod a doloribus saepe, itaque aut, est dolores nostrum! Molestias tempora iusto corrupti, molestiae soluta magnam blanditiis modi autem dolores laboriosam adipisci? Aut maxime eum, laborum exercitationem nulla commodi.
            </Typography>
            <Button to={'/categories'} component={Link}  variant='contained' elevation={0} endIcon={<ShoppingBasketTwoTone/>} color='error' sx={{ paddingX: 2.5, color: 'rgb(255,255,255)', outlineColor: 'white', outlineStyle: 'ridge' }}>
              Shop Now
            </Button>
          </Container>

  )
}

// onClick={()=>{getApi()}}