import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const useStyle = makeStyles({
  contentSearch: {
    marginBottom: 30,
  },
  titleSearch: {
    marginBottom: 19,
    fontSize: 19,
  },
  search:{
    position: 'relative',
  },
  inputRoot: {
    border: '1px solid #ad172b',
    borderRadius: 4,
    padding: 5,
    height: 40,
    borderRadius: 4,
    width: '100%',
  },
  buttonSearch: {
    position: 'absolute',
    right: 1,
    top: 1,
    padding: '3px 0',
    background: '#fff',
    '&:hover':{
      background: '#fff',
    },
  },
  iconSearch: {
    fontSize: 30,
    color: '#ad172b',
    '&:hover': {
      color: '#dd2c00',
    },
  },
  contentCategories: {
    marginTop: 30,
  },
  titleCategories: {
    fontSize: 19,
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
    <React.Fragment>
      <div className={classes.contentSearch}>
      <Typography variant='h6' className={classes.titleSearch}>Buscar Producto</Typography>
      <div className={classes.search}>
        <InputBase
          placeholder="Buscar..."
          inputProps={{ "aria-label": "Buscar" }}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
        <Button className={classes.buttonSearch}><SearchIcon className={classes.iconSearch}/></Button>
      </div>
      </div>
      <Divider />
      
      <div className={classes.contentCategories}>
        <Typography variant="h6" className={classes.titleCategories}>Categorías</Typography>
        <List>
          {categories.map((category, index) => (
            <ListItem button key={index}>
              <Typography variant="body2">{category.name}</Typography>
            </ListItem>
          ))}
        </List>
      </div>
    </React.Fragment>
  );
};

export default Categories;
