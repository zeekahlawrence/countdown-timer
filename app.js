const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentyear =  new Date().getFullYear;

const targetDate = new Date('January 1 ${currentyear + 1} 00:00:00');


//update countdown time
function updatecountdowntime() {
    const currentDate = new Date();
    const diff = targetDate - currentDate;
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60 ) % 24;
    const m = Math.floor(diff / 1000 / 60 ) % 60;
    const s = Math.floor(diff / 1000 ) % 60;
    
    
    days.innerHTML = d;
    hours.innerHTML = h <10 ? '0' + h : h;
    minutes.innerHTML = m <10 ? '0' + m : m;
    seconds.innerHTML = s <10 ? '0' + s : s;



    }

    setInterval(updatecountdowntime, 1000);