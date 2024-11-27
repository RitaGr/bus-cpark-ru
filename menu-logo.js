document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector('.menu__icon use');
    const menuIconWrapper = document.querySelector('.menu__icon');
    const menuBarWrapper = document.querySelector('.menu');
    const initialIcon = './svg/svg-sprite.svg#icon-logo'; // Default bus icon
    const arrowUpIcon = './svg/svg-sprite.svg#icon-arrow-up'; // Arrow up icon

    const isMobile = () => window.innerWidth <= 768; // Define mobile breakpoint (adjust if needed)

    window.addEventListener('scroll', () => {
        if (isMobile()) return; // Exit the function if it's on mobile

        const currentScrollY = window.scrollY;

        if (currentScrollY > 0) {
            // User scrolled down: make the icon sticky and change to arrow-up
            menuIconWrapper.classList.add('menu__icon-sticky');
            menuBarWrapper.classList.add('menu__bar-sticky');
            menuIcon.setAttribute('xlink:href', arrowUpIcon);
        } else {
            // User scrolled to the top: remove sticky and reset to bus icon
            menuIconWrapper.classList.remove('menu__icon-sticky');
            menuBarWrapper.classList.remove('menu__bar-sticky');
            menuIcon.setAttribute('xlink:href', initialIcon);
        }
    });

    // Make the icon clickable to scroll back to the top
    menuIconWrapper.addEventListener('click', () => {
        if (isMobile()) return; // Prevent the scroll-to-top functionality on mobile
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
