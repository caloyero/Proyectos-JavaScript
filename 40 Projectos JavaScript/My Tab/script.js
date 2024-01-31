const bnt = document.querySelectorAll('.btn');
const article = document.querySelectorAll('.content');
const containerBtn = document.querySelector('.container-btn');
containerBtn.addEventListener('click', (e) => {
    const id = e.target.dataset.id;

    if (id) {
        bnt.forEach((option) => {
            option.classList.remove('active-btn');
        }); e.target.classList.add('active-btn');

        article.forEach((art) => {
            art.classList.remove('active');
        })
        const element = document.getElementById(id);
        element.classList.add('active');
        //console.log(element);
    }

});

/* boton despleglable */

const btnDesplegable = document.querySelector('.btn-hamburger');
const list = document.querySelector('.list-container');

btnDesplegable.addEventListener('click', () => { list.classList.toggle('show-list'); console.log('ok') })




/*  */
let oneSecond = 1000;
let hours = 0//oneHour / oneMinute;
let minutes = 0//oneMinute * oneSecond;
let seconds = 0;
const second = document.querySelector('.seconds');
const minute = document.querySelector('.minutes');
const hour = document.querySelector('.hours');
function reloj() {
    let todaysHour = new Date().getSeconds();

    if (seconds >= 59) {
        seconds = 0;
        minutes++;
        console.log(minutes + ' : mt');
        minute.textContent = minutes;
    } else if (minutes >= 59) {
        minutes = 0;
        hours++;
        console.log(hours);
        hour.textContent = hours;
    } else {
        seconds++;
        console.log(seconds + ': s');
        second.textContent = seconds;
    }


    //console.log(todaysHour);


}
const weekday = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
const yearMounth = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

function date() {
    const todays = document.querySelector('.today');
    const date = new Date();
    let mount = date.getMonth();
    let year = date.getFullYear();
    let dayCalendar = date.getDate();
    let day = date.getDay();
    let hour = date.getHours();
    //let day = date.getDays();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    time

    todays.textContent = `${year} ${yearMounth[mount]} ${dayCalendar} ${weekday[day]} ${hour} : ${minutes} : ${seconds} `;
    //console.log(`${today}  ${hour} : ${minutes} : ${seconds}`)
}

//let toDayHour = new Date().getHour();



let time = setInterval(/* reloj, */ date, 1000)

reloj();
