import React from 'react'
import PropTypes from 'prop-types'

const getJoke = async () => {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any')
        if(!response.ok){
            console.log(`http status is :${response.status}`);   
        }
        else{
            const jokeData = response.json();
            return jokeData;
        }
    }
    catch (err) {
        console.log(err);

    }
    
}

export default getJoke;