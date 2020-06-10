import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import ListItem from '@material-ui/core/ListItem';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StorefrontIcon from '@material-ui/icons/Storefront';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Footer from './Footer/Footer';
import NavegationBar from './NavegationBar';
import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

const CssTextField = withStyles({
  root: {
          display: "grid",
          gridTemplateColumns: "100% 100% 100% 100% 100%",
          gridTemplateRows: "100% 100% 100% 100% 100%",
          borderRadius: "8px",
          height: 35,
          width: "104%",
          border: "2px solid #E0E0E0",
          outline:"none",},})(TextField);

const CssTextArea = withStyles({
  root: {
          display: "grid",
          gridTemplateColumns: "100%",
          gridTemplateRows: "100%",
          width: "210%",
          height: 180,
          border: "2px solid #E0E0E0",
          borderRadius: "8px",
          outline:"none",
          underline:"none"},})(TextField);

const useStyles = makeStyles((theme) => ({  
  General:{
          display: "flex",
          flexFlow: "row wrap",

  },
  ContactList:{
          width: "50%",
          marginBottom: 20,
  },
  FormControl:{
          width: "47%",
          marginRight:"3%",
          marginBottom: 20,
  },
  Label:{
          marginBottom: 8,
          fontSize: 15,
  },
  Icon:{
          fontSize: "230%",
          color: "#ad172b",
  },
  Button:{
          width: "100%",
  },
  Typography:{
          fontSize: 25,
          fontFamily: "Dancing Script, cursive",
          display: 'flex',
          justifyContent: 'center',
  },
  TitleBox:{
          width: "70%",
          margin: "0% 0% 3% 15%",
  },
  }));
function Contact() {
  const classes = useStyles();
    return(
        <div>
          <NavegationBar/>
            <Grid container>     
                <Grid item
                      xs={12} 
                      sm={6} 
                      md={6}>
                <Box mt={11}>
                  <Box className={classes.TitleBox}>  
                    <Typography className={classes.Typography} variant="h6">Ayemostartas</Typography><Divider/> 
                    </Box>
                  <Box mb={1} ml={2.5} mr={2}>   
                    <Typography variant="p">En nuestro local de Mataderos desayuná, almorzá, merendá y disfrutá de nuestra pastelería, postres, facturas y tortas. Y en nuestro nuevo local de Caballito podés llevar todas nuestras delicias y saborear un rico café.</Typography> 
                    </Box>
                  <Box className={classes.TitleBox}>
                    <Typography className={classes.Typography} variant="h6">Contactanos</Typography><Divider/> 
                  </Box>      
                  <Box className={classes.General}>
                    <Box  className={classes.ContactList}>
                          <ListItem>
                            <StorefrontIcon className={classes.Icon}/> 
                              <Box ml={0.5}><Typography variant="p">Alejandro Korn | Estacion</Typography></Box>
                          </ListItem>               
                    </Box>
                    <Box className={classes.ContactList}>
                          <ListItem>
                            <WhatsAppIcon className={classes.Icon}/> 
                              <Box ml={0.5}><Typography variant="p">WhatsApp: 1137900735</Typography></Box>
                          </ListItem>
                    </Box>
                    <Box className={classes.ContactList}>
                          <ListItem>
                            <QueryBuilderIcon className={classes.Icon}/> 
                              <Box ml={0.5}><Typography variant="p">Lunes a sabados 9 - 19hs</Typography></Box>
                          </ListItem>
                    </Box>
                    <Box className={classes.ContactList}>
                          <ListItem>
                            <FacebookIcon className={classes.Icon}/> 
                              <Box ml={0.5}><Typography variant="p">Facebook: Ayemostartas</Typography></Box>
                          </ListItem>
                    </Box>
                    <Box  className={classes.ContactList}>
                          <ListItem>
                            <InstagramIcon className={classes.Icon}/> 
                              <Box ml={0.5}><Typography variant="p">Instagram: Ayemostartas</Typography></Box>
                          </ListItem>
                    </Box>
                  </Box>
                </Box>
                </Grid>
                <Grid 
                    item xs={12} 
                    sm={6} 
                    md={6}>
                    <Box m={0.5} mt={11}>
                      <Box className={classes.TitleBox}>
                         <Typography className={classes.Typography} variant="h6">Envianos tu consulta</Typography><Divider/>  
                      </Box>
                        <form className={classes.General} noValidate>
                          <FormControl className={classes.FormControl}>
                            <label className={classes.Label} 
                                   htmlFor="nombre">Nombre</label>
                            <CssTextField/>
                          </FormControl>
                          <FormControl className={classes.FormControl}>
                            <label className={classes.Label} 
                                  htmlFor="nombre">Email</label>
                            <CssTextField/>
                          </FormControl>
                          <FormControl className={classes.FormControl}>
                            <label className={classes.Label}                htmlFor="nombre"> Telefono</label>
                            <CssTextField/>
                          </FormControl>
                          <FormControl className={classes.FormControl}>
                            <label className={classes.Label} 
                                   htmlFor="nombre">Asunto</label>
                            <CssTextField/>
                          </FormControl>
                          <FormControl className={classes.FormControl}>
                            <label className={classes.Label} 
                                   htmlFor="nombre">Mensaje</label>
                            <CssTextArea/>
                          </FormControl>
                           
                         <box className={classes.Button}>
                          <Button variant="contained">Enviar
                          </Button>       
                         </box>
                        </form> 
                      </Box>    
                </Grid>
            </Grid>
            <Footer/>
        </div>
    )
}
export default Contact;