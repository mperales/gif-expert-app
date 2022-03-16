import { useState } from "react/cjs/react.development"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";



export const GifExpertApp = () => {

const [categories, setCategories] = useState([]);



// const handleAdd = () => {
//     // setCategories (['Hunter Hunter', ...categories, ]);
//        setCategories (cats => [...cats, 'Hunter hunter']); 
        

//     }

 
return (
    <>
    
    <h2>GifExpertApp</h2>
    
    <AddCategory setCategories= { setCategories }/>
  
    <hr></hr>
   
    <ol>
        {
            categories.map(category => (
            <GifGrid key={category } category={ category }></GifGrid>

            )) 
        }    
    </ol>
 
    </>
)


}