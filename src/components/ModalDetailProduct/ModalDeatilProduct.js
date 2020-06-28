import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import ProductImage from "../../assets/productimage.jpg";

const useStyles = makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:focus': {
      outline: 'unset',
    },
  },
  paper: {
    backgroundColor: '#fff',
    margin: 20,
    padding: 12,
    position: 'relative',
    outline: 'unset',
    '@media (max-width:600px)': {
      margin: 30,
    },
  },
  contentIcon: {
    top: 0,
    position: 'absolute',
    right: 0,
    margin: 5,
    cursor: 'pointer',
  },
  img: {
    width: 300,
    '@media (max-width:600px)': {
      width: '100%',
    },
  },
  contentImg: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleProduct: {
    margin: '15px 0',
    '@media (max-width:600px)': {
        fontSize: 22,
    },
  },
  priceProduct: {
    color: '#ad172b',
    marginBottom: 15,
  },
  detailProduct: {
    marginBottom: 15,
  },
  buttonProduct: {
    marginTop: 30,
    background: '#ad172b',
    color: '#fff',
    '&:hover': {
      background: '#ad172b',
    }
  },
  contentDetail: {
    '@media (max-width:600px)': {
      padding: 10,
    },
  },
  contentButton: {
    '@media (max-width:600px)': {
      textAlign: 'center',
    },
  },
});

const ModalDetailProduct = ({open, handleClose}) => {
    const classes = useStyles();

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
            <div className={classes.contentIcon}>
                <CloseIcon onClick={handleClose}/>
            </div>
            <Grid container spacing={3}>
                <Grid xs={12} sm={5} className={classes.contentImg}>
                    <img src={ProductImage} className={classes.img} alt="Image product"/>
                </Grid>
                <Grid xs={12} sm={7}>
                    <div className={classes.contentDetail}>
                        <Typography variant='h4' className={classes.titleProduct}>Alsaciana de Maracuyá</Typography>
                        <Typography variant='h5' className={classes.priceProduct}>$1,090.00</Typography>
                        <Typography variant='body2' className={classes.priceDetail}>
                            Suave bizcocho de chocolate y nueces, esponjoso de maracuya y cubierta con reduccion de maracuya
                        </Typography>
                        <div className={classes.contentButton}><Button className={classes.buttonProduct}>Comprar</Button></div>
                    </div>
                </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    )
}

export default ModalDetailProduct;