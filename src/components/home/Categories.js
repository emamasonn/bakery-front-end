import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Grid, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyle = makeStyles({
  contentHome: {
    height: 500,
    marginTop: 200,
  },
  padding: {
    paddingTop: "20px",
    paddingBottom: "50px",
  },
  margin: {
    marginTop: "25px",
    marginBottom: "25px",
  },
  root: {
    "& > *": {
      width: "25ch",
    },
  },
  iconButton: {
    padding: 10,
  },
  paper: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginBottom: "50px",
  },
});

const categories = [
  { name: "Category neme" },
  { name: "Category neme" },
  { name: "Category neme" },
  { name: "Category neme" },
  { name: "Category neme" },
  { name: "Category neme" },
  { name: "Category neme" },
];

const Categories = () => {
  const classes = useStyle();

  return (
    <Grid container className={classes.padding}>
      <Paper component="form" className={classes.paper}>
        <InputBase
          placeholder="Buscar productos:"
          inputProps={{ "aria-label": "Buscar productos" }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <Grid item>
        <Typography variant="h6">Categorias</Typography>
        <List component="nav">
          {categories.map((category, index) => (
            <React.Fragment>
              <ListItem button key={index}>
                {category.name}
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Grid>
    </Grid>

    /* // <div>
    //     <>
    //         {/* Aca tenes que agregar el buscador con el titulo

    //             https://material-ui.com/components/text-fields/ (buscador)
    //             https://material-ui.com/components/typography/ (titulos)

    //         
    //     <Divider />
    //     <div>

    //         <List component="nav">
    //             {
    //                 categories.map((category, index)=>(
    //                     <ListItem button key={index}>
    //                         {category.name}
    //                     </ListItem>
    //                 ))
    //             }
    //         </List>
    //     </div>
    // </div> */
  );
};

export default Categories;
