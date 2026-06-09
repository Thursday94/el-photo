const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector(".lightbox__image");
const lightboxClose = lightbox.querySelector(".lightbox__close");
const lightboxBackdrop = lightbox.querySelector(".lightbox__backdrop");
const prevBtn = lightbox.querySelector(".lightbox__prev");
const nextBtn = lightbox.querySelector(".lightbox__next");

const items = document.querySelectorAll(".portfolio-item");
const images = document.querySelectorAll(".portfolio-item img");

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
    lightbox.classList.add("lightbox--active");
}

function closeLightbox() {
    lightbox.classList.remove("lightbox--active");
}

function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
}

function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
}

// Открытие без перехода по ссылке
items.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        openLightbox(index);
    });
});

// Закрытие
lightboxClose.addEventListener("click", closeLightbox);
lightboxBackdrop.addEventListener("click", closeLightbox);

// Стрелки
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

// Клавиатура
document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("lightbox--active")) return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
});