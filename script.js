const navSlide = () => {
    const menu_icon = document.querySelector('.phone-menu-icon');
    const nav = document.querySelector('.links');
    const navLinks = document.querySelectorAll('.links li');

    menu_icon.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else
            {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.5}s`;
            }
        });
    });

    
}

navSlide();

