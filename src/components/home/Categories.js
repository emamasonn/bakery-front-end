import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem'

const useStyle = makeStyles({
    contentHome:{
        height: 500,
        marginTop: 200
    }
})

const categories = [{name: 'nemeCatery'},{name: 'nemeCatery'},{name: 'nemeCatery'},{name: 'nemeCatery'}]

const Categories = () => {
    const classes = useStyle()
    
    return(
        <div>
            <div>
                {/* Aca tenes que agregar el buscador con el titulo  
                    
                    https://material-ui.com/components/text-fields/ (buscador)
                    https://material-ui.com/components/typography/ (titulos)
                
                */}
            </div>
            <Divider />
            <div>

                <List component="nav">
                    {
                        categories.map((category, index)=>(
                            <ListItem button key={index}>
                                {category.name}
                            </ListItem> 
                        ))
                    }   
                </List>
            </div>
        </div>
    )
}

export default Categories;