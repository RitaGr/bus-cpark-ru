document.addEventListener("DOMContentLoaded", () => {
    const panelTrigger = document.querySelector(".panel-container");
    const mainPanel = document.querySelector(".main-content__panel-container");
    const panelIcon = document.querySelector(".panel-container__panel-icon");
    const mainContent = document.querySelector(".main-content");
    const footerContent = document.querySelector(".footer");
    const map = document.querySelector(".map-mobile");
    const notificationContainer = document.querySelector(".notification-container__item");
    const mobileFooter = document.querySelector(".main-content__footer-mobile");
    if (!panelTrigger || !panelIcon) {
      console.error("Panel trigger or icon element not found.");
      return;
    }
  
    const isMobile = () => window.matchMedia("(max-width: 768px)").matches;
  
    panelTrigger.addEventListener("click", () => {
      if (isMobile()) {
        mainContent.classList.toggle("active");
        panelTrigger.classList.toggle("at-top");
        mainPanel.classList.toggle("visible");
        footerContent.classList.toggle("active");
        map.classList.toggle("hidden");
        notificationContainer.classList.toggle("hidden");
        mobileFooter.classList.toggle("visible");
      }
    });
    mainPanel.addEventListener("click", () => {
      if (isMobile()) {
        mainContent.classList.toggle("active");
        panelTrigger.classList.toggle("at-top");
        mainPanel.classList.toggle("visible");
        footerContent.classList.toggle("active");
        map.classList.toggle("hidden");
        notificationContainer.classList.toggle("hidden");
        mobileFooter.classList.toggle("visible");
      }
    });
  });
  
  
  