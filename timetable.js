document.addEventListener("DOMContentLoaded", () => {
    const metroItems = Array.from(document.querySelectorAll('.schedule__column:first-child .schedule__item'));
    const parkItems = Array.from(document.querySelectorAll('.schedule__column:last-child .schedule__item'));

    const metroTimeElement = document.querySelector('.schedule__station--metro .schedule__time');
    const metroNoteElement = document.querySelector('.schedule__station--metro .schedule__time-note');
    const parkTimeElement = document.querySelector('.schedule__station--park .schedule__time');
    const parkNoteElement = document.querySelector('.schedule__station--park .schedule__time-note');

    // Функция для нахождения ближайшего рейса
    function findNextTrip(scheduleItems) {
        const now = new Date();
        const currentTime = now.getHours() * 60 + now.getMinutes(); // Текущее время в минутах с полуночи

        for (const item of scheduleItems) {
            const [hours, minutes] = item.textContent.split(':').map(Number);
            const tripTime = hours * 60 + minutes;

            if (tripTime > currentTime) {
                return {
                    time: item.textContent,
                    minutesUntil: tripTime - currentTime,
                };
            }
        }

        // Если рейсов больше нет
        return {
            time: '--:--',
            minutesUntil: null,
        };
    }

    // Функция обновления ближайших рейсов
    function updateNextTrips() {
        // Рассчитываем ближайший рейс от Планерная
        const nextMetroTrip = findNextTrip(metroItems);
        if (nextMetroTrip.minutesUntil !== null) {
            metroTimeElement.textContent = nextMetroTrip.time;
            metroNoteElement.textContent = `Через ${nextMetroTrip.minutesUntil} минут${getMinutesText(nextMetroTrip.minutesUntil)}`;
        } else {
            metroTimeElement.textContent = '--:--';
            metroNoteElement.textContent = 'Нет рейсов';
        }

        // Рассчитываем ближайший рейс от Кантри Парк
        const nextParkTrip = findNextTrip(parkItems);
        if (nextParkTrip.minutesUntil !== null) {
            parkTimeElement.textContent = nextParkTrip.time;
            parkNoteElement.textContent = `Через ${nextParkTrip.minutesUntil} минут${getMinutesText(nextParkTrip.minutesUntil)}`;
        } else {
            parkTimeElement.textContent = '--:--';
            parkNoteElement.textContent = 'Нет рейсов';
        }
    }

    // Функция склонения "минут"
    function getMinutesText(minutes) {
        if (minutes % 10 === 1 && minutes % 100 !== 11) return 'у';
        if (minutes % 10 >= 2 && minutes % 10 <= 4 && (minutes % 100 < 10 || minutes % 100 >= 20)) return 'ы';
        return '';
    }

    // Запуск обновления каждые 60 секунд
    updateNextTrips();
    setInterval(updateNextTrips, 60000); // Интервал 1 минута
});
