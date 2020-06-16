import React from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(({
    typography:{
            fontSize: 25,
            fontFamily: "Dancing Script, cursive",
            display: 'flex',
            justifyContent: 'center',
            color: "#ad172b" 
        },
    titleBox:{
            width: "70%",
            margin: "0% 0% 7% 15%"
        },
    }));
function TitleBox(props){
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.titleBox}>  
                <Typography className={classes.typography} variant="h6">{props.children}</Typography><Divider/> 
            </Box>
        </div>
    )
}
export default TitleBox