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
import Divider from '@material-ui/core/Divider';
import Maps from './Map/Map';
import Container from '@material-ui/core/Container';
import NoSsr from '@material-ui/core/NoSsr';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    fieldset {
      border-color: rgb(216, 216, 216);
    }
    &:hover fieldset {
      border-color: rgb(216, 216, 216);
    }
    &.Mui-focused fieldset {
      border-color: rgb(216, 216, 216);
    }
  }
`;
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
          width: "100%",
          marginBottom: 20,
  },
  TextField:{
          width: "100",
          marginLeft: "20px",
          marginRight: "20px"
  },
  Icon:{
          fontSize: "230%",
          color: "#ad172b",
          marginRight: 5
  },
  Button:{
          width: "100%",
          marginLeft: "20px",
          marginTop: "10px",
  },
  Typography:{
          fontSize: 25,
          fontFamily: "Dancing Script, cursive",
          display: 'flex',
          justifyContent: 'center',
  },
  TitleBox:{
          width: "70%",
          margin: "0% 0% 7% 15%",
  },
  Map:{
          width: "80%",
          marginLeft: "10%",
          marginTop: "100px",
  },
  TextArea:{
          marginLeft: "20px",
          marginRight: "20px",
          width: "100%",
          marginBottom: 20,
  }
  }));
function Contact() {
  const classes = useStyles();
    return(
        <div>
          <NavegationBar/>
        <Container maxWidth="xl">
          <Box  className={classes.Map}>
            <Maps/>
            </Box>
            <Grid container>     
                <Grid item
                      xs={12} 
                      sm={6} 
                      md={6}>
                <Box mt={8} >
                  <Box className={classes.TitleBox}>  
                    <Typography className={classes.Typography} variant="h6">Ayemostartas</Typography><Divider/> 
                    </Box>
                  <Box mb={3} ml={2.5} mr={2}>   
                    <Typography variant="body2">En nuestro local de Mataderos desayuná, almorzá, merendá y disfrutá de nuestra pastelería, postres, facturas y tortas. Y en nuestro nuevo local de Caballito podés llevar todas nuestras delicias y saborear un rico café.</Typography> 
                    </Box>
                  <Box className={classes.TitleBox}>
                    <Typography className={classes.Typography} variant="h6">Contactanos</Typography><Divider/> 
                  </Box>      
                  <Box className={classes.General}>
                    <Box  className={classes.ContactList}>
                          <ListItem>
                            <StorefrontIcon className={classes.Icon}/> 
                              <Typography variant="body2">Estacion</Typography>
                          </ListItem>               
                    </Box>
                    <Box className={classes.ContactList}>
                          <ListItem>
                            <WhatsAppIcon className={classes.Icon}/> 
                              <Typography variant="body2">1137900735</Typography>
                          </ListItem>
                    </Box>
                    <Box className={classes.ContactList}>
                          <ListItem>
                            <QueryBuilderIcon className={classes.Icon}/> 
                              <Typography variant="body2"> 9 - 19hs</Typography>
                          </ListItem>
                    </Box>
                    <Box className={classes.ContactList}>
                          <ListItem>
                            <FacebookIcon className={classes.Icon}/> 
                              <Typography variant="body2">Ayemostartas</Typography>
                          </ListItem>
                    </Box>
                    <Box  className={classes.ContactList}>
                          <ListItem>
                            <InstagramIcon className={classes.Icon}/> 
                              <Typography variant="body2"> Ayemostartas</Typography>
                          </ListItem>
                    </Box>
                  </Box>
                </Box>
                </Grid>
                <Grid 
                    item xs={12} 
                    sm={6} 
                    md={6}>
                    <Box mt={8} mb={12}>
                      <Box className={classes.TitleBox}>
                         <Typography className={classes.Typography} variant="h6">Envianos tu consulta</Typography><Divider/>  
                      </Box>
                      <form 
                      className={classes.General}           noValidate>                         
                        <Grid 
                           item xs={12}
                           sm={6} 
                           md={6}>
                          <FormControl className={classes.FormControl}>
                        
                          <Box ml={2.5} mb={1.5}><Typography variant="body2">Nombre</Typography></Box>
                            <NoSsr>
                              <StyledTextField className={classes.TextField} variant="outlined" id="deterministic-outlined-input" size="small"/>
                            </NoSsr>
                          </FormControl>
                          </Grid>                
                          <Grid 
                            item xs={12} 
                            sm={6} 
                            md={6}>
                          <FormControl className={classes.FormControl}>
                          <Box ml={2.5} mb={1.5}><Typography variant="body2">Email</Typography></Box>  
                            <NoSsr>
                              <StyledTextField className={classes.TextField} variant="outlined" id="deterministic-outlined-input" size="small"/>
                            </NoSsr>
                          </FormControl>
                          </Grid>
                          <Grid 
                            item xs={12} 
                            sm={6} 
                            md={6}>
                          <FormControl className={classes.FormControl}>
                          <Box ml={2.5} mb={1.5}><Typography variant="body2">Telefono</Typography></Box>
                            <NoSsr>
                              <StyledTextField className={classes.TextField} variant="outlined" id="deterministic-outlined-input" size="small"/>
                            </NoSsr>
                          </FormControl>
                          </Grid>
                          <Grid 
                            item xs={12} 
                            sm={6} 
                            md={6}>
                          <FormControl className={classes.FormControl}>
                          <Box ml={2.5} mb={1.5}><Typography variant="body2">Asunto</Typography></Box>
                            <NoSsr>
                              <StyledTextField className={classes.TextField} variant="outlined" id="deterministic-outlined-input" size="small"/>
                            </NoSsr>
                          </FormControl>
                          </Grid>                                                
                          <FormControl className={classes.TextArea}>
                            <Box mb={1.5}><Typography variant="body2">Mensaje</Typography></Box>
                            <NoSsr>
                              <StyledTextField variant="outlined" id="deterministic-outlined-input" multiline
                              rows={6}/>
                            </NoSsr>
                          </FormControl>
                      
                         <box className={classes.Button}>
                          <Button variant="contained">Enviar
                          </Button>       
                         </box>
                        </form> 
                      </Box>    
                </Grid>
            </Grid>
            </Container> 
            <Footer/>
        </div>
    )
}
export default Contact;