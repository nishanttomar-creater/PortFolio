function updateProgressBar(barId, labelId, value) {
    var progressBar = document.getElementById(barId);
    var percentageLabel = document.getElementById(labelId);
    progressBar.style.width = value + "%";
    // percentageLabel.textContent = value + "%";
}

function animateProgressBar(barId, labelId, targetValue) {
    var value = 0;
    var interval = setInterval(function () {
        if (value >= targetValue) {
            clearInterval(interval);
        } else {
            value += 1;
            updateProgressBar(barId, labelId, value);
        }
    }, 20);
}


animateProgressBar("myProgressBar1", "myProgressBar1", 95);
animateProgressBar("myProgressBar2", "myProgressBar2", 90);
animateProgressBar("myProgressBar3", "myProgressBar3", 95);
animateProgressBar("myProgressBar4", "myProgressBar4", 90);
animateProgressBar("myProgressBar5", "myProgressBar5", 80);
