import React from "react";

function Card({card, onCardClick}) {
    function handleClick() {
        onCardClick(card);
    } 

    return (
        <li className="elements__item">
        <button className="elements__delete-button" type="button" aria-label="Удалить"></button>
        <img src={card.link} alt={card.name} className="elements__image" onClick={handleClick}/>
        <div className="elements__container">
            <h2 className="elements__text">{card.name}</h2>
            <div className="elements__like-container">
                <button className="elements__like-button" type="button" aria-label="Нравится"></button>
                <span className="elements__likes-number">{card.likes.length}</span>
            </div>   
        </div>
        </li>
    );
}

export default Card;