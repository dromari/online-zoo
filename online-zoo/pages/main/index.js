/*burger*/
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-navigation-mobile');
    const menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header-navigation-mobile_active')
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header-navigation-mobile_active')
    });
}());

