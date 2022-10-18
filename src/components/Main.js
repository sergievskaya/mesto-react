import React from "react";
import Card from "./Card";



function Main({onEditAvatar, onEditProfile, onAddPlace, name, description, avatar, cards, onCardClick}) {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__avatar-container">
                        <img className="profile__avatar-image" src={avatar} alt="аватар пользователя" />
                        <button onClick={onEditAvatar} className="profile__avatar-button" type="button" aria-label="Изменить аватар профиля"></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title">{name}</h1>
                        <button onClick={onEditProfile} className="profile__edit-button" type="button" aria-label="Редактировать профиль"></button>
                        <p className="profile__subtitle">{description}</p>
                    </div>
                </div>
                <button onClick={onAddPlace} className="profile__add-button" type="button" aria-label="Добавить новую карточку"></button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                    {cards.map((card) => (
                        <Card 
                        key={card._id} 
                        card={card} 
                        onCardClick={onCardClick} />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;