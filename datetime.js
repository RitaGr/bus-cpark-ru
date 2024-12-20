document.addEventListener('DOMContentLoaded', () => {
    const dateTimeInput = document.getElementById('datetime');
    const topicSelect = document.getElementById('topic');
    const datetimeGroup = document.getElementById('datetime-group');

    topicSelect.addEventListener('change', () => {
        if (topicSelect.value === 'late-arrival') {
            datetimeGroup.classList.remove('complaint__group-hidden');
        } else {
            datetimeGroup.classList.add('complaint__group-hidden');
        }
    });

    const now = new Date();
    const formattedDateTime = formatDateTime(now);
    dateTimeInput.value = formattedDateTime;

    function formatDateTime(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    dateTimeInput.addEventListener('change', (event) => {
        const value = event.target.value;
        const [date, time] = value.split('T');
        const [year, month, day] = date.split('-');
        const formattedDate = `${day}/${month}/${year} ${time}`;
        console.log('Selected DateTime:', formattedDate);
    });
});







