setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hourRotation = 30 * hours + minutes / 2;
    const minutesRotation = 6 * minutes;
    const secondsRotation = 6 * seconds;

    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minutesRotation}deg)`;
    second.style.transform = `rotate(${secondsRotation}deg)`;
}, 1000);