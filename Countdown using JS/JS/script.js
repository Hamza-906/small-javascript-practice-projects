const date = '13 Sep 2025 4:40 PM';
let endDate = document.getElementById('endDate').innerText = date;
const inputs = document.querySelectorAll('input');

const clock = () =>{
    const end = new Date(date);
    const now = new Date();
    const diff = (end - now)/1000;

    if(diff < 0){
        return
    }
    inputs[0].value = Math.floor(diff/60/60/24);
    inputs[1].value = Math.floor((diff/60/60)%24);
    inputs[2].value = Math.floor((diff/60)%60);
    inputs[3].value = Math.floor((diff)%60);

}

clock();

setInterval(clock, () => 1000)

/* 1days = 24hours
   1hours = 60mins
   1min = 60secs */