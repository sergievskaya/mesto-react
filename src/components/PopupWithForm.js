import React from "react";

function PopupWithForm({name, title, children, isOpen, onClose}) {
    return (
        <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button onClick={onClose} className="popup__close" type="button" aria-label="Закрыть"></button>
                <form name={name} className="popup__form">
                    <h2 className="popup__title">{title}</h2>
                    {children}
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;