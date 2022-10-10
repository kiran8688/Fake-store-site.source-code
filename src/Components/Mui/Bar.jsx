import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import { HomeTwoTone, Margin } from "@mui/icons-material";
// import CategoryTwoToneIcon from "@mui/icons-material/CategoryTwoTone";
// import ProductionQuantityLimitsTwoToneIcon from "@mui/icons-material/ProductionQuantityLimitsTwoTone";
// import AccountCircleTwoToneIcon from "@mui/icons-material/AccountCircleTwoTone";
// import ContactSupportTwoToneIcon from "@mui/icons-material/ContactSupportTwoTone";
import { Container } from "@mui/system";
// import { responsiveFontSizes } from "@mui/material";
// import VpnKeyTwoToneIcon from '@mui/icons-material/VpnKeyTwoTone';
// import SensorOccupiedTwoToneIcon from '@mui/icons-material/SensorOccupiedTwoTone';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link} from "react-router-dom";
// import { Paper } from "@mui/material";
// import { makeStyles } from "@mui/material";
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// const useStyles = makeStyles()

export default function Bar(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ flexGrow: 1  }}>
      <AppBar
        elevation={1}
        position="static"
        sx={{ backgroundColor: "rgb(255, 255, 255);", color: "rgba(0, 0, 0, 0.6);", padding: 0 }}
      >
        <Container maxWidth={"xl"} center>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1, marginTop: 2 }}>Fake-Shopping Site</Typography>
            <Tabs value={value} onChange={handleChange} sx={{ backgroundColor: 'rgba(255, 255, 255, 0)', marginTop: 2, color: 'rgba(128, 128, 128)' }} centered>

              <Tab label="Home" sx={{  '&:hover': { color: 'rgb(0,0,0)' }, paddingX: 3, borderRadius: 5 }}  to={'/'} component={Link} /> 

              <Tab label="Products" sx={{  '&:hover': { color: 'rgb(0,0,0)' }, paddingX: 3, borderRadius: 5 }}  to={'/products/all'}  component={Link }  /> 

              <Tab label="Profile" sx={{  '&:hover': { color: 'rgb(0,0,0)' }, paddingX: 3, borderRadius: 5 }} to={'/profile'} component={Link } /> 

              <Tab label="Contact Us" sx={{  '&:hover': { color: 'rgb(0,0,0)' }, paddingX: 3, borderRadius: 5 }} to={'/contact'} component={Link} /> 

              <Tab label="Login" sx={{  '&:hover': { color: 'rgb(0,0,0)' }, paddingX: 3, borderRadius: 5 }}  to={'/login'} component={Link } /> 

              <Tab label="Sign Up" sx={{  '&:hover': { color: 'rgb(0,0,0)' }, paddingX: 3, borderRadius: 5 }} to={'/signup'} component={Link } /> 
            </Tabs>
          </Toolbar>
        </Container>
      </AppBar>
      {/* <Outlet/> */}
    </Box>
  );
}




// {/* <Button color="inherit" sx={{ '&:hover': { backgroundColor: "#c6b279", color: "#830a2c" } }} startIcon={<HomeTwoTone />}  > Home </Button>
// <Button color="inherit" sx={{ '&:hover': { backgroundColor: "#c6b279", color: "#830a2c" } }} startIcon={<CategoryTwoToneIcon />}> Category </Button>
// <Button color="inherit" sx={{ '&:hover': { backgroundColor: "#c6b279", color: "#830a2c" } }} startIcon={<ProductionQuantityLimitsTwoToneIcon />} >Products </Button>
// <Button color="inherit" sx={{ '&:hover': { backgroundColor: "#c6b279", color: "#830a2c" } }} startIcon={<AccountCircleTwoToneIcon />}>Profile </Button>
// <Button color="inherit" sx={{ '&:hover': { backgroundColor: "#c6b279", color: "#830a2c" } }} startIcon={<ContactSupportTwoToneIcon />}>Contact Us </Button>
// <Button color="inherit" sx={{ '&:hover': { backgroundColor: "#c6b279", color: "#830a2c" } }} startIcon={<VpnKeyTwoToneIcon />}>login </Button>
// <Button color="inherit" sx={{ '&:hover': { backgroundColor: "#c6b279", color: "#830a2c" } }} startIcon={<SensorOccupiedTwoToneIcon />}>sign up </Button> */}