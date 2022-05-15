const navSlide = () => {
    if (window.matchMedia("(min-width: 500px)").matches) {
        const menu_icon = document.querySelector('.phone-menu-icon');
        const nav = document.querySelector('.links');
        const navLinks = document.querySelectorAll('.links li');

        menu_icon.addEventListener('click', () => {
            nav.classList.toggle('nav-active');

            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                }
                else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
                }
            });
        });
    }

}



navSlide();

function toggleTextVal(){
    document.getElementById("csgo").style.display = "none";
    document.getElementById("lol").style.display = "none";
    document.getElementById("fortnite").style.display = "none";
    document.getElementById("Val").style.display = "block";
 
  }

function toggleTextCsgo(){
    document.getElementById("lol").style.display = "none";
    document.getElementById("fortnite").style.display = "none";
    document.getElementById("Val").style.display = "none";
    document.getElementById("csgo").style.display = "block";
  }

function toggleTextLol(){
    document.getElementById("fortnite").style.display = "none";
    document.getElementById("Val").style.display = "none";
    document.getElementById("csgo").style.display = "none";
    document.getElementById("lol").style.display = "block";
  }

function toggleTextFortnite(){
    document.getElementById("Val").style.display = "none";
    document.getElementById("csgo").style.display = "none";
    document.getElementById("lol").style.display = "none";
    document.getElementById("fortnite").style.display = "block";
  }

document.getElementById("ValDefault").focus();
document.getElementById("ValDefault").style.border="none";
document.getElementById("ValDefault").click();