function myFunction() {
var x = document.getElementById("myDiv");
    if (window.getComputedStyle(x).visibility === "hidden") {
    x.style.visibility = "visible";
}else{
    x.style.visibility = "hidden";
}
}

var t = document.getElementById('images__LL');
function start() {
    t.style.display = "block";
}