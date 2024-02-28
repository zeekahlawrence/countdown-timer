const targetDate = new Date();
targetDate.setDate(targetDate.getDate()+ 10);

function updatecountdown(){
    const currentDate = new Date();
    const diff = targetDate - currentDate;
    if (diff <= 0) {
        clearInterval(timerInterval);
        document.querySelector('.countdown').innerHTML = 'Giveaway is over'
    } else{
        const d = Math.floor(diff / 1000 / 60 / 60 / 24);
        const h = Math.floor(diff / 1000 / 60 / 60 ) % 24;
        const m = Math.floor(diff / 1000 / 60 ) % 60;
        const s = Math.floor(diff / 1000 ) % 60;
        
        document.getElementById('days').innerHTML = d;
        document.getElementById('hours').innerHTML = h;
        document.getElementById('minutes').innerHTML = m;
        document.getElementById('seconds').innerHTML =s;
    }
}

const timerInterval = setInterval(updatecountdown,1000);

const endDate = targetDate.toLocaleDateString('en-US',{weekday:"long", day:"numeric", month:"long", year:"numeric",});
document.querySelector('.deadline').innerHTML = endDate;