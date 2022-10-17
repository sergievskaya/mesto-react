import React from "react";



function Main(props) {
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__container">
                    <div className="profile__avatar-container">
                        <img className="profile__avatar-image" src="#" alt="аватар пользователя" />
                        <button onClick={props.onEditAvatar} className="profile__avatar-button" type="button" aria-label="Изменить аватар профиля"></button>
                    </div>
                    <div className="profile__info">
                        <h1 className="profile__title"></h1>
                        <button onClick={props.onEditAvatar} className="profile__edit-button" type="button" aria-label="Редактировать профиль"></button>
                        <p className="profile__subtitle"></p>
                    </div>
                </div>
                <button onClick={props.onAddPlace} className="profile__add-button" type="button" aria-label="Добавить новую карточку"></button>
            </section>

            <section className="elements">
                <ul className="elements__list">
                    
                </ul>
            </section>
        </main>

    );
}

export default Main;