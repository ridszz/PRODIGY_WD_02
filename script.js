var isStop = true;
var s = 0;
var min = 0;
var hr = 0;

function start() {
    if (isStop == true) {
        isStop = false;
        timer();
    }
}

function timer() {
    s = parseInt(s);
    min = parseInt(min);
    hr = parseInt(hr);
    if (isStop == false) {
        s++;
        if (s == 60) {
            s = 0;
            min++;
        }
        if (min == 60) {
            min = 0;
            hr++;
        }
        show.innerHTML = (hr < 10 ? "0" + hr : hr) + " : " + (min < 10 ? "0" + min : min) + " : " + (s < 10 ? "0" + s : s);
        setTimeout(timer, 1000);
    }
}

function stop() {
    isStop = true;
}

function reset() {
    isStop = true;
    s = 0;
    min = 0;
    hr = 0;
    show.innerHTML = "00 : 00 : 00";
    resetLap();
}

function getTimer() {
    return (hr < 10 ? "0" + hr : hr) + " : " + (min < 10 ? "0" + min : min) + " : " + (s < 10 ? "0" + s : s);
}

function lap() {
    if (isStop == false) {
        var Li = document.createElement("li");
        Li.innerHTML = getTimer();
        document.getElementById("laps").appendChild(Li);
    }
}

function resetLap() {
    document.getElementById("laps").innerHTML = "";
}

// Event Listeners
document.getElementById("startStop").addEventListener("click", function () {
    if (isStop) {
        start();
        this.textContent = "Stop";
    } else {
        stop();
        this.textContent = "Start";
    }
});

document.getElementById("lap").addEventListener("click", lap);
document.getElementById("reset").addEventListener("click", reset);
