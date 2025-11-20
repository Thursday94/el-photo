const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector(".lightbox__image");
const lightboxClose = lightbox.querySelector(".lightbox__close");
const lightboxBackdrop = lightbox.querySelector(".lightbox__backdrop");

document.querySelectorAll(".portfolio-item img").forEach(img => {
    img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.classList.add("lightbox--active");
    });
});

function closeLightbox() {
    lightbox.classList.remove("lightbox--active");
    lightboxImg.src = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightboxBackdrop.addEventListener("click", closeLightbox);
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeLightbox();
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const trigger = window.innerHeight * 0.88;

    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
            el.classList.add("reveal--visible");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // запуск сразу
