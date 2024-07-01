//code to make bubbles-------------------------------------
function makeBubble() {
    var clutter = "";

    for (var i = 0; i <= 143; i++) {
        var run = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${run}</div>`
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

//code for hits counts-------------------------------------

function newHit() {

    var run = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = run;

}

//code for Timer-------------------------------------------

var timer = 60;

function runTimer() {
    var timerInt = setInterval(function() {
        if (timer > 0) {

            timer--;
        } else {
            clearInterval(timerInt);
        }
        document.querySelector("#timerVal").textContent = timer;
    }, 1000);
}

//code for game score--------------------------------------






// Calling all the declared functions-----------------------

runTimer();
makeBubble();
newHit();