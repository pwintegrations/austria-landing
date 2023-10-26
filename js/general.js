const body = document.querySelector('body');
//Header - Menu
const menu = document.querySelector('#menu-toggle');
const menuMobile = document.querySelector('.mob-menu-block');
const toRewardBlock = document.querySelector('#reward-link');


const removeOverlay = () => {
    const overlay = document.querySelector('.menu-overlay');
    if (overlay)
        overlay.remove();
}
if(menu)
    menu.addEventListener('click', () => {
        body.classList.toggle('nav-open');
        if (!menu.classList.contains('open')) {
            menu.classList.add('open');
            menuMobile.classList.add('active');
            let overlay = document.createElement('div');
            overlay.classList.add('menu-overlay');
            overlay.addEventListener('click', (e) => {
                menu.classList.remove('open');
                menuMobile.classList.remove('active');
                body.classList.toggle('nav-open');
                removeOverlay();
            })
            document.querySelector('body').prepend(overlay);
        } else {
            menu.classList.remove('open');
            menuMobile.classList.remove('active');
            removeOverlay()
        }

    });

//Footer - Button Go to the top of the page
const buttonUp = document.querySelector('#button-up');
buttonUp.addEventListener('click', function () {
    window.scrollTo({top: 0});
});
