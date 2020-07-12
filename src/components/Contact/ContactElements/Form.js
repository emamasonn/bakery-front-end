import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { env_app } from '../../../config/config';
import ModalMessage from './ModalMessage';
import axios from 'axios';

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    fieldset {
      border-color: rgb(216, 216, 216);}
    &.Mui-focused fieldset {
      border-color: rgb(216, 216, 216);} }`;

const useStyles = makeStyles(({  
    general: {
        display: "flex",
        flexFlow: "row wrap",
    },
    formControl: {
        width: "100%",
        marginBottom: 20,
    },
    textField:{
        margin: "0 20px",
    },
    button:{
        marginLeft: 20,
    },
    textArea:{
        width: "100%",
        margin: "0px 20px 20px 20px",
    },
    label:{
        margin: "0px 0px 12px 20px",
    }
}));

const FormContact = () => {
    const classes = useStyles();
    const [name, setName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [telephone, setTelephone] = useState();
    const [message, setMessage] = useState();

    const [modalMessage, setModalMessage] = useState({open: false, error: false});

    const handleChangeName = (event) => {
        let name = event.target.value
        setName(name)
    }

    const handleChangeLastName = (event) => {
        let lastName = event.target.value
        setLastName(lastName)
    }

    const handleChangeEmail = (event) => {
        let email = event.target.value
        setEmail(email)
    }

    const handleChangeTelephone = (event) => {
        let telephone = event.target.value
        setTelephone(telephone)
    }

    const handleChangeMessage = (event) => {
        let message = event.target.value
        setMessage(message)
    }

    const sendMessageApi = (data) => {
        axios.post(`${ env_app.URL_API }/message`, data)
          .then((resp) =>{
            setModalMessage({open: true, error: false})
            document.getElementById('id-form-contact').reset()
            setTimeout(() => {
                setModalMessage({open: false, error: false})
            }, 2000)
          })
          .catch((error) => {
            console.log(error);
            setModalMessage({open: true, error: true})
            setTimeout(() => {
                setModalMessage({open: false, error: true})
            }, 2000)
          });
    }

    const handleSubmitMessage = async (event) => {
        event.preventDefault()
        let data = {
            name,
            lastName,
            email,
            telephone,
            message
        }
        sendMessageApi(data)
    }

    const handleCloseModalMessage = () => {
        setModalMessage({open: false, error: false})
    };

    return (
        <div>
            <form onSubmit={handleSubmitMessage} className={classes.general} id='id-form-contact'>                         
                <Grid item xs={12} sm={6} md={6}>
                    <FormControl className={classes.formControl}>
                        <Typography className={classes.label} variant="body2">Nombre *</Typography>
                        <StyledTextField 
                            className={classes.textField}
                            onChange={handleChangeName} 
                            variant="outlined" 
                            size="small"
                            required
                        />
                    </FormControl>
                </Grid>                
                <Grid item xs={12} sm={6} md={6}>
                    <FormControl className={classes.formControl}>
                        <Typography className={classes.label} variant="body2">Apellido *</Typography>                     
                        <StyledTextField 
                            className={classes.textField}
                            onChange={handleChangeLastName} 
                            variant="outlined" 
                            size="small"
                            required
                        />                    
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <FormControl className={classes.formControl}>
                        <Typography className={classes.label}  variant="body2">Email *</Typography>                
                        <StyledTextField 
                            className={classes.textField}
                            onChange={handleChangeEmail} 
                            variant="outlined" 
                            size="small"
                            required
                        />                 
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <FormControl className={classes.formControl}>
                        <Typography className={classes.label} variant="body2">Telefono *</Typography>                 
                        <StyledTextField 
                            className={classes.textField}
                            onChange={handleChangeTelephone} 
                            variant="outlined" 
                            size="small"
                            required
                        />         
                    </FormControl>
                </Grid>                                                
                <FormControl className={classes.textArea}>
                    <Box mb={1.5}><Typography variant="body2">Mensaje *</Typography></Box>
                    <StyledTextField 
                        onChange={handleChangeMessage}
                        variant="outlined" 
                        multiline 
                        rows={6}
                        required
                    />
                </FormControl>                   
                <Button 
                    className={classes.button} 
                    type='submit'
                    variant="contained"
                >
                    Enviar
                </Button>
            </form>
            <ModalMessage modalState={modalMessage} handleClose={handleCloseModalMessage}/>
        </div>
    )
};

export default FormContact;


                    