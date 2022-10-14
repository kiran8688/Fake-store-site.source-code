import Bar from './Components/Mui/Bar';
import './App.css';
import { Box, Container, Slide } from '@mui/material';
import ProductsList from './Components/Mui/Inbodycomp/ProductsList';
import ProductDetails from './Components/Mui/Inbodycomp/ProductDetails';
import Welcome from './Components/Mui/Inbodycomp/Welcome';
import Profile from './Components/Mui/Inbodycomp/Profile';
import ContactUs from './Components/Mui/Inbodycomp/ContactUs';
import Login from './Components/Mui/Inbodycomp/Login';
import SignUp from './Components/Mui/Inbodycomp/SignUp';
import Foot from './Components/Mui/Foot';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Notfound from './Components/Mui/Inbodycomp/Notfound';


export default function App() {
  return (
    <div className="App">

      <Box id='contain'>
        <Box id='bgcol'>

          <Bar />
          <Routes>


          <Route path='/' element={<Welcome/> }/>  
          </Routes>
          
          <Container maxWidth="xl" >

            <Routes>
            {/* <Route path='/products' element = {<ProductsList/>}/> */}
            <Route path='/products' element={<ProductsList/>}>
              <Route path='all' index element={<ProductsList/>}/>
            <Route path='electronics' element={<ProductsList/>}/>
            <Route path='jewelery' element={<ProductsList/>}/>
            <Route path='mens' element={<ProductsList/>}/>
            <Route path='womens' element={<ProductsList/>}/>
            <Route path='*' element={<Notfound/>}/>
            </Route>
            <Route path = '/products/:id' element={<ProductDetails/>}/>
            </Routes>
            
            
          <Routes>
            {/* <Route path='/categories' element={<ProductsList/>}/> */}
            {/* <Route path='/product' element={ <ProductDetails /> }/> */}
            <Route path='/profile' element={ <Profile/> }/>
            <Route path='/contact' element={ <ContactUs/> }/>
          </Routes>
          </Container>
          <Routes>

          <Route path='/login' element={ <Login/>} />
          <Route path='/signup' element={<SignUp/> }/>
          </Routes>
            <Foot/>
        </Box>
      </Box>
    </div>
  );
}





  //     <Grid container spacing={5}>
  // <Grid xs={3} position={'relative'}>
  //       <Catcomplist />
  // </Grid>
  // <Grid xs={9}>
  //       <Paper>
  //         <Body />
  //       </Paper>
  // </Grid>
  // </Grid>



    //   <div className="navbar">
    //     <div className="nav-name">

    //   <div>hello world</div>
    //     </div>
    //     <div className="nav-links">
    //       <a href="#" className="nav-item">Home</a>
    //       <a href="#" className="nav-item">Products</a>
    //       <a href="#" className="nav-item">categories </a>
    //       <a href="#" className="nav-item">Profile</a>
    //       <a href="#" className="nav-item">Contact Us</a>
    //     </div>
    //   </div>
    //   <div className="body">

    //   </div>
