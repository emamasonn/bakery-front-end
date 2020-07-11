import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { connect } from 'react-redux';
import { searchProduct } from '../../redux/actions/actions'
import axios from 'axios'

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
    border: '2px solid #eeeeee',
    borderRadius: 4,
    padding: 5,
    height: 40,
    borderRadius: 4,
    width: '100%',
  },
  buttonSearch: {
    position: 'absolute',
    right: 2,
    top: 2,
    padding: '3px 0',
    background: '#fff',
    '&:hover':{
      background: '#fff',
    },
  },
  iconSearch: {
    fontSize: 30,
    color: '#eeeeee',
    '&:hover': {
      color: '#ad172b',
    },
  },
  contentCategories: {
    marginTop: 30,
  },
  titleCategories: {
    fontSize: 19,
  },
  itemCategory: {
    paddingLeft: 0,
  }
});

const Categories = ({ categories, searchProduct }) => {
  const classes = useStyle();
  const [valueSearch, setValueSearch] = useState()

  const getSearchProduct = (termino) => {
    axios.get(`http://localhost:3000/product/search/${ termino }`)
      .then( (resp) => {
        console.log(resp)
        let product = resp.data.product
        searchProduct(product)
      })
      .catch( (error) => {
        console.log(error)
      })
  }

  const getFindCategory = (category) => {
    axios.get(`http://localhost:3000/product/find/${ category }`)
      .then( (resp) => {
        console.log(resp)
        let product = resp.data.product
        searchProduct(product)
      })
      .catch( (error) => {
        console.log(error)
      })
  }

  const handlerSearchProduct = () => {
    getSearchProduct(valueSearch)
  }

  const handleValueSearch = (event) => {
    let value = event.target.value
    setValueSearch(value)
  }

  const handleFindCategory = (category) => {
    getFindCategory(category)
  }

  return (
    <React.Fragment>
      <div className={classes.contentSearch}>
      <Typography variant='h6' className={classes.titleSearch}>Buscar Producto</Typography>
      <div className={classes.search}>
        <InputBase
          placeholder="Buscar..."
          inputProps={{ "aria-label": "Buscar" }}
          onChange={handleValueSearch}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
        <Button className={classes.buttonSearch} onClick={handlerSearchProduct}><SearchIcon className={classes.iconSearch}/></Button>
      </div>
      </div>
      <Divider />
      
      <div className={classes.contentCategories}>
        <Typography variant="h6" className={classes.titleCategories}>Categorías</Typography>
        <List>
          {categories.map((category, index) => (
            <ListItem 
              button 
              key={index} 
              className={classes.itemCategory} 
              onClick={() => handleFindCategory(category.name)} 
            >
              <Typography variant="body2">{category.name}</Typography>
            </ListItem>
          ))}
        </List>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  categories: state.startReducer.categories
})

const mapDispatchToProps = dispatch => ({
  searchProduct: (data) => {
    dispatch(searchProduct(data))
  },
})

export default connect( mapStateToProps, mapDispatchToProps )(Categories);
