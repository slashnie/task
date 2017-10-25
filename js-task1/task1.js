var square = document.getElementsByClassName("square");
var color = [];

function getColor() {
    for (var i = 0; i < 10; i++) {
        color[i] = Math.floor(Math.random() * 256);
    }
    color.length = 10;
}

var div = [];
for (var u = 0; u < 9; u++) {
    div[u] = square[u];
}

function random() {
    div.sort(function () {
        return 0.5 - Math.random()
    });
}

function setColor() {
    div[3].style.backgroundColor = "rgb(" + color[1] + ',' + color[2] + ',' + color[3] + ")";
    div[6].style.backgroundColor = "rgb(" + color[4] + ',' + color[5] + ',' + color[6] + ")";
    div[8].style.backgroundColor = "rgb(" + color[7] + ',' + color[8] + ',' + color[9] + ")";
}

function clear() {
    div[3].style.backgroundColor = null;
    div[6].style.backgroundColor = null;
    div[8].style.backgroundColor = null;
}

var timer;

function begin() {
    clearInterval(timer);
    timer = setInterval(function () {
            clear();
            random();
            getColor();
            setColor();
        }
        , 1000);
}

function clearFlash() {
    clearTimeout(timer);
    clear();
}


