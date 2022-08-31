import React, { useRef, useState } from 'react'
import CategoryForm from '../CategoryForm/CategoryForm';
import RatingForm from '../RatingForm/RatingForm';


//PASSEI O FORM PARA COMPONENT EM SEPARADO PARA FICAR MAIS ARRUMADO

function Filter(props) {
    const { changeLink } = props;

    /*
    enviar para aqui funçao que sempre que é clicada faz o fetch consoante o rate
    dar set ao productArray 
    */

    function handleRating(event) {
        const link = `/rating?min=${event.target.value}&max=${event.target.value}&direction=`;
        changeLink(link);
    }

    function handleCategory(event) {
        const link = `/category?category=${event.target.value}&direction=`;
        changeLink(link);
    }

    return (
        <>
            <RatingForm handleRating={handleRating} />
            <CategoryForm handleCategory={handleCategory} />
        </>
    )
}

export default Filter