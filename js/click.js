const sound = document.getElementById("ui-sound");
sound.volume = 0.15;


const portfolioSound = document.getElementById("portfolio-sound");
const contactSound = document.getElementById("contact-sound");

document.addEventListener("click", (e) => {
  // Ищем только "кнопки":
  // - настоящий <button>
  // - любые элементы с .btn
  // - ссылка Kontakt с классом .nav__link--primary
  const btn = e.target.closest("button, .btn, .nav__link--primary");
  if (!btn) return;

  // Особенный звук №1 — portfolio
  if (btn.classList.contains("portfolio-sound")) {
    portfolioSound.currentTime = 0;
    portfolioSound.play().catch(() => {});
    return;
  }

  // Особенный звук №2 — contact
  if (btn.classList.contains("contact-sound")) {
    contactSound.currentTime = 0;
    contactSound.play().catch(() => {});
    return;
  }

  // Общий звук для остальных "кнопок"
  sound.currentTime = 0;
  sound.play().catch(() => {});
});
