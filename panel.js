document.addEventListener("DOMContentLoaded", () => {
    const panelTrigger = document.querySelector(".main-content__panel-trigger");
    const mainElement = document.querySelector("main");

    if (!panelTrigger || !mainElement) {
        console.error("Panel trigger or main element not found.");
        return;
    }

    panelTrigger.addEventListener("click", () => {
        mainElement.classList.toggle("active");
    });
});
