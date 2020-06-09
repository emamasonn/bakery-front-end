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

const useStyles = makeStyles((theme) => ({  
  General:{
          display: "flex",
          flexFlow: "row wrap",
  },
  Input:{
          borderRadius: "40px",
          lineHeight: "35px",
          width: "100%",
          border: "2px solid #E0E0E0",
          outline:"none",
  },
  ContactList:{
          width: "50%",
          marginBottom: 20,
  },
  FormControl:{
          width: "40%",
          marginRight:"2%",
          marginBottom: 20,
  },
  Label:{
          marginBottom: 8,
          fontSize: 15,
  },
  TextArea: {
          width: "205%",
          height: 180,
          border: "2px solid #E0E0E0",
          borderRadius: "20px",
          outline:"none",
  },
  Icon:{
          fontSize: "250%",
          color: "#C6C6C6"
  },
  Button:{
          width: "100%",
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
                <Box m={2}>
                  <Box mb={1} 
                       mt={9}>
                    <ListItem>
                    <Typography variant="h6">Ayelen pasteleria</Typography>
                    </ListItem> 
                  </Box>      
                  <Box className={classes.General}>
                    <Box className={classes.ContactList}>
                          <ListItem>
                          <StorefrontIcon className={classes.Icon}/> 
                            <Box ml={1}><Typography variant="p">Alejandro Korn | Estacion</Typography></Box>
                        </ListItem>               
                    </Box>
                    <Box className={classes.ContactList}>
                          <ListItem>
                            <WhatsAppIcon className={classes.Icon}/> 
                              <Box ml={1}><Typography variant="p">WhatsApp: 1137900735</Typography></Box>
                          </ListItem>
                    </Box>
                    <Box className={classes.ContactList}>
                          <ListItem>
                            <QueryBuilderIcon className={classes.Icon}/> 
                              <Box ml={1}><Typography variant="p">Lunes a sabados 9 - 19hs</Typography></Box>
                          </ListItem>
                    </Box>
                    <Box className={classes.ContactList}>
                          <ListItem>
                            <FacebookIcon className={classes.Icon}/> 
                              <Box ml={1}><Typography variant="p">Facebook: Ayemostartas</Typography></Box>
                          </ListItem>
                    </Box>
                    <Box  className={classes.ContactList}>
                          <ListItem>
                            <InstagramIcon className={classes.Icon}/> 
                              <Box ml={1}><Typography variant="p">Instagram: Ayemostartas</Typography></Box>
                          </ListItem>
                    </Box>
                  </Box>
                </Box>
                </Grid>
                <Grid 
                      item xs={12} 
                      sm={6} 
                      md={6}>
                    <Box  m={2}>
                      <Box mb={3} mt={10}>
                         <Typography variant="h6">Envianos tu consulta</Typography> 
                      </Box>
                        <form className={classes.General} noValidate>
                          <FormControl className={classes.FormControl}>
                            <label className={classes.Label} 
                                   htmlFor="nombre">Nombre</label>
                            <input className={classes.Input} />
                          </FormControl>
                          <FormControl className={classes.FormControl}>
                            <label className={classes.Label} 
                                  htmlFor="nombre">Email</label>
                            <input className={classes.Input} />
                          </FormControl>
                          <FormControl className={classes.FormControl}>
                            <label className={classes.Label}                htmlFor="nombre"> Telefono</label>
                            <input className={classes.Input} />
                          </FormControl>
                          <FormControl className={classes.FormControl}>
                            <label className={classes.Label} 
                                   htmlFor="nombre">Asunto</label>
                            <input className={classes.Input} />
                          </FormControl>
                          <FormControl className={classes.FormControl}>
                            <label className={classes.Label} 
                                   htmlFor="nombre">Mensaje</label>
                            <input className={classes.TextArea} />
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