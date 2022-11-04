import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

    const avatarRef = React.useRef();

    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
      }

    return(
        <PopupWithForm 
            name='edit-avatar'
            title='Обновить аватар'
            isOpen={isOpen}
            onClose={onClose}
            buttonText='Сохранить'
            onSubmit={handleSubmit}
            children={
            <fieldset className="popup__fields">
                <div className= "popup__field">
                    <input 
                        name="avatar"
                        type="url"
                        id="avatar-input"
                        className="popup__input"
                        placeholder="Ссылка на картинку"
                        required
                        ref={avatarRef}
                    />
                    <span className="popup__input-error avatar-input-error"></span>
                </div>
            </fieldset>
            }
        />
    );
}

export default EditAvatarPopup;