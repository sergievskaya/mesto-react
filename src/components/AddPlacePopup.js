import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onClose, onAddPlace}) {

    const nameRef = React.useRef();
    const linkRef = React.useRef();

    function handleSubmit(evt) {
        evt.preventDefault();

        onAddPlace({
            name: nameRef.current.value,
            link: linkRef.current.value,
        });
    }

    return(
        <PopupWithForm 
            name='add-place'
            title='Новое место'
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            buttonText='Создать'
            children={ 
            <fieldset className="popup__fields">
                <div className="popup__field">
                    <input
                        name="name"
                        type="text"
                        id="title-input"
                        className="popup__input"
                        placeholder="Название"
                        required 
                        minLength="2"
                        maxLength="30"
                        ref={nameRef}
                    />
                    <span className="popup__input-error title-input-error"></span>
                </div>
                <div className= "popup__field">
                    <input
                        name="link"
                        type="url"
                        id="link-input"
                        className="popup__input"
                        placeholder="Ссылка на картинку"
                        required
                        ref={linkRef}
                    />
                    <span className="popup__input-error link-input-error"></span>
                </div>
            </fieldset>
            }
        />

    );
}

export default AddPlacePopup;