import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGifs';
//import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
//, { useState, useEffect }
export const GifGrid = ({category}) => {
   
    const {data: images,loading}= useFetchGifs( category );
    /*
     useEffect( () => { //para controlar que la peticion se haga cuando la categoria cambie
        getGifs(category)
        .then(imgs => setImages(imgs));
    }, [category] );
    */
  
    return (
        <>
        <h3 className="animate__animated animate__fadeIn" >{category}</h3>
        
      
            <div className="card-grid">
               {loading && <p> Loading...</p>} 
     
                    {
                        images.map( img =>( 
                           <GifGridItem 
                            key={img.id}
                           { ...img } 
                           />
                        ))
                    }    
            
        </div>
                
        </>
    )
}
