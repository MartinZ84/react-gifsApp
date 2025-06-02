
import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState();

  const onInputChange = ( {target}) => {   
    setInputValue( target.value );
  }

  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(inputValue);
    if (inputValue.trim().length <= 1) return;
    // setCategories( (categories => [...categories, inputValue]) );
    onNewCategory( inputValue.trim() );
    // Limpiar el input
    setInputValue( '' );
  
  }

  return (
    <form onSubmit={ onSubmit } >
      <input type="text"
            placeholder="Buscar gifs" 
            value = { inputValue }
            onChange={ onInputChange } 
            maxLength={ 100 }  
      />

    </form>  
      
      
   
  )
}
