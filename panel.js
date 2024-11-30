document.addEventListener("DOMContentLoaded", () => {
    const panelTrigger = document.querySelector(".panel-container");
    const panelIcon = document.querySelector(".panel-container__panel-icon");
    const mainContent = document.querySelector(".main-content");
    const footerContent = document.querySelector(".footer");
    const map = document.querySelector(".map-mobile");
    const notificationContainer = document.querySelector(".notification-container__item");
  
    if (!panelTrigger || !panelIcon) {
      console.error("Panel trigger or icon element not found.");
      return;
    }
  
    const isMobile = () => window.matchMedia("(max-width: 768px)").matches;
  
    panelTrigger.addEventListener("click", () => {
      if (isMobile()) {
        mainContent.classList.toggle("active");
        panelTrigger.classList.toggle("at-top");
        footerContent.classList.toggle("active");
        map.classList.toggle("hidden");
        document.body.classList.toggle("active");
        notificationContainer.classList.toggle("hidden");
      }
    });
  });
  
  
  