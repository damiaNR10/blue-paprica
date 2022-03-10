const activeLanguage = document.querySelector('.language-button--active');
const languageButtons = document.querySelectorAll('.language-button--js ');
const languageBox = document.querySelector('.language-box--js');

const hideLanguageBox = () => {
    languageBox.classList.remove('header__language-box--active');
}

const showLanguageBox = () => {
    languageBox.classList.add('header__language-box--active');
}

const hideAllLanguageButtons = () => {
    languageButtons.forEach(languageButton => languageButton.classList.remove('header__button--visible'));
}

const showAllLanguageButtons = () => {
    languageButtons.forEach(languageButton => languageButton.classList.add('header__button--visible'));
}

const activateLanguageButton = (button) => {
    button.classList.add('header__button--active');
}

const deactivateLanguageButtons = () => {
    languageButtons.forEach(languageButton => {
        if(languageButton.classList.contains('header__button--active')) languageButton.classList.remove('header__button--active');
    });
}

if(languageButtons) languageButtons.forEach(languageButton => {
    languageButton.addEventListener('click', () => {
        if(languageBox.classList.contains('header__language-box--active')) {
            hideLanguageBox();
            hideAllLanguageButtons();
            deactivateLanguageButtons();
            activateLanguageButton(languageButton);
        } else {
            showLanguageBox();
            showAllLanguageButtons();
        }
    })
});