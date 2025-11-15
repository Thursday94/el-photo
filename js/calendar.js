document.addEventListener("DOMContentLoaded", function () {
    const sessionDateInput = document.getElementById("session-date");

    const fp = flatpickr("#calendar", {
        inline: true,
        locale: "pl",
        dateFormat: "Y-m-d",     // формат для disable и value

        disable: ["2025-11-15"],

        onDayCreate: function (dObj, dStr, fp, dayElem) {
            const date = dayElem.dateObj;
            const formatted = fp.formatDate(date, "Y-m-d");
            if (formatted === "2025-11-15") {
                dayElem.classList.add("busy-day");
            }
        },

        // 🔥 когда пользователь выбирает дату:
        onChange: function (selectedDates, dateStr, instance) {
            if (!sessionDateInput) return;
            if (!selectedDates.length) {
                sessionDateInput.value = "";
                return;
            }

            const date = selectedDates[0];

            // Красиво форматируем по-польски, например: 15 listopada 2025
            const monthsPl = [
                "stycznia", "lutego", "marca", "kwietnia",
                "maja", "czerwca", "lipca", "sierpnia",
                "września", "października", "listopada", "grudnia"
            ];

            const d = date.getDate();
            const m = monthsPl[date.getMonth()];
            const y = date.getFullYear();

            sessionDateInput.value = `${d} ${m} ${y}`;
        }
    });

    const toggle = document.querySelector(".js-calendar-toggle");
    const panel  = document.querySelector(".calendar-panel");

    if (toggle && panel) {
        toggle.addEventListener("click", () => {
            panel.classList.toggle("calendar-panel--open");
            toggle.classList.toggle("open");
        });
    }
});
