let oRangeWrap = document.querySelector('.range-wrap');
let oRangeText = oRangeWrap.querySelector('.range-text');
/*let aRangeVals = ['Today', '2 days', '3 days', '4 days', '5 days', '6 days', '7 days'];*/
document.querySelector('[type="range"]').addEventListener('input', function () {
    let nVal = this.value - 1;
    /*oRangeText.textContent = aRangeVals[nVal];*/
    oRangeWrap.style.setProperty('--left', `${(100 / 7) * nVal}%`);
    oRangeText.style.transform = `translatex(-${(100 / 7) * nVal}%)`;
});

let oRangeWrap1000 = document.querySelector('.range-wrap-1000');
let oRangeText1000 = oRangeWrap1000.querySelector('.range-text');
document.querySelector('[type="range"]').addEventListener('input', function () {
    let nVal = this.value - 1;
    oRangeWrap1000.style.setProperty('--left', `${(100 / 6) * nVal}%`);
    oRangeText1000.style.transform = `translatex(-${(100 / 6) * nVal}%)`;
});

let oRangeWrap640 = document.querySelector('.range-wrap-640');
let oRangeText640 = oRangeWrap640.querySelector('.range-text');
document.querySelector('[type="range"]').addEventListener('input', function () {
    let nVal = this.value - 1;
    oRangeWrap640.style.setProperty('--left', `${(100 / 4) * nVal}%`);
    oRangeText640.style.transform = `translatex(-${(100 / 4) * nVal}%)`;
});



/*burger*/
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-navigation-mobile');
    const menu1 = document.querySelector('.header');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuCloseItem1 = document.querySelector('.header_active');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header-navigation-mobile_active');
        menu1.classList.add('header_active');

    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header-navigation-mobile_active');
        menu1.classList.remove('header_active');
    });

    menuCloseItem1.addEventListener('click', () => {
        menu.classList.remove('header-navigation-mobile_active');
        menu1.classList.remove('header_active');
    });
}());

