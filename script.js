window.onscroll = ScrollProgress;

function ScrollProgress() {
  let scroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (scroll / height) * 100;
  document.getElementById("BAR").style.width = scrolled + "%";
}



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

function toggleTextVal() {
  document.getElementById("csgo").style.display = "none";
  document.getElementById("lol").style.display = "none";
  document.getElementById("fortnite").style.display = "none";
  document.getElementById("Val").style.display = "block";

}

function toggleTextCsgo() {
  document.getElementById("lol").style.display = "none";
  document.getElementById("fortnite").style.display = "none";
  document.getElementById("Val").style.display = "none";
  document.getElementById("csgo").style.display = "block";
}

function toggleTextLol() {
  document.getElementById("fortnite").style.display = "none";
  document.getElementById("Val").style.display = "none";
  document.getElementById("csgo").style.display = "none";
  document.getElementById("lol").style.display = "block";
}

function toggleTextFortnite() {
  document.getElementById("Val").style.display = "none";
  document.getElementById("csgo").style.display = "none";
  document.getElementById("lol").style.display = "none";
  document.getElementById("fortnite").style.display = "block";
}

document.getElementById("ValDefault").focus();
document.getElementById("ValDefault").style.border = "none";
document.getElementById("ValDefault").click();

var poze = new Array("img/flavian_s.png", "img/pham_s.png", "img/vali_s.png", "img/tobi_s.png", "img/butiger_s.png", "img/panait_s.png", "img/SORIN_s.png", "img/nikita_s.png");
var description = new Array("FLAVIAN ESTE CEO-UL THE BOULANGEES. PE LANGA ACEASTA POZITIE IMPORTANTA ESTE SI JUCATOR LA TOATE ECHIPELE DIN ACEASTA ORGANIZATIE. DAR ASTA NU ESTE TOT! ESTE SI CEL CARE SE OCUPA DE CONTENT CREATION CUM AR FI VIDEOCLIPURI PE YOUTUBE SAU ACEST SITE", "PHAM ESTE GOATUL ECHIPEI DE VALORANT SI DE CSGO. UN ADEVARAT STAR PLAYER. CE IL AJUTA ASA MULT? FAPTUL CA ESTE VIETNAMEZ.", "VALI AKA VAVALUTZU AKA VALY_VM ESTE UN JUCATOR MEDIOCRU DAR IN SCHIMB SE PRICEPE LA DESIGN PHOTO. IN ACEST MOMENT EL SE OCUPA CU CONSTRUIREA TB HEADQUARTERS. BAFTA GOGO!", "TOBI ESTE UN MEMBRU MAI SPECIAL. PE LANGA CA ESTE SPECIAL ED SI-A DISTRUS CARIERA DIN CAUZA ADICTIEI DE ALCOOL. CU TOATE ACESTEA EL RAMANE UN STALP IMPORTANT AL ACESTEI ORGANIZATII. SA SPERAM CA SE VA INTOARCE LA STAREA LUI NORMALA!", "BUTIGER LA FEL CA TOBI ESTE ATRAS DE BOSCHETAREALA, FAPT CE A DUS LA PIERDEREA PARULUI DE PE CAP. UN ALT JUCATOR PROMITATOR DISTRUS DE VICII", "GANGSTER. ATAT AVEM DE ZIS DESPRE ACEST MEMBRU. CONDITIA FIZICA SI PERSONALITATEA DURA IL FACE UN BODYGUARD PERFECT. SE ZICE CA ODATA A BATUT UN COVOR.", "SORIN ESTE UN MEMBRU CONTROVERSAT. TOATA LUMEA ESTE LA UN PAS DE A O LUA RAZNA DIN CAUZA FOLOSIRII NEADECVATE A TOALETEI DE CATRE SORIN. CU TOATE ACESTEA ESTE UN MEMBRU FOARTE IMPORTANT DEOARECE ESTE UN MEDIC IN DEVENIRE, DAR MAI IMPORTANT, UN JUCATOR DE LEAGUE OF LEGENDS DE TALIE INALTA INTRUCAT JOACA AATROX.", "NIKITA AKA MOLDOVEANU DIN THE BOULANGEES NU FACE PREA MULTE. TOTUSI ATUUL LUI ESTE CONTENTUL, DEOARECE MOLDOVENII ZIC LUCRURI IESITE DIN COMUN. ESTE INDEMANATIC CU LOPATA DECI ESTE DE MARE AJUTOR LUI VALI LA CONSTRUCTIA TB HEADQUARTERS.");

let id = null;
let id2 = null;
let foto = document.getElementById("Member-Photo");
let member_d = document.getElementById("Member-Description");
foto.style.opacity = 1;
member_d.style.opacity = 1;
function choosePic() {
  let x = 1;
  clearInterval(id);
  id = setInterval(frame, 20);
  function frame() {
    if (x <= 0.0) {
      clearInterval(id);
      var randomNum = 0;
      randomNum = Math.floor(Math.random() * poze.length);
      document.getElementById("Member-Photo").src = poze[randomNum];
      document.getElementById("Member-Description").innerHTML = description[randomNum];
      var y = 0;
      clearInterval(id2);
      id2 = setInterval(frame2, 20);
      function frame2() {
        if (y >= 1) { clearInterval(id2); }
        else {
          y += 0.1;
          y = Math.round(y * 10) / 10;
          foto.style.opacity = y;
          member_d.style.opacity = y;
        }
      }
    }
    else {
      x -= 0.1;
      x = Math.round(x * 10) / 10;
      foto.style.opacity = x;
      member_d.style.opacity = x;
    }
  }
}

let numeArray = [];
let prenumeArray = [];
let emailArray = [];

localStorage.removeItem('numeArray');
localStorage.removeItem('prenumeArray');
localStorage.removeItem('emailArray');


function submitform() {


  if(numeArray.length!=0)
  {
    localStorage.setItem('numeArray', JSON.stringify(numeArray));
  }
  if(localStorage.getItem('numeArray')!=null)
  {
    numeArray = JSON.parse(localStorage.getItem('numeArray'));
  }
  numeArray.push(document.getElementById("nume").value);
  localStorage.setItem('numeArray', JSON.stringify(numeArray));

  if(prenumeArray.length!=0)
  {
    localStorage.setItem('prenumeArray', JSON.stringify(prenumeArray));
  }
  if(localStorage.getItem('prenumeArray')!=null)
  {
    prenumeArray = JSON.parse(localStorage.getItem('prenumeArray'));
  }
  prenumeArray.push(document.getElementById("prenume").value);
  localStorage.setItem('prenumeArray', JSON.stringify(prenumeArray));

  if(emailArray.length!=0)
  {
    localStorage.setItem('emailArray', JSON.stringify(emailArray));
  }
  if(localStorage.getItem('emailArray')!=null)
  {
    emailArray = JSON.parse(localStorage.getItem('emailArray'));
  }
  emailArray.push(document.getElementById("email").value);
  localStorage.setItem('emailArray', JSON.stringify(emailArray));

  document.getElementById("formularTB").reset();
}

function afisareInscrisi() {
  for(let i=0;i<numeArray.length;i++)
    {
      console.log(numeArray[i]);
      console.log(prenumeArray[i]);
      console.log(emailArray[i]);
      console.log("");
    }
}
