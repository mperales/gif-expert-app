import React, { useEffect, useState } from 'react';
import { useFetchGif } from '../hooks/useFetchGif';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( { category } ) => {
    

    
    // useEffect( () => {
    //     getGif( category ).then (imgs => setList (imgs));
    // }, [ category ]); //El arreglo vacio hace que la llamada a getGif se realice sólo una vez

    const {data, loading} = useFetchGif(category);


    return (
    <>
    <h3>{ category }</h3>
    <h3 className='animate__animated animate__flash'>{ loading && 'Loading...'  }</h3>
    <div className="card-grid">
        
        
        
      
        {
        data.map(lista => (
            <GifGridItem { ...lista } key={ lista.id }/> 
            
        ))
        };
      

    </div>
    </>);
};
 