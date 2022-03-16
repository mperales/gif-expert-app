


        
    export const getGif =async (category) =>{
        
        const apiKey = 'hDgxc0y1cI0cJJSSKE4qblwZaIbRXMOT';
        const limit = 5;
    
        const peticion = await fetch(`https://api.giphy.com/v1/gifs/search?q=${ encodeURIComponent (category)  }&limit=${limit}&api_key=${apiKey}`);
        const { data } = await peticion.json();
        
        const gif = data.map(img => {
           
            return {
                title: img.title,
                id: img.id,
                url: img.images?.downsized_medium.url
                
            }
            
        });
        
        return gif;
    }  

        