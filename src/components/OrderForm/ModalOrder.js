import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ad172b',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    textAlign: 'center',
    '&:focus': {
        outline: 'unset'
    }
  },
  iconModal: {
    fontSize: 60,
    color: '#ad172b',
    marginTop: 20,
  }
}));

const ModalOrder = ({ modalState, handleClose }) => {
    const classes = useStyles();

    const {open, error} = modalState

    return(
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <Typography variant='h4'>
                        {error ? 'Error!' : 'Pedido Enviado!'}
                    </Typography>
                    <Typography variant='body1'>
                        {error ? 'Ocurrió un error en el envio del pedido' : 'Se envio el pedido correctamente'}
                    </Typography>
                    {error ? <ErrorOutlineIcon className={classes.iconModal}/> : <CheckCircleOutlineIcon className={classes.iconModal}/>}
                </div>
            </Fade>
        </Modal>
    )
}

export default ModalOrder;