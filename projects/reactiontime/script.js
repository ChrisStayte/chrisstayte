var start = null;
var quickestTime = null;

function resizeGame() {
    var center = document.getElementsByClassName("game-bounds").item(0);

    center.style.width = (document.body.clientWidth - 50) + "px";
    center.style.height = (document.body.clientHeight - 50) + "px";
}

resizeGame();

if (window.attachEvent) {
    window.attachEvent('onresize', function () {
        resizeGame();
    });
} else if (window.addEventListener) {
    window.addEventListener('resize', function () {
        resizeGame();
    });
}


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split(''),
        color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeShapeAppear() {
    var shape = document.getElementById('shape');

    var top = Math.random() * 400,
        left = Math.random() * 400,
        size = (Math.random() * 200) + 10;

    shape.style.display = "block";
    shape.style.top = top + "px";
    shape.style.left = left + "px";
    shape.style.width = size + "px";
    shape.style.height = size + "px";
    shape.style.backgroundColor = getRandomColor();

    if (Math.random() > 0.5) {
        shape.style.borderRadius = "50%";
    } else {
        shape.style.borderRadius = "0%";
    }

    start = new Date().getTime();
}

function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() * 2000); // Max Length 2 Seconds
}

document.getElementById('shape').onclick = function () {
    var end = new Date().getTime(),
        timeTaken = (end - start);

    document.getElementById('shape').style.display = "none";
    document.getElementById('time-taken').innerHTML = timeTaken / 1000 + 's';

    if (quickestTime) {
        if ((end - start) < quickestTime) {
            quickestTime = timeTaken;
        }
    } else {
        quickestTime = timeTaken;
    }

    document.getElementById('quickest-time').innerHTML = quickestTime / 1000 + 's';

    appearAfterDelay();
};
appearAfterDelay();
