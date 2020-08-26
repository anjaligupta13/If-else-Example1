const startingSeconds = 10;


let time = startingSeconds;
const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);


function updateCountdown() {
    let seconds;

    if (time == -1) {
        document.getElementById('countdownmsg').innerHTML = 'STOP';
        document.getElementById('countdownmsg').style.color = "black";
        document.getElementById('gogreen').style.backgroundColor = "red";
    }
    else {
        if (time == 10) {
            seconds = time;

            document.getElementById('gogreen').style.backgroundColor = "greenyellow";
            document.getElementById('countdownmsg').innerHTML='GO';
        }
        else {
            seconds = time % 30;
            document.getElementById('gogreen').style.backgroundColor = "greenyellow";
            document.getElementById('countdownmsg').innerHTML='GO';
        }


        countdownEl.innerHTML =  seconds;
        time--;
    }
}