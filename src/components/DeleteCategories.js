import React from 'react'

export const DeleteCategories = ( { setCategories } ) => {
  

    const limpiar = () => {

        setCategories (categories => [...categories]);    
    }

    
  
  
    return (
    <button onClick={limpiar()}>Limpiar</button>
  )
}
