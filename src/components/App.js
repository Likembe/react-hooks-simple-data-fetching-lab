import React, { useEffect, useState } from "react";

function App(){
    const [dogImage, setDogImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch ("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setDogImage(data.message); //Update the state with the image url
            setIsLoading(false);
        });
    }, [])

    return(
        <div>
            {isLoading ? ( //Check if isLoading is true to display the "Loading message"
                <p>Loading...</p>
            ): (
            <div>                
                <img src={dogImage} alt="A Random Dog" />
            </div>
            )}
        </div>
    );

}
        

export default App

