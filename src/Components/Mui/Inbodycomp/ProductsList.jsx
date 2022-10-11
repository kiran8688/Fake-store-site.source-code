import * as React from 'react';
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Cardcomp from './Cardcomp';
import { Container, TabScrollButton } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Foot from '../Foot';
import { useRef } from 'react';
// import Electronics from './Electronics';
// import Jewelery from './Jewelary';
// import Mens from './Mens';
// import Womens from './Womens';
// import Bar from '../Bar';

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

  
  const [param, setParam] = useState('products/')
  
  const [prevurl, setPrevUrl] = useState(``)
  
  const [Shop, setShop] = useState([]);
  
  useEffect(() => {
    //  let cat = category != null ? category : ''
    var purl = `https://fakestoreapi.com/${prevurl}`
    // console.log(purl);
    var url = `https://fakestoreapi.com/${param}`
    axios
    .get(url)
    .then((res) => {
      
      // var parameter = window.URL+`${param}`
      
      setShop(res.data)
      console.log(Shop);
      
      // console.log(res.data);
    })
      return  () =>{

        // var purl = `https://fakestoreapi.com/${prevurl}`
        // console.log(purl);
        // var url = `https://fakestoreapi.com/${param}`
        axios
        .get(url)
        .then((res) => {
    
        // setShop(res.data)

        })
      }
      
  }, [param, prevurl])
  
  
  
//   const productHandler = (i) =>{
//     // console.log(e.target.value)
//     //  var proUrl= u+i
//     // setParam('products/'+i)
//     // setPrevUrl(u)
//     // console.log('products/'+i);
  
// }

const catHandler = (catUrl) =>{
  setParam(catUrl)
  setPrevUrl(catUrl)
  // console.log(prevurl);
}




  var cardrender 
  
  cardrender= Shop.map((product, index) =>{

    var rating = parseFloat(Shop[index].rating.rate)
    var confloat = (rating).toString()
    var ratingSplit = confloat.split('')

    var strtoNum = (parseFloat(ratingSplit[ratingSplit.length-1])/2)

  
  return(
    <Cardcomp 
    key= {Shop[index]}
    id = {product.id}
    parameter={param}
    name = {Shop[index].title}
    price = {Shop[index].price}
    details = {Shop[index].description}
    cat = {Shop[index].category}
    img = {Shop[index].image}
    ratingStar = {Shop[index].rating.rate}
    ratingacc = {strtoNum}
    ratingCount = {Shop[index].rating.count}
    // Click={()=>{ productHandler(product.id)}}
    
    />
    )
    
  })
  
  
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
           

          <Tab sx={{ paddingY: 5, marginX: 0, fontSize: 18 }} label="All Products" onClick={()=> {catHandler('products/')}} to={'/products/all'} component={Link} {...a11yProps(0)}  />
          <Tab sx={{ paddingY: 5, marginX: 0, fontSize: 18 }} label="Electronics" onClick={()=> {catHandler('products/category/electronics')}} to={'/products/electronics'} component={Link} {...a11yProps(1)}  />
          <Tab sx={{ paddingY: 5, marginX: 0, fontSize: 18 }} label="Jewelery" onClick={()=> {catHandler('products/category/jewelery')}} to={'/products/jewelery'} component={Link} {...a11yProps(2)} />
          <Tab sx={{ paddingY: 5, marginX: 0, fontSize: 18 }} label="Men's clothing" onClick={()=> {catHandler("products/category/men's%20clothing")}} to={'/products/mens'} component={Link} {...a11yProps(3)} />
          <Tab sx={{ paddingY: 5, marginX: 0, fontSize: 18 }} label="Women's clothing" onClick={()=> {catHandler("products/category/women's%20clothing")}} to={'/products/womens'} component={Link} {...a11yProps(4)} />
          
        </Tabs>
        <Container className='cardcont' maxWidth={'lg'} sx={{ marginRight: '0px !important', width: '67vw !important ' }}>

          {/* <TabScrollButton direction='right' orientation='vertical'/> */}
          {/* <Cardcomp imf={shop[0].image}/> */}
          {/* <Cardcomp photo={Shop[0].image}/> */}
          {cardrender}
        </Container>
      </Box>
    </Container>
  );
}

// to={'jewelary'} component={Link} 
// to={'mens'} component={Link} 
// to={'womens'} component={Link} 



//   const axiosHandler = (category) =>{
  //     console.log(category);
  //     setParam(category)
  //     console.log(setParam);
  // }
  
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
      



      // var pick = ratingSplit.length==undefined ? 0 :ratingSplit[1] 
      // var strtonum = pick== undefined ? 0 : parseInt(pick)
      // var mulnum =  strtonum > 0 ? (strtonum /10): 0.1
      // console.log(mulnum);
      // // var conv =  (strtonum===NaN) ? 0: strtonum
      
      // to={'electronics'} component={Link} 