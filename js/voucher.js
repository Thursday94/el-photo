document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".voucher__gallery");
    const grid = document.querySelector(".offer__grid");
    const cta = document.querySelector(".voucher__cta");

    if (!gallery && !grid && !cta) return;

    const images = document.querySelectorAll(".voucher__gallery img");
    const cards = document.querySelectorAll(".offer__card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            if (entry.target.classList.contains("voucher__gallery")) {
                images.forEach((img, i) => {
                    setTimeout(() => img.classList.add("active"), i * 150);
                });
            }

            if (entry.target.classList.contains("offer__grid")) {
                cards.forEach((card, i) => {
                    setTimeout(() => card.classList.add("active"), i * 180);
                });
            }

            if (entry.target.classList.contains("voucher__cta")) {
                cta?.classList.add("active");
            }
        });
    }, { threshold: 0.2 });

    if (gallery) observer.observe(gallery);
    if (grid) observer.observe(grid);
    if (cta) observer.observe(cta);
});