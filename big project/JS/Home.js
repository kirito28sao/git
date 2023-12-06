var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
    },
);

function scrollToSection() {
    
    var targetElement = document.getElementById("readmore");

    targetElement.scrollIntoView({ behavior: 'smooth' });
}

function redirectToPage() {
    
    var targetPageUrl = '../Html/Create.html'; 

    
    window.location.href = targetPageUrl;
}