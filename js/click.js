const sound = document.getElementById("ui-sound");
sound.volume = 0.25;

const portfolioSound = document.getElementById("portfolio-sound");
const contactSound = document.getElementById("contact-sound");

document.addEventListener("click", (e) => {
  const btn = e.target.closest("button, a, .btn");
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

  // Общий звук
  sound.currentTime = 0;
  sound.play().catch(() => {});
});
