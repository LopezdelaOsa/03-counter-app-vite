

export const getImagen = async() => {

    try {
        //N2g8riplBFc6Qjhe9F8FeXHie8a2QDtJ
        //const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';
        //const apiKey = 'N2g8riplBFc6Qjhe9F8FeXHie8a2QDtJ';  //Esta es la buena
        const apiKey = 'N2g8riplBFchhjhe9F8FeXHie8HHQDtJ';  //Esta es la mala
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url

    } catch (error) {
        // manejo del error
        //console.error(error)
        return 'No se encontro la imagen'
    }
    
    
    
}

 getImagen();



