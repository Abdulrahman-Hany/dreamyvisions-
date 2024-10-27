const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});


let dropdown = document.querySelector(".dropdown");
let dropdownIcon = document.querySelector(".dropdown i"); 
let menu = document.querySelector(".menu");
let menuMobile = document.querySelector(".menu-mobile");

dropdown.addEventListener("click", () => {
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
        dropdownIcon.classList.remove("fa-angle-down");
        dropdownIcon.classList.add("fa-angle-up");
    } else {
        dropdownIcon.classList.remove("fa-angle-up");
        dropdownIcon.classList.add("fa-angle-down");
    }
});
let dropdownMobile = document.querySelector(".dropdownMobile");
let dropdownIconMobile = document.querySelector(".dropdownMobile i"); 

dropdownMobile.addEventListener("click", ()=> {
    menuMobile.classList.toggle("active");
    if (menuMobile.classList.contains("active")) {
        dropdownIconMobile.classList.remove("fa-angle-down");
        dropdownIconMobile.classList.add("fa-angle-up");
    } else {
        dropdownIconMobile.classList.remove("fa-angle-up");
        dropdownIconMobile.classList.add("fa-angle-down");
    }
    
})

let closeIcon = document.querySelector(".close-icon");
let silderMenu = document.querySelector("#silderMenu");
let mainContent = document.querySelector(".all-bluer");
closeIcon.addEventListener("click", ()=> {
    silderMenu.classList.toggle("active");
    mainContent.classList.remove("blur");
});


let bars = document.querySelector(".bars");
let navbar = document.querySelector(".navbar");
bars.addEventListener("click", () => {
    silderMenu.classList.toggle("active");
    mainContent.classList.add("blur");
})


/*----------------------------------------------------------------*/

const chatWidget = document.getElementById('chatWidget');
const whatsappBtn = document.querySelector('.whatsapp-btn');
const closeChat = document.getElementById('closeChat');

// Show the chat widget when WhatsApp button is clicked
whatsappBtn.addEventListener('click', () => {
    chatWidget.style.display = 'block';
});
// Hide the chat widget when the close button is clicked
closeChat.addEventListener('click', () => {
    chatWidget.style.display = 'none';
});