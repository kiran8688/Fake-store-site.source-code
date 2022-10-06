import React from 'react'
import { Box, Paper, Container, Button, Card, TextareaAutosize, Typography, TextField } from '@mui/material'

export default function ContactUs() {
    return (
        <Container maxWidth={'md'} >
            <Box>
                <Paper elevation={10} sx={{ height: '50vw', backgroundColor: 'rgba(145, 145, 145, 0.7)', borderRadius: '20px 20px 20px 20px',  marginTop:3  }} >
                    <Typography variant='h3' component={'h3'} sx={{ backgroundColor: 'rgba(143, 143, 143, 0.1)', color: 'rgba(255,255,255, 0.6)', textAlign: 'center', borderRadius: '20px 20px 0px 0px' }}> Contact Us</Typography>

                    <Card sx={{ height: '47vw', backgroundColor: 'rgba(255,255,255, 0.7)', borderRadius: '20px 20px 20px 20px', textAlign: 'center', }}>

                        <Container maxWidth={'sm'}>
                            <Box>
                            <Typography variant='h6' component={'div'} sx={{ marginY: 10 }}>

                                Got a  Question? We'd love to hear from you. Send us a message and we'll response as soon as possible.

                            </Typography>

                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { marginY: 3, },
                                }}
                                noValidate

                                autoComplete="off"
                            >


                                <TextField required fullWidth id="FullWidth" label="Name" type={'text'} variant="standard" sx={{ mardinY: 5 }} />


                                <TextField id="fullWidth" required fullWidth label="Email" type={'email'} variant="standard" sx={{ marginY: 15 }} />

                            </Box>
                            
                                <TextareaAutosize
                                    maxRows={200}
                                    label='Your Question'
                                    aria-label="maximum height"
                                    placeholder=" Message(optional) Minimum 20 words"
                                    
                                    style={{ height: '10vw' ,width: '29vw', marginTop: '3vw', backgroundColor:'rgba(255, 255, 255, 0)', fontSize: 20}}
                                />


                                    </Box>
                                <Button variant='contained' sx={{marginY: 10}} fullWidth > Submit</Button>
                        </Container>

                    </Card>
                </Paper>
            </Box>

        </Container>
    )
}
