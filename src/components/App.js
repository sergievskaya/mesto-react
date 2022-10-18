import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';

function App() {
    const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const[userName, setUserName] = React.useState('');
    const[userDescription, setUserDescription] = React.useState('');
    const[userAvatar, setUserAvatar] = React.useState('');
    const[cards, setCards] = React.useState([]);
    const[selectedCard, setSelectedCard] = React.useState({});

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
          .then(([userData, initialCards]) => {
            setCards(initialCards);
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
          })
          .catch((err) => {
            console.log(`Ошибка: ${err}`);
          });
      }, []);

    function  handleEditAvatarClick()  {
        setIsEditAvatarPopupOpen(true);
    }
    
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }
    
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function closeAllPopup() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({});
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    return (
    <div className="page">
        <Header />
        <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        name={userName}
        description={userDescription}
        avatar={userAvatar}
        cards={cards}
        onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm  
        name={'profile'}
        title={'Редактировать профиль'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopup}
        children={
        <>
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
        </>
        }
        />
        <PopupWithForm 
        name={'card'}
        title={'Новое место'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopup}
        children={
        <>    
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
        </>
        }
        />

        <PopupWithForm 
        name={'avatar'}
        title={'Обновить аватар'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopup}
        children={
            <>
            <fieldset className="popup__fields">
                <div className= "popup__field">
                    <input name="avatar" type="url" id="avatar-input" className="popup__input" placeholder="Ссылка на картинку" required />
                    <span className="popup__input-error avatar-input-error"></span>
                </div>
            </fieldset>
            <button className="popup__submit-button" type="submit">Сохранить</button>
            </>
        }
        />

        <PopupWithForm 
        name={'delete-card'}
        title={'Вы уверены?'}
        isOpen={''}
        onClose={closeAllPopup}
        children={
            <button className="popup__submit-button" type="submit">Да</button>
        }
        />

        <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopup}
        />
    </div>
  );
}

export default App;