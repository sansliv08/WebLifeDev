const countdownEl = document.getElementById('countdown');
const countdownElFinished = document.getElementById('countdown-finished');

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const mins = document.getElementById('mins');
const secs = document.getElementById('secs');

let countDown = '';

    const formatTime = (time) => {
        return time < 10 ? `0${time}` : time;
    }

const updateCountDown =(deadline) => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime; //milliseconds

    //calculate days, hours, mins, secs from timeDifference
    let calSecs = Math.floor(timeDifference/1000) % 60;
    let calMins = Math.floor(timeDifference/1000/60) % 60;
    let calHours = Math.floor(timeDifference/1000/60/60) % 24;
    let calDays = Math.floor(timeDifference/1000/60/60/24);

    days.textContent = formatTime(calDays);
    hours.textContent = formatTime(calHours);
    mins.textContent = formatTime(calMins);
    secs.textContent = formatTime(calSecs);

    if(timeDifference < 0) {
        countdownEl.hidden = true;
    } else {
        countdownEl.hidden = false;
    }
}

countDown = (targetDate) => {
    setInterval(() => updateCountDown(targetDate), 1000);
}

const targetDate = new Date("Aug 01 2024 00:00");
countDown(targetDate);



