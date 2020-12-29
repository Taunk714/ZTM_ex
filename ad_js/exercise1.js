
// For all of these, what is the value of a when the function gets called with the alert()

//#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);  // 5
}
alert(a); // 5