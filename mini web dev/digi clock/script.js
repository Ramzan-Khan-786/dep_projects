function updateClock() {
    const currentDate = new Date();

    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = currentDate.getSeconds();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    
    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    console.log(`Hour: ${hour}, Minute: ${minute}, Second: ${second}`);

   
    const helement = document.querySelector('.hour');
    const melement = document.querySelector('.minute');
    const selement = document.querySelector('.second');

    helement.innerHTML = hour < 10 ? `0${hour}` : hour;   
    melement.innerHTML = minute < 10 ? `0${minute}` : minute; 
    selement.innerHTML = second < 10 ? `0${second}` : second; 

    // Update date elements
    const dayElement = document.querySelector('.day');
    const monthElement = document.querySelector('.month');
    const yearElement = document.querySelector('.year');

    dayElement.innerHTML = day < 10 ? `0${day}` : day;   
    monthElement.innerHTML = month < 10 ? `0${month}` : month; 
    yearElement.innerHTML = year;
}


setInterval(updateClock, Infinity);

updateClock();
