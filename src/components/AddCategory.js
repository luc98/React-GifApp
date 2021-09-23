import React, {useState}  from 'react';
import PropTypes from 'prop-types'; 

export const AddCategory = ( {setCategories} ) => {
    const [inputValue, setinputValue] = useState('');
    
    const handleInputCharge = (e) => {
        setinputValue(e.target.value)
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
        setCategories(list => [inputValue,...list]);
        setinputValue('');     
    }
   
    
    }

    return (

            <form onSubmit= { handleSubmit} >
            <input
                    type="text"
                    value= {inputValue}
                    onChange={ handleInputCharge }
                    />
            </form>
                
        
    )
}

AddCategory.propTypes = {    //propTypes sirve para asegurarnos que es lo que nos este mandando sea lo que necesitemos
    setCategories: PropTypes.func.isRequired // para que el valor(mensaje) sea string y obligatorio
}
