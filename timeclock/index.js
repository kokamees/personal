



function setTime() {

    const time = new Date();

    const hours = time.getHours().toString().padStart(2,0)
    const minutes = time.getMinutes().toString().padStart(2,0)
    const seconds = time.getSeconds().toString().padStart(2,0)
    
    const x = hours >= 12 ? "PM":"AM"

    
    const clock = document.getElementById("clockText");
    clock.textContent = `${hours}:${minutes}:${seconds} ${x}`
    
}


setTime();
setInterval(setTime, 1000)