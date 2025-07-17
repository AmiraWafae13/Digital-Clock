function updateclock(){
    const now =new Date();
    let hours = now.getHours();
    const meridien = hours >= 12 ? "PM":"AM";
    hours = hours % 12 || 12 ; 
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
const timeStrings = `${hours}:${minutes}:${seconds} ${meridien} `;
document.getElementById("clock").textContent = timeStrings;
}


updateclock();
setInterval(updateclock,1000);