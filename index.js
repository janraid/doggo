document.querySelector("button").addEventListener("click", buttonlistener);
function buttonlistener() {
    setTimeout(1000);
    document.querySelector("button").setAttribute("class", "invisible");
    visible();
}
function visible() {
    setTimeout(9000);
    document.querySelector("img").setAttribute("class", "visible");    
}