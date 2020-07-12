import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { env_app } from '../../config/config'
import axios from 'axios';
import ModalOrder from './ModalOrder'

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

const OrderForm = ({ shoppingCart })=> {
    const classes = useStyles();
    const [name, setName] = useState();
    const [ lastName, setLastName ] = useState();
    const [ address, setAddress ] = useState();
    const [ departament, setDepartament ] = useState();
    const [ location, setLocation ] = useState();
    const [ telephone, setTelephone ] = useState();
    const [ email, setEmail ] = useState();
    const [ description, setDescription ] = useState();
    const [modalOrder, setModalOrder] = useState({open: false, error: false});

    const handleChangeName = (event) => {
        let name = event.target.value
        setName(name)
    }

    const handleChangeLastName = (event) => {
        let lastName = event.target.value
        setLastName(lastName)
    }

    const handleChangeAddress = (event) => {
        let address = event.target.value
        setAddress(address)
    }

    const handleChangeDepartament = (event) => {
        let departament = event.target.value
        setDepartament(departament)
    }
    const handleChangeLocation = (event) => {
        let location = event.target.value
        setLocation(location)
    }
    const handleChangeTelephone = (event) => {
        let telephone = event.target.value
        setTelephone(telephone)
    }
    const handleChangeEmail = (event) => {
        let email = event.target.value
        setEmail(email)
    }
    const handleChangeDescription = (event) => {
        let description = event.target.value
        setDescription(description)
    }

    const sendOrderApi = (data) => {
        axios.post(`${ env_app.URL_API }/order`, data)
        .then( (resp) => {
            setModalOrder({open: true, error: false})
            document.getElementById('id-form-order').reset()
            setTimeout(() => {
                setModalOrder({open: false, error: false})
            }, 2000)
        })
        .catch( (error) => {
            console.log(error)
            setModalOrder({open: true, error: true})
            setTimeout(() => {
                setModalOrder({open: false, error: true})
            }, 2000)
        })
    }

    const handleSubmitOrder = (event) => {
        event.preventDefault()

        let products = shoppingCart.map((product) => {
            const { name, priceUni, quality} = product
            return { name, priceUni, quality }
        })

        const data = {
            name,
            lastName,
            address,
            departament,
            location,
            telephone,
            email,
            description,
            products
        }
        sendOrderApi(data)
    }

    const handleCloseModalOrder = () => {
        setModalOrder({open: false, error: false})
    };

    return (
    <Container maxWidth='lg' className={classes.containerForm}>
        <Typography variant='h4' className={classes.titleFormOrder}>Detalle del Pedido</Typography>
        <Paper elevation={0} className={classes.paper}>
        <form onSubmit={handleSubmitOrder} className={classes.formOrder} id='id-form-order'>                         
            <div className={classes.contentName}>
                <TextField 
                    onChange={handleChangeName}
                    className={classes.name} 
                    label="Nombre" 
                    variant="outlined"
                    size="small"
                    required 
                />
                <TextField
                    onChange={handleChangeLastName} 
                    className={classes.lastName} 
                    label="Apellido" 
                    variant="outlined"
                    size="small"
                    required 
                />
            </div>
            <TextField 
                onChange={handleChangeAddress}
                className={classes.textFile}
                label="Dirección de la calle" 
                variant="outlined"
                size="small"
                required 
            />
            <TextField 
                onChange={handleChangeDepartament}
                className={classes.textFile}
                label="Departamento, habitacion, etc" 
                variant="outlined"
                size="small"
                required 
            />
            <TextField 
                onChange={handleChangeLocation}
                className={classes.textFile}
                label="Localidad/Ciudad" 
                variant="outlined"
                size="small" 
                required
            />
            <TextField 
                onChange={handleChangeTelephone}
                className={classes.textFile}
                label="Telefono" 
                variant="outlined"
                size="small" 
                required
            />
            <TextField
                onChange={handleChangeEmail}
                className={classes.textFile} 
                label="Direccion de correo electronico" 
                variant="outlined"
                size="small" 
                required
            />
            <TextField
                onChange={handleChangeDescription}
                className={classes.textFile}
                label="Fecha y horario de entrega"
                variant="outlined"
                multiline
                rows={6}
                placeholder="Por favor escribir fecha de entrega y franja horaria."
                required
            />
            <Button type='submit' className={classes.button} variant="contained">Enviar</Button>
        </form>
        </Paper>
        <ModalOrder modalState={modalOrder} handleClose={handleCloseModalOrder}/>
    </Container>
    )
};


const mapStateToProps = state => ({
    shoppingCart: state.orderProductReducer.shoppingCart
})
  
export default connect( mapStateToProps )(OrderForm);
