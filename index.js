document.querySelector("button").addEventListener("click", buttonlistener);
function buttonlistener() {
    setTimeout(() => {
        document.querySelector("button").classList.add("invisible");
    }, 1000);
    setTimeout(() => {
        document.querySelector("img").setAttribute("class","visible");
    }, 3000);
    setTimeout(() => {
        document.querySelector("h1").setAttribute("class","afte");
    }, 5000);
    
}
