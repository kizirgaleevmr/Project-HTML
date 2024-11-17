/* Подключение слайдера для блока clients */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    // spaceBetween: 30,
    autoplay: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    // Включаем управление с клавиатуры
    grabCursor: true,
    keyboard: {
        enable: true,
        onlyInViewport: true,
        pageUpDown: true,
    }
});

var swiper = new Swiper(".mySwiperProducts", {
    slidesPerView: 1,
    spaceBetween: 30,
    // autoplay: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "fraction",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    // Включаем управление с клавиатуры
    grabCursor: true,
    keyboard: {
        enable: true,
        onlyInViewport: true,
        pageUpDown: true,
    }
});

// событие для бургер меню
document.querySelector(".user-nav__item--burger").addEventListener("click", (event) => {
    document.querySelector(".site-nav__list").classList.toggle("show-menu");
    document.querySelector(".user-nav__item--burger").classList.toggle("active");
});

