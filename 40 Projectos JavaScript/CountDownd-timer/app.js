const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2023, 8, 24, 11, 30, 0);

const year = futureDate.getFullYear();
let mount = futureDate.getMonth();
mount = months[mount];
const hours = futureDate.getHours();
const minute = futureDate.getMinutes();
const date = futureDate.getDate();
//console.log(date);
let weekday = futureDate.getDay();
weekday = weekdays[weekday];
giveaway.textContent = `giveaway ends on ${year} ${mount} ${weekday} ${hours}:${minute}am`;
//console.log(futereDate)
//console.log(items);


/* furuture Time in ms */

const futureTime = futureDate.getTime();
console.log(futureTime);

function getRemainigTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    console.log(t);

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecont = 1000;

    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / oneSecont);

    const writeDays = document.querySelector('.days');
    const writeHours = document.querySelector('.hours');
    const writeMinutes = document.querySelector('.minutes');
    const writeSeconds = document.querySelector('.seconds');
    writeDays.textContent = days;
    writeHours.textContent = hours;
    writeMinutes.textContent = minutes;
    writeSeconds.textContent = seconds;



    console.log(days)
    console.log(hours)
    console.log(minutes)
    console.log(seconds)
    console.log(today)

}

let countdown = setInterval(getRemainigTime, 1000);

getRemainigTime();
