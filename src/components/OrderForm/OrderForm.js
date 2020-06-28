import React from 'react'
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


const useStyles = makeStyles(({  
    containerForm: {
        marginTop: 180,
        marginBottom: 50,

    },
    titleFormOrder: {
        fontFamily: "Dancing Script, cursive",
        display: 'flex',
        justifyContent: 'center',
        color: "#ad172b" 
    },
    formOrder: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 40,
    },
    contentName: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 30,
    },
    name:{
        width: '45%',
        '& label.Mui-focused': {
            color: '#ad172b',
          },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#ad172b',
                borderWidth: 1,
            },
        },
        '@media (max-width:600px)': {
            width: '50%',
            marginRight: 3
        }
    },
    lastName: {
        width: '45%',
        '& label.Mui-focused': {
            color: '#ad172b',
          },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#ad172b',
                borderWidth: 1,
            },
        },
        '@media (max-width:600px)': {
            width: '50%',
            marginLeft: 3,
        }
    },
    textFile: {
        marginBottom: 30,
        width: '93%',
        '& label.Mui-focused': {
            color: '#ad172b',
          },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#ad172b',
                borderWidth: 1,
            },
        },
        '@media (max-width:600px)': {
            width: '100%',
        }
    },
    paper: {
        maxWidth: 600,
        margin: 'auto',
    },
}));

const OrderForm = ()=> {
    const classes = useStyles();
    return (
    <Container maxWidth='lg' className={classes.containerForm}>
        <Typography variant='h4' className={classes.titleFormOrder}>Detalle del Pedido</Typography>
        <Divider />
        <Paper elevation={0} className={classes.paper}>
        <form className={classes.formOrder}>                         
            <div className={classes.contentName}>
                <TextField 
                    className={classes.name}
                    id="outlined-basic" 
                    label="Nombre" 
                    variant="outlined"
                    size="small" 
                />
                <TextField 
                    className={classes.lastName}
                    id="outlined-basic" 
                    label="Apellido" 
                    variant="outlined"
                    size="small" 
                />
            </div>
            <TextField 
                className={classes.textFile}
                id="outlined-basic" 
                label="Dirección de la calle" 
                variant="outlined"
                size="small" 
            />
            <TextField 
                className={classes.textFile}
                id="outlined-basic" 
                label="Departamento, habitacion, etc" 
                variant="outlined"
                size="small" 
            />
            <TextField 
                className={classes.textFile}
                id="outlined-basic" 
                label="Localidad/Ciudad" 
                variant="outlined"
                size="small" 
            />
            <TextField 
                className={classes.textFile}
                id="outlined-basic" 
                label="Telefono" 
                variant="outlined"
                size="small" 
            />
            <TextField
                className={classes.textFile} 
                id="outlined-basic" 
                label="Direccion de correo electronico" 
                variant="outlined"
                size="small" 
            />
            <Divider />
            <TextField
                className={classes.textFile}
                id="standard-multiline-static"
                label="Fecha y horario de entrega"
                variant="outlined"
                multiline
                rows={6}
                placeholder="Por favor escribir fecha de entrega y franja horaria."
            />
            <Button className={classes.button} variant="contained">Enviar</Button>
        </form>
        </Paper>
    </Container>
    )
};
export default OrderForm;