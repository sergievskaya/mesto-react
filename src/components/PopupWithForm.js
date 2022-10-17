import React from "react";

function PopupWithForm(props) {
    return (
        <div className={`popup popup_type_${props.name}`}>
            <div className="popup__container">
                <button className="popup__close" type="button" aria-label="Закрыть"></button>
                <form name={props.name} className="popup__form">
                    <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                    <button className="popup__submit-button" type="submit">Да</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;