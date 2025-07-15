let date = document.getElementById('date');
let time = document.getElementById('time');
let timeZone = document.getElementById('dayAndNight')
let day = document.getElementById('day')
let second = document.getElementById('second')

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


function getTime() {
    // get date and  time 
    const newDate = new Date();
    let currentHours = newDate.getHours();
    let currentMinutes = newDate.getMinutes();
    let currentSecond = newDate.getSeconds();

    // AM PM conversion
    let dayAndNight = currentHours>12? "PM":"AM"

    // hour format 24 to 12  
    if (currentHours > 12) {
        currentHours = currentHours - 12;
    }
    else if(currentHours ===0){
        currentHours =12;
    }

    if (currentHours < 10) {
        currentHours = `0${currentHours}`
    }
    // minute format 
    if (currentMinutes < 10) {
        currentMinutes = `0${currentMinutes}`
    }

    // secong format 
    if (currentSecond < 10) {
        currentSecond = `0${currentSecond}`
    }

    date.textContent = `${newDate.getDate()}  ${month[newDate.getMonth()]}, ${newDate.getFullYear()}`

    time.textContent = `${currentHours} : ${currentMinutes} :`
    timeZone.textContent = dayAndNight;
    day.textContent = days[newDate.getDay()];
    second.textContent = currentSecond;
}

// call function every 1s 
setInterval(() => {
    getTime();
}, 1000);