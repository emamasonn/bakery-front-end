import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Untitled from './Untitled.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import RoomIcon from '@material-ui/icons/Room';

const useStyle = makeStyles({
    direction: {
                background: "#263238",
                color: "#fff",
                borderTop: "#263238 50px solid"},
    whatsApp: {
                position:"fixed",
                width:"60px",
                height:"60px",
                bottom:"40px",
                right:"40px",
                backgroundColor:"#25d366",
                color:"black",
                borderRadius:"50px",
                textAlign: "center"},
    icon: {
                fontSize: 12},
    iconWhatsApp: {
                fontSize: 25},
    img: {
                borderRadius: "50%",
                width:"200px", 
                height:"200px"},
    Title: {
                margin:"0px 0px 15px 22px"}
      }
  );
function Footer() {
    const classes = useStyle();
    return (
<div className={classes.direction}>
     <Grid container>
        <Grid item xs={12} sm={4} md={4}>
            <Box textAlign="center" ml={1} mb={5} >
                <img src={Untitled} alt="Untitled" className={classes.img}/>
            </Box>
        </Grid>                
        <Grid item xs={12} sm={4} md={4}>
            <Box mb={5}>
                <Typography className={classes.Title} variant="body2">MEDIOS DE PAGO</Typography>
             <List 
                component="ul"
                dense="true" 
                disablePadding="true">
                <ListItem>
                    <ArrowRightIcon fontSize="small" /> 
                    <Box ml={0.5}><Typography variant="body2">Mercado Pago</Typography></Box>
                </ListItem>
                <ListItem>
                    <ArrowRightIcon fontSize="small" /> 
                    <Box ml={0.5}><Typography variant="body2">UALA transferencia</Typography></Box>
                </ListItem>
                <ListItem>
                    <ArrowRightIcon fontSize="small" /> 
                    <Box ml={0.5}><Typography variant="body2">Efectivo</Typography></Box>
                </ListItem>
            </List>
            </Box>                    
        </Grid>
        <Grid item xs={12} sm={4} md={4}>   
        <Box mb={5} >   
            <Typography className={classes.Title} variant="body2">CONTACTANOS</Typography>
            <List 
                component="ul"
                dense="true" 
                disablePadding="true">
                <ListItem>
                    <RoomIcon fontSize="small" /> 
                    <Box ml={0.5}><Typography variant="body2">Alejandro Korn | Barrio la estacion</Typography></Box>
                </ListItem>
                <ListItem>
                     <FacebookIcon fontSize="small" /> 
                    <Box ml={0.5}><Typography variant="body2">Ayemostartas</Typography></Box>
                </ListItem>
                <ListItem>
                    <WhatsAppIcon fontSize="small" /> 
                    <Box ml={0.5}><Typography variant="body2">1137900735</Typography></Box>
                </ListItem>
                <ListItem>
                    <InstagramIcon fontSize="small" /> 
                    <Box ml={0.5}><Typography variant="body2">Ayemostartas</Typography></Box>
                </ListItem>
            </List>
            </Box> 
        </Grid>
    </Grid>
    <Button variant="contained" className={classes.whatsApp} href="https://wa.me/5491137900735/?text=Hola%20Ayemostartas...">
        <WhatsAppIcon className={classes.iconWhatsapp}/>
    </Button>                
    <Divider/>
    <Box  p={2} textAlign="center">
        <Typography variant="body2">Copyright Ayemostartas <FavoriteBorderIcon className={classes.icon}/> - 2020. Desarrollado por Mayak.</Typography>
    </Box>
</div>
) }
export default Footer;