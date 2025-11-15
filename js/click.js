const sound = document.getElementById("ui-sound");

// Мягкий премиальный звук
sound.volume = 0.25;

document.addEventListener("click", (e) => {
    const isButton =
        e.target.closest("button") ||
        e.target.closest("a") ||
        e.target.closest(".btn");

    if (isButton) {
        sound.currentTime = 0;
        sound.play().catch(() => {});
    }
});
