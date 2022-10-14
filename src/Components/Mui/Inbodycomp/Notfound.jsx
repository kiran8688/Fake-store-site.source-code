import React from 'react'
import { Box, Paper, Container, Button, Card, Typography, } from '@mui/material'
import { HomeTwoTone } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const Notfound = () => {
  return (

    <Container maxWidth={'xl'}>
        <Box sx={{ height: '100vh', margin:50, color: 'white',}}>
            <Typography  variant='h4' component={'div'}  >
                Wow Such An Empty 
                <Button endIcon={<HomeTwoTone/>} sx={{marginX:10}} variant='contained' elevation={5} color={'warning'} to={'/'} component={Link} >
                    Back to Home
                </Button>
            </Typography>
        </Box>
    </Container>

  )
}

export default Notfound;
    // <Container maxWidth={'xl'}>
    //         <Box>
    //             <Paper elevation={10} sx={{ height: '50vw', backgroundColor: 'rgba(145, 145, 145, 0.7)', borderRadius: '20px 20px 20px 20px', marginTop:3 }}>

    //                 <Typography variant='h3' component={'h3'} sx={{ backgroundColor: 'rgba(143, 143, 143, 0.1)', color: 'rgba(255,255,255, 0.6)', textAlign: 'center', borderRadius: '20px 20px 0px 0px' }}>Your Profile</Typography>
    //                 <Card elevation={0} sx={{ height: '47vw', backgroundColor: 'rgba(255,255,255, 0.6)', borderRadius: '20px 20px 20px 20px' }}>
    //                     <Box sx={{ display: 'flex' }}  >
    //                         <Box sx={{ width: '18vw' }}>

    //                             <CardMedia image={'https://source.unsplash.com/random'} sx={{ height: '250px', width: '250px', marginX: 4, marginY: 3, borderRadius: 10, boxShadow: 24 }} />
    //                         </Box>
    //                         <Box sx={{ height: '2vh', width: '59vw', marginTop: 13, paddingRight: 3 }} >

    //                             <Typography variant='h3' component='div' gutterBottom> Kiran</Typography>
    //                             <Typography variant='body1' component={'div'} >
    //                                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquam illo nemo blanditiis obcaecati reprehenderit unde architecto dignissimos, voluptatem cum fugit necessitatibus corporis numquam quos accusamus repudiandae voluptatibus itaque eius fugiat provident sint ea quam. Magnam maxime delectus nesciunt optio?
    //                             </Typography>

    //                         </Box>

    //                     </Box>


    //                 </Card>

    //             </Paper>
    //         </Box>

    //     </Container>