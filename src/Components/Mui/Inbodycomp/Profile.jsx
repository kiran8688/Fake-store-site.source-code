import React from 'react'
import { Paper, Box, Container, Card, CardHeader, CardMedia, Typography, Icon, SvgIcon } from '@mui/material'
import ThumbUpTwoToneIcon from '@mui/icons-material/ThumbUpTwoTone';
import ThumbDownTwoToneIcon from '@mui/icons-material/ThumbDownTwoTone';
import HistoryTwoToneIcon from '@mui/icons-material/HistoryTwoTone';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 5 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function Profile() {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth={'xl'}>
            <Box>
                <Paper elevation={10} sx={{ height: '50vw', backgroundColor: 'rgba(145, 145, 145, 0.7)', borderRadius: '20px 20px 20px 20px', marginTop:3 }}>

                    <Typography variant='h3' component={'h3'} sx={{ backgroundColor: 'rgba(143, 143, 143, 0.1)', color: 'rgba(255,255,255, 0.6)', textAlign: 'center', borderRadius: '20px 20px 0px 0px' }}>Your Profile</Typography>
                    <Card elevation={0} sx={{ height: '47vw', backgroundColor: 'rgba(255,255,255, 0.6)', borderRadius: '20px 20px 20px 20px' }}>
                        <Box sx={{ display: 'flex' }}  >
                            <Box sx={{ width: '18vw' }}>

                                <CardMedia image={'https://source.unsplash.com/random'} sx={{ height: '250px', width: '250px', marginX: 4, marginY: 3, borderRadius: 10, boxShadow: 24 }} />
                            </Box>
                            <Box sx={{ height: '2vh', width: '59vw', marginTop: 13, paddingRight: 3 }} >

                                <Typography variant='h3' component='div' gutterBottom> Kiran</Typography>
                                <Typography variant='body1' component={'div'} >
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est aliquam illo nemo blanditiis obcaecati reprehenderit unde architecto dignissimos, voluptatem cum fugit necessitatibus corporis numquam quos accusamus repudiandae voluptatibus itaque eius fugiat provident sint ea quam. Magnam maxime delectus nesciunt optio?
                                </Typography>

                            </Box>

                        </Box>
                        <Box sx={{ dispaly: 'flex', flex: 'wrap', marginX: 10 }}>

                            <Box sx={{ display: 'flex' }} >

                                <Card elevation={0} variant='outlined' component={'div'} sx={{ width: '10vw', borderRadius: 5, backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', marginTop: 3, marginRight: 12 }}>
                                    <SvgIcon fontSize='large' sx={{ paddingY: 3, paddingLeft: 2 }} >
                                        <ThumbUpTwoToneIcon color='success' fontSize='large' />
                                    </SvgIcon>
                                    <CardHeader title=' 3 Likes' subheader='total up votes' />

                                </Card>

                                <Card elevation={0} variant='outlined' component={'div'} sx={{ width: 'auto', borderRadius: 5, backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', marginTop: 3, marginRight: 12, whiteSpace: 'nowrap' }}>
                                    <SvgIcon fontSize='large' sx={{ paddingY: 3, paddingLeft: 2 }} >
                                        <ThumbDownTwoToneIcon color='error' fontSize='large' />
                                    </SvgIcon>
                                    <CardHeader title=' 1 Dislikes' subheader='total down votes' />

                                </Card>

                                <Card elevation={0} variant='outlined' component={'div'} sx={{ width: 'auto ', borderRadius: 5, backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', marginTop: 3, }}>
                                    <SvgIcon fontSize='large' sx={{ paddingY: 3, paddingLeft: 2 }} >
                                        <HistoryTwoToneIcon color='warning' fontSize='large' />
                                    </SvgIcon>
                                    <CardHeader title=' 1 day ago' subheader='last activity' />

                                </Card>
                            </Box>
                        </Box>

                        <Box sx={{ width: '100%', marginTop: 2 }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{marginLeft:3}}>
                                    <Tab label="Recent Posts" {...a11yProps(0)} />
                                    <Tab label="Recent Comments" {...a11yProps(1)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea totam, quaerat nam, asperiores veritatis sit exercitationem illo ab voluptatum doloremque mollitia modi dolores libero sapiente culpa in numquam reprehenderit? Facilis nihil temporibus, minima nobis vitae ipsum porro voluptate sequi! Labore perferendis vero totam quia quibusdam error dolores asperiores perspiciatis. Veniam suscipit dolorem doloremque, temporibus molestias id nostrum accusamus tempora impedit.
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus distinctio eos tempore. Accusamus excepturi esse autem blanditiis expedita temporibus aperiam quidem tempora ex laborum! Harum obcaecati unde qui aspernatur modi ut ullam consectetur recusandae quidem, neque culpa, eveniet est optio!
                            </TabPanel>
                            
                        </Box>

                    </Card>

                </Paper>
            </Box>

        </Container>
    )
}
