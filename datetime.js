document.addEventListener('DOMContentLoaded', () => {
    const dateTimeInput = document.getElementById('datetime');
    const topicSelect = document.getElementById('topic');
    const datetimeGroup = document.getElementById('datetime-group');

    // Make the datetime picker visible for option late-arrival
    topicSelect.addEventListener('change', () => {
        if (topicSelect.value === 'late-arrival') {
            datetimeGroup.classList.remove('complaint__group-hidden');
        } else {
            datetimeGroup.classList.add('complaint__group-hidden');
        }
    });

    // Set current date and time in DD/MM/YYYY HH:mm format
    const now = new Date();
    const formattedDateTime = formatDateTime(now);
    dateTimeInput.value = formattedDateTime;

    // Format the date to DD/MM/YYYY HH:mm
    function formatDateTime(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    // Listen for changes and format the output as DD/MM/YYYY
    dateTimeInput.addEventListener('change', (event) => {
        const value = event.target.value;
        const [date, time] = value.split('T');
        const [year, month, day] = date.split('-');
        const formattedDate = `${day}/${month}/${year} ${time}`;
        console.log('Selected DateTime:', formattedDate);
    });
});







