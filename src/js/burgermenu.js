const burgerButton = document.querySelector('.burgermenu--js');
const navigation = document.querySelector('.nav--js');
const body = document.querySelector('html');
const navigationLinks = document.querySelectorAll('.nav__a');
let isMenuVisible = false;

const openMenu = () => {
    body.classList.add('no-scroll');
    navigation.classList.add('nav--active');
    isMenuVisible = true;
}

const closeMenu = () => {
    if(body.classList.contains('no-scroll')) body.classList.remove('no-scroll');
    if(navigation.classList.contains('nav--active')) navigation.classList.remove('nav--active');
    isMenuVisible = false;
}

if(burgerButton) burgerButton.addEventListener('click', () => {
    !isMenuVisible ? openMenu() : closeMenu();
});

if(navigationLinks) navigationLinks.forEach(navigationLink => {
    navigationLink.addEventListener('click', () => {
        if(body.classList.contains('no-scroll')) 
            body.classList.remove('no-scroll');
            isMenuVisible = false;
        if(navigation.classList.contains('nav--active')) 
            navigation.classList.remove('nav--active');
            isMenuVisible = false;
    });
});

window.addEventListener('resize', closeMenu);