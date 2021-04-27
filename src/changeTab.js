const links = document.querySelectorAll('.nav-link');
const timerForm = document.getElementById('timer');
const dateCalcForm = document.getElementById('datecalc');


links.forEach(link => link.addEventListener('click', clickHandler));

function clickHandler(event) {
    changeTab(event);
    changeActiveClass(event);
}

function changeActiveClass(event) {
    document.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');
}

function changeTab(event) {
    switch(event.target.textContent){
        case 'Калькулятор дат': 
            timerForm.style.display = 'none';
            dateCalcForm.style.display = 'block';
            break;
        case 'Таймер': 
            timerForm.style.display = 'block';
            dateCalcForm.style.display = 'none';
            break;
    }
    
}