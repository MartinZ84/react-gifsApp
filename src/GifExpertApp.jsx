import React from 'react'
import { useState } from 'react'
import { AddCategory , GifGrid} from './components';


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball', 'Naruto']);
    
   
    const onAddCategory = ( newCategory) => {
         //console.log(NewCategory);
        // Validar si la categoría ya existe
        if (categories.includes(newCategory)) return;
        // Agregar la nueva categoría
         setCategories([...categories, newCategory]);
    }
 

    return (
       <>
        <h1>GifExpertApp</h1>
        
        <AddCategory 
            //setCategories= { setCategories }
             onNewCategory = {(event)=> onAddCategory(event) } 
        />

        <button onClick={onAddCategory}>Agregar categoría</button>
       
        { 
            categories.map( ( category ) => (
                <GifGrid 
                    key= { category }
                    category={ category }
                />     
            )) 
        }           
       
       </>
       
  
    )
}
