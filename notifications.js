document.addEventListener("DOMContentLoaded", () => {
    const notificationContainer = document.getElementById('notification-container');

    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification--${type}`;

        const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        icon.classList.add("notification__icon");

        const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
        if (type === "success") {
            use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "./svg/svg-sprite.svg#icon-check");
        } else if (type === "warning") {
            use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "./svg/svg-sprite.svg#icon-warning");
        } else if (type === "error") {
            use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "./svg/svg-sprite.svg#icon-error");
        }

        icon.appendChild(use);

        const messageText = document.createElement("p");
        messageText.textContent = message;

        notification.appendChild(icon);
        notification.appendChild(messageText);

        notification.addEventListener("click", () => {
            notification.remove();
        });

        notificationContainer.appendChild(notification);

        setTimeout(() => {
            if (notificationContainer.contains(notification)) {
                notification.remove();
            }
        }, 4000);
    }

    // Можно удалить вместе с кнопками
    document.querySelector("#admin-action-success").addEventListener("click", () => {
        showNotification("Успех! Ваше действие было выполнено.", "success");
    });

    document.querySelector("#admin-action-warning").addEventListener("click", () => {
        showNotification("Предупреждение! На это стоит обратить внимание.", "warning");
    });

    document.querySelector("#admin-action-error").addEventListener("click", () => {
        showNotification("Ошибка! Что-то не работает, попробуйте позже.", "error");
    });

    window.showNotification = showNotification;
});
