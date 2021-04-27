import {diffDates} from './common.js';

const audio = new Audio('beepbeep.mp3');
const time = document.getElementById('time');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
let  timeMS = 0;
let diff = null;

time.addEventListener('change', ()=>{
    let timeAr = time.value.split(':');
    timeMS = ((timeAr[0]*60 + timeAr[1])*60 + timeAr[2])*1000;
})

function updateTime(){
    diff = diffDates(time.value, '00:00:01', ['hours', 'minutes', 'seconds']);

    diff.hours = diff.hours < 10 ? '0'+ diff.hours : diff.hours;
    diff.minutes = diff.minutes < 10 ? '0'+ diff.minutes : diff.minutes;
    diff.seconds = diff.seconds < 10 ? '0'+ diff.seconds : diff.seconds;

    time.value = `${diff.hours}:${diff.minutes}:${diff.seconds}`;
    if (time.value === '00:00:00'){
        audio.play();
    }
}

function stopTimer(){
    // const timerId =  setInterval(updateTime, 1000); - при такой записи
    // функция не вызывалась. Не поняла, почему. Поэтому использовала костыль 
    // в виде перебора возможных значений id
    
    for (var i = 1; i < 99999; i++){
        clearInterval(i);
    }
    diff=null;
}

startBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    if (!diff){
        setInterval(updateTime, 1000);
        setTimeout(stopTimer, timeMS);
        
    }
});

stopBtn.addEventListener('click', (event)=>{
    stopTimer();
    event.preventDefault();
});
