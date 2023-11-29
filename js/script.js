// Função slide de imagens

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


var radio = document.querySelector('.manual_btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 6000)

function proximaImg(){
    cont++

    if(cont > 4){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}

// Função do botão Mobile para menu

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

// Função dark mode

const chk = document.getElementById('chk');

// Toggle dark mode 

function toggleDarkMode() {
    document.body.classList.toggle('dark');
}

// Load light or dark mode
function loadTheme() {
    const darkMode = localStorage.getItem('dark');

    if (darkMode) {
        toggleDarkMode();
    }
}

loadTheme();

chk.addEventListener('change', function () {
    toggleDarkMode();

    // Save or remove dark mode
    localStorage.removeItem('dark');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark', 1);
    }
});

let subMenu = document.getElementById("subMenu");


// Função do botão perfil
function toggleMenuProfile() {
    subMenu.classList.toggle("open-menu");
}