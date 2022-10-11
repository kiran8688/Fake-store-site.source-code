import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';

import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Button, CardHeader, Grid, SvgIcon, } from '@mui/material';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import AlternateEmailTwoToneIcon from '@mui/icons-material/AlternateEmailTwoTone';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import HelpCenterTwoToneIcon from '@mui/icons-material/HelpCenterTwoTone';
import { Stack, IconButton } from '@mui/material'

import { Link } from 'react-router-dom';
import ProductsList from './Inbodycomp/ProductsList';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            {/* <Link color="inherit" href="https://github.com/kiran8688">
                Kiran8688
            </Link>{' '} */}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function Foot(props) {





    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '2vw'
            }}
        >

            <Box
                component="footer"
                sx={{
                    pb: 1,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: 'rgba(255,255,255, 1)',
                    color: 'rgba(0,0,0,0.6)',
                    height: '47vh '

                    //   backgroundColor: (theme) =>
                    //     theme.palette.mode === 'light'
                    //       ? theme.palette.grey[200]
                    //       : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="xl">
                    <Box component={'div'}>

                        <Box component={'div'} sx={{ display: 'flex', alignItems: 'center', borderBottom: 1, borderColor: 'divider', padding: 1, marginBottom: 5 }} >
                            <Typography variant='h5' component={'div'} sx={{ flexGrow: 1 }}>
                                Get connected with us on socila networks!
                            </Typography>

                            <Stack direction={'row'} spacing={1} alignItems={'center'}>
                                <IconButton href='https://www.facebook.com/SaiKiranKumar.S' size='large' color='inherit' sx={{ '&:hover': { color: 'rgb(25, 118, 210)' } }} onClick={() => { alert("You've been redirected to  Creator's  Facebook page") }} >
                                    <FacebookTwoToneIcon fontSize='large' />
                                </IconButton>
                                <IconButton href='https://twitter.com/ThatsKiran' size='large' color='inherit' sx={{ '&:hover': { color: 'rgb(2, 136, 209)' } }}  onClick={() => { alert("You've been redirected to  Creator's  Twitter page") }}>
                                    <TwitterIcon fontSize='large' />
                                </IconButton>
                                <IconButton href='https://www.youtube.com/channel/UCDicwab6NfwvD6rQQwVqYXA/featured' size='large' color='inherit' sx={{ '&:hover': { color: 'rgb(211, 47, 47)' } }}
                                onClick={() => { alert("You've been redirected to  Creator's  Youtube page") }} >
                                    <YouTubeIcon fontSize='large' />
                                </IconButton>
                                <IconButton href='https://www.linkedin.com/in/kirankumarsingaram/' size='large' color='inherit' sx={{ '&:hover': { color: 'rgb(2, 136, 209)' } }} onClick={() => { alert("You've been redirected to  Creator's  LinkedIn page") }} >
                                    <LinkedInIcon fontSize='large' />
                                </IconButton>
                                <IconButton href='https://www.instagram.com/thatskiran/' size='large' color='inherit' sx={{ '&:hover': { color: 'rgb(233, 30, 99)' } }} onClick={() => { alert("You've been redirected to  Creator's  Instagram page") }} >
                                    <InstagramIcon fontSize='large' />
                                </IconButton>

                            </Stack>


                            {/* <Button variant='text' sx={{ color: 'inherit', borderRadius: 15, padding: 0, marginX: 0.5 }} >
                                <FacebookTwoToneIcon sx={{ backgroundColor: 'rgb(25, 118, 210)', color: 'rgb(255,255,255)', borderRadius: 15, padding: 0, '&:hover': { color: 'rgb(25, 118, 210)', backgroundColor: 'rgba(255,255,255, 0.4)', } }} fontSize='large' />
                            </Button>

                            <Button variant='text' sx={{ borderRadius: 15, color: 'inherit', padding: 0, marginX: 0.5 }} >
                                <TwitterIcon fontSize='large' sx={{ borderRadius: 15, padding: 0, color: 'rgb(255,255,255)', backgroundColor: 'rgb(2, 136, 209)', '&:hover': { color: 'rgb(2, 136, 209)', backgroundColor: 'rgba(255,255,255, 0.4)' } }} />
                            </Button>

                            <Button variant='text' sx={{ borderRadius: 15, color: 'inherit', padding: 0, marginX: 0.5 }} >
                                <YouTubeIcon fontSize='large' sx={{ borderRadius: 15, padding: 1.8, color: 'rgb(255,255,255)', backgroundColor: 'rgb(211, 47, 47)', '&:hover': { color: 'rgb(211, 47, 47)', backgroundColor: 'rgba(255,255,255, 0.4)' } }} />
                            </Button>

                            <Button variant='text' sx={{ color: 'inherit', borderRadius: 15, padding: 0, marginX: 0.5 }} >
                                <LinkedInIcon fontSize='large' sx={{ borderRadius: 15, padding: 1.8, color: 'rgb(255,255,255)', backgroundColor: 'rgb(2, 136, 209)', '&:hover': { color: 'rgb(2, 136, 209)', backgroundColor: 'rgba(255,255,255, 0.4)', } }} />
                            </Button>

                            <Button variant='text' sx={{ color: 'inherit', borderRadius: 15, padding: 0, marginX: 0.5 }} >
                                <InstagramIcon sx={{ borderRadius: 15, padding: 1.8, color: 'rgb(255,255,255)', backgroundColor: 'rgb(233, 30, 99)', '&:hover': { color: 'rgb(233, 30, 99)', backgroundColor: 'rgba(255,255,255, 0.4)', } }} fontSize='large' />
                            </Button> */}

                        </Box>
                        <Box>
                            <Grid columnGap={28} sx={{ paddingY: 1, paddingX: 0 }} display={'flex'}  >
                                <Grid xl={12} >

                                    <Typography variant='h5' component={'h5'} sx={{ lineHeight: 0.2 }}>Fake-Shopping</Typography>
                                    <Typography variant='subtitle1' component={'div'} sx={{ color: 'rgb(255,0,0)' }}>___________ </Typography>

                                    <CardHeader subheader='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint officiis maxime dicta reiciendis ex expedita.' component={'article'} sx={{ padding: 0 }} >

                                    </CardHeader>

                                </Grid>

                                <Grid xl={12} >

                                    <Typography variant='h5' component={'h5'} sx={{ lineHeight: 0.2 }}>PRODUCTS</Typography>
                                    <Typography variant='subtitle1' component={'div'} sx={{ color: 'rgb(255,0,0)' }}>___________ </Typography>

                                    <Typography variant='subtitle1' component={'div'} sx={{ lineHeight: 2.5, fontSize: 17, whiteSpace: 'nowrap' }} >

                                        <Link className='anchver' to={'/products/electronics'}  component={Link} >Electronics</Link><br />
                                        <Link className='anchver' to={'/products/jewelery'} component={Link} >Jewelery</Link><br />
                                        <Link className='anchver' to={'/products/mens'} component={Link} >Men's clothings</Link><br />
                                        <Link className='anchver' to={'/products/womens'} component={Link} >Women's clothing</Link>
                                    </Typography>

                                </Grid>

                                <Grid xl={12}>

                                    <Typography variant='h5' component={'h5'} sx={{ lineHeight: 0.2, whiteSpace: 'nowrap' }}>USEFUL LINKS</Typography>
                                    <Typography variant='subtitle1' component={'div'} sx={{ color: 'rgb(255,0,0)' }}>___________ </Typography>

                                    <Typography variant='subtitle1' component={'div'} sx={{ lineHeight: 2.5, fontSize: 17, whiteSpace: 'nowrap' }}>
                                        <Link className='anchver' to={'/profile'} component={Link} >Your Account</Link><br />
                                        <Link className='anchver' to={'/login'} component={Link} >Login</Link><br />
                                        <Link className='anchver' to={'/signup'} component={Link} >Sign Up</Link><br />
                                        <Link className='anchver' href='#' component={'a'} > API</Link>
                                    </Typography>

                                </Grid>

                                <Grid xl={12} sx={{ whiteSpace: 'nowrap', alignItems: 'center' }}>

                                    <Typography variant='h5' component={'h5'} sx={{ lineHeight: 0.2, }}>CONTACT</Typography>
                                    <Typography variant='subtitle1' component={'div'} sx={{ color: 'rgb(255,0,0)' }}>___________ </Typography>

                                    <Typography variant='subtitle1' component={'div'} >
                                        <Button color='inherit' variant='text' size='l' disableElevation disableRipple startIcon={<HomeTwoToneIcon color='warning' fontSize='large' />} sx={{}}>
                                            Hyderabad, India</Button><br />
                                        <Button variant='text' color='inherit' size='l' disableElevation disableRipple startIcon={<AlternateEmailTwoToneIcon color='warning' fontSize='large' />} >
                                            skirankumar2015@gmail.com
                                        </Button ><br />
                                        <Button variant='text' color='inherit' size='l' disableElevation disableRipple startIcon={<LocalPhoneTwoToneIcon color='warning' fontSize='large' />}>
                                            +91 8099951768
                                        </Button><br />
                                        <Button variant='text' color='inherit' size='l' disableElevation disableRipple startIcon={<HelpCenterTwoToneIcon color='warning' fontSize='large' />} to={'/contact'} component={Link}>
                                            Contact Us
                                        </Button>
                                    </Typography>

                                </Grid>

                            </Grid>

                        </Box>
                    </Box>
                    <Typography variant="body1">
                        Created and Designed by KIRAN KUMAR SINGARAM
                    </Typography>
                    <Copyright />
                </Container>
            </Box>
        </Box>
    );
}
