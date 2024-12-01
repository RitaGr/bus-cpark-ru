document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector('.menu__icon use');
    const menuIconWrapper = document.querySelector('.menu__icon');
    const menuBarWrapper = document.querySelector('.menu');
    const initialIcon = './svg/svg-sprite.svg#icon-logo';
    const arrowUpIcon = './svg/svg-sprite.svg#icon-arrow-up';

    const isMobile = () => window.innerWidth <= 768;

    window.addEventListener('scroll', () => {
        if (isMobile()) return;

        const currentScrollY = window.scrollY;

        if (currentScrollY > 0) {
            menuIconWrapper.classList.add('menu__icon-sticky');
            menuBarWrapper.classList.add('menu__bar-sticky');
            menuIcon.setAttribute('xlink:href', arrowUpIcon);
        } else {
            menuIconWrapper.classList.remove('menu__icon-sticky');
            menuBarWrapper.classList.remove('menu__bar-sticky');
            menuIcon.setAttribute('xlink:href', initialIcon);
        }
    });

    menuIconWrapper.addEventListener('click', () => {
        if (isMobile()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
