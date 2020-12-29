var h3Text = document.getElementsByTagName('h3')[0];
var colorLeft = document.getElementById('color1');
var colorRight = document.getElementById('color2');
var body = document.getElementsByTagName('body')[0];

// h3.textContent = 
body.style.background = "linear-gradient(to right, " + colorLeft.value+ " ,"+ colorRight.value+")";
h3Text.textContent = "Left Color: " + colorLeft.value +" Right Color: "+ colorRight.value+";";

function gradientChange() {
    // body...
    h3TextChange();
    backgroundChange();
}

function h3TextChange() {
    // body...
    h3Text.textContent = "Left Color: " + colorLeft.value +"Right Color: "+ colorRight.value+";";
}

function backgroundChange() {
    // body...
    body.style.background = "linear-gradient(to right, " + colorLeft.value+ " ,"+ colorRight.value+")";
}

colorLeft.addEventListener("input", gradientChange);
colorRight.addEventListener("input",gradientChange);