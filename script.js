 
function updateClock() {
    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    document.getElementById("time").innerText = h + ":" + m + ":" + s;
    document.getElementById("date").innerText = now.toDateString();     
}

setInterval(updateClock, 1000);
updateClock();

const hours = new Date().getHours();
let message = "Hello 💖";

if (hours < 12)  message = "Good Morning ☀🌤";
else if (hours < 18) message = "Good Afternoon 🌺🌸";
else message = "Good Night 🌘🌙";

document.getElementById("greet").innerText = message;