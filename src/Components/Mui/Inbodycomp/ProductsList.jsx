import * as React from 'react';
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Cardcomp from './Cardcomp';
import { Container, TabScrollButton } from '@mui/material';
import axios, { Axios } from 'axios';
import { json, Link } from 'react-router-dom';
import Electronics from './Electronics';
import Jewelery from './Jewelary';
import Mens from './Mens';
import Womens from './Womens';
import Bar from '../Bar';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function ProductsList() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  // -----------------------------------------------API call (axios)------------------------------------------------------------------------------------



  const [shop, setShop] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {

      setShop(res.data)

      // console.log(res.data);

    })
    console.log(setShop);
  }, [])
  const axiosHandler = (category) =>{
    console.log(category);
}

  //   const [mystate, setMyState] = useState([])
  //   const [anError, setAnError] = useState('')

  //   const getApi= async () =>{ 

  //       const res = await axios.get(`https://fakestoreapi.com//products`)
  //       .then(res=> res.json())
  //       .then(json=> console.log(json))
  //       setMyState(res.data)

  // };
  // useEffect(() =>{
  //   getApi()
  // }, [])

  return (
    <Container maxWidth={'xl'}>

      <Box
        sx={{ flexGrow: 1, bgcolor: 'rgba(255,255,255,0.8)', display: 'flex', height: '50vw', borderRadius: '15px !important', paddingY: 0, marginTop: 3, paddingX: '0px !imporant' }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"



          sx={{ borderRight: 1, borderColor: 'divider', display: 'flex', width: '15vw', paddingY: 8, whiteSpace: 'nowrap', paddingX: 0 }}
        >
          <Tab sx={{ paddingY: 5, marginX: 0, fontSize: 18 }} label="Electronics" to={'electronics'} component={Link} onClick={()=> {axiosHandler('electronics')}} {...a11yProps(0)} />
          <Tab sx={{ paddingY: 5, marginX: 0, fontSize: 18 }} label="Jewelery" to={'jewelary'} component={Link} onClick={()=> {axiosHandler('jewelary')}} {...a11yProps(1)} />
          <Tab sx={{ paddingY: 5, marginX: 0, fontSize: 18 }} label="Men's clothing" to={'mens'} component={Link} onClick={()=> {axiosHandler('mens')}} {...a11yProps(2)} />
          <Tab sx={{ paddingY: 5, marginX: 0, fontSize: 18 }} label="Women's clothing" to={'womens'} component={Link} onClick={()=> {axiosHandler('womens')}} {...a11yProps(3)} />
        </Tabs>
        <Container className='cardcont' maxWidth={'lg'} sx={{ marginRight: '0px !important', width: '67vw !important ' }}>

          {/* <TabScrollButton direction='right' orientation='vertical'/> */}
        </Container>
      </Box>
    </Container>
  );
}
