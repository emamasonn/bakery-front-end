import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    fieldset {
      border-color: rgb(216, 216, 216);}
    &.Mui-focused fieldset {
      border-color: rgb(216, 216, 216);} }`;
const useStyles = makeStyles(({  
    General:{
        display: "flex",
        flexFlow: "row wrap"},
    FormControl:{
        width: "100%",
        marginBottom: 20,},
    TextField:{
        margin: "0px 20px 0px 20px"},
    Button:{
        marginLeft: "20px"},
    TextArea:{
        width: "100%",
        margin: "0px 20px 20px 20px"},
    Label:{
        margin: "0px 0px 12px 20px"}
        }));
function Form(){
const classes = useStyles();
return (
    <div>
        <form className={classes.General}>                         
            <Grid item xs={12} sm={6} md={6}>
                <FormControl className={classes.FormControl}>
                    <Typography className={classes.Label} variant="body2">Nombre</Typography>
                    <StyledTextField className={classes.TextField} variant="outlined" size="small"/>
                </FormControl>
            </Grid>                
            <Grid item xs={12} sm={6} md={6}>
                <FormControl className={classes.FormControl}>
                    <Typography className={classes.Label} variant="body2">Email</Typography>                     
                    <StyledTextField className={classes.TextField} variant="outlined" size="small"/>                    
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <FormControl className={classes.FormControl}>
                    <Typography className={classes.Label}  variant="body2">Telefono</Typography>                
                    <StyledTextField className={classes.TextField} variant="outlined" size="small"/>                 
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <FormControl className={classes.FormControl}>
                    <Typography className={classes.Label} variant="body2">Asunto</Typography>                 
                    <StyledTextField className={classes.TextField} variant="outlined" size="small"/>         
                </FormControl>
            </Grid>                                                
                <FormControl className={classes.TextArea}>
                    <Box mb={1.5}><Typography variant="body2">Mensaje</Typography></Box>
                    <StyledTextField variant="outlined" multiline rows={6}/>
                </FormControl>                   
            <Button className={classes.Button} variant="contained">Enviar</Button>
        </form>
    </div>
    )
};
export default Form;


                    