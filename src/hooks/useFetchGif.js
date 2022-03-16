import { useState } from "react"
import { useEffect } from "react/cjs/react.development";
import { getGif } from "../helper/GetGif";


export const useFetchGif = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true

    });



    useEffect(() => {
      
        
        
        getGif(category).then(imgs =>  {

            setTimeout(() => {
                setstate({
                data: imgs,
                loading: false
                }); 
            }, 3000);
        })


    }, [])
    




    return state;



}
