
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
    const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);



    function  handleEditAvatarClick()  {
        document.querySelector('.popup_type_avatar').classList.add('popup_opened');
    }
    
    function handleEditProfileClick() {
        document.querySelector('.popup_type_profile').classList.add('popup_opened');
    }
    
    function handleAddPlaceClick() {
        document.querySelector('.popup_type_avatar').classList.add('popup_opened');
    }


    return (
    <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}  onEditAvatar={handleEditAvatarClick} />
        <Footer />
        
        <div className="popup popup_type_profile">
            <div className="popup__container">
                <button className="popup__close" type="button" aria-label="Закрыть"></button>
                <form name="profile" id="form-profile" className="popup__form" noValidate>
                    <h2 className="popup__title">Редактировать профиль</h2>
                    <fieldset className="popup__fields">
                        <div className="popup__field">
                            <input name="name" type="text" id="name-input" className="popup__input" placeholder="Имя" required minLength="2" maxLength="40" />
                            <span className="popup__input-error name-input-error"></span>
                        </div>
                        <div className= "popup__field">
                            <input name="about" type="text" id="job-input" className="popup__input" placeholder="О себе" required minLength="2" maxLength="200" />
                            <span className="popup__input-error job-input-error"></span>
                        </div>
                    </fieldset>
                    <button className="popup__submit-button" type="submit">Сохранить</button>
                </form>
            </div>
        </div>

        <div className="popup popup_type_card">
            <div className="popup__container">
                <button className="popup__close" type="button" aria-label="Закрыть"></button>
                <form name="card" id="form-card" className="popup__form" noValidate>
                    <h2 className="popup__title">Новое место</h2>
                    <fieldset className="popup__fields">
                        <div className="popup__field">
                            <input name="name" type="text" id="title-input" className="popup__input" placeholder="Название" required minLength="2" maxLength="30" />
                            <span className="popup__input-error title-input-error"></span>
                        </div>
                        <div className= "popup__field">
                            <input name="link" type="url" id="link-input" className="popup__input" placeholder="Ссылка на картинку" required />
                            <span className="popup__input-error link-input-error"></span>
                        </div>
                    </fieldset>
                    <button className="popup__submit-button" type="submit">Создать</button>
                </form>
            </div>
        </div>
        <div className="popup popup_type_open-image">
            <figure className="popup__figure">
                <button className="popup__close" type="button" aria-label="Закрыть"></button>
                <img className="popup__image" src="#" alt="" />
              <figcaption className="popup__caption"></figcaption>
            </figure>
        </div>
        <div className="popup popup_type_delete-card">
            <div className="popup__container">
                <button className="popup__close" type="button" aria-label="Закрыть"></button>
                <form name="delete" className="popup__form">
                    <h2 className="popup__title">Вы уверены?</h2>
                    <button className="popup__submit-button" type="submit">Да</button>
                </form>
            </div>
        </div>
        <div className="popup popup_type_avatar">
            <div className="popup__container">
                <button className="popup__close" type="button" aria-label="Закрыть"></button>
                <form name="avatar" id="form-avatar" className="popup__form"noValidate>
                    <h2 className="popup__title">Обновить аватар</h2>
                    <fieldset className="popup__fields">
                        <div className= "popup__field">
                            <input name="avatar" type="url" id="avatar-input" className="popup__input" placeholder="Ссылка на картинку" required />
                            <span className="popup__input-error avatar-input-error"></span>
                        </div>
                    </fieldset>
                    <button className="popup__submit-button" type="submit">Сохранить</button>
                </form>
            </div>
        </div>

    </div>

  );
}

export default App;
