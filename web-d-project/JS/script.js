function displayTime(){
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });    
    let hours = date.getHours();
    const minutes  = date.getMinutes().toString().padStart(2,'0');
    const AmPm = hours>=12 ? 'pm' : 'am';
    hours = hours % 12 || 12;
    let dateElement = document.getElementById("date");
    console.log(`${day} ${month}, ${hours}:${minutes}${AmPm}`);
    dateElement.innerHTML = `${day}<sup>th</sup> ${month}, ${hours}:${minutes}${AmPm}`;
}
displayTime();
function EquipmentAvailabe(){
    const elements = document.querySelectorAll(".fa-circle");
    const spaceStatus = document.getElementById("space-available")
    const elementArray = Array.from(elements);
    const randomNo = Math.random();
    const random = Math.ceil(randomNo*100);
    const shuffled = elementArray.sort(()=> Math.random() -.5);
        shuffled.slice(0,random).forEach(element => {
            element.style.color = '#f65251';
            element.style.opacity = 1;  
        });
    console.log(shuffled);
    spaceStatus.innerHTML = `${random}%`;
}
EquipmentAvailabe();