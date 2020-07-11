import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import ListItem from '@material-ui/core/ListItem';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StorefrontIcon from '@material-ui/icons/Storefront';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Typography from '@material-ui/core/Typography';
import Maps from './Map/Map';
import Container from '@material-ui/core/Container';
import Form from './ContactElements/Form';
import TitleBox from './ContactElements/TitleBox';

const useStyles = makeStyles(({  
  general:{
          display: "flex",
          flexFlow: "row wrap"},
  contactList:{
          width: "50%",
          marginBottom:20},
  icon:{
          fontSize: "230%",
          color: "#ad172b",
          margin: "0px 5px 20px 0px"},
  map:{
          width: "80%",
          margin: "100px 0px 0px 10%"},
  }));

const Contact = () => {
  const classes = useStyles();
    return(
    <div>
        <Container maxWidth="xl">
          <Box  className={classes.map}>
            <Maps/>
          </Box>
          <Grid container>     
            <Grid item xs={12} sm={6} md={6}>
              <Box mt={8}>
                <TitleBox>Ayemostartas</TitleBox>
                  <Box textAlign="center" mb={4} ml={2} mr={2}>   
                    <Typography variant="body2">En nuestro local de Mataderos desayuná, almorzá, merendá y disfrutá de nuestra pastelería, postres, facturas y tortas. Y en nuestro nuevo local de Caballito podés llevar todas nuestras delicias y saborear un rico café.</Typography> 
                    </Box>
                  <TitleBox>Contactanos</TitleBox>
                  <Box className={classes.general}>
                      <ListItem>
                        <StorefrontIcon className={classes.icon}/>
                        <Typography className={classes.contactList}  variant="body2">Estacion </Typography>
                        <WhatsAppIcon className={classes.icon}/> 
                        <Typography className={classes.contactList} variant="body2">1137900735</Typography>
                      </ListItem>         
                      <ListItem>
                        <QueryBuilderIcon className={classes.icon}/> 
                        <Typography className={classes.contactList} variant="body2"> 9 - 19hs</Typography>
                        <FacebookIcon className={classes.icon}/> 
                        <Typography className={classes.contactList} variant="body2">Ayemostartas</Typography>
                      </ListItem>
                      <ListItem>
                        <InstagramIcon className={classes.Icon}/> 
                        <Typography className={classes.ContactList} variant="body2"> Ayemostartas</Typography>
                      </ListItem>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <Box mt={8} mb={10}>
                  <TitleBox>Envianos tu consulta</TitleBox>
                  <Form/>
                </Box>    
              </Grid>
            </Grid>
          </Container> 
      </div>
    )
}
export default Contact;