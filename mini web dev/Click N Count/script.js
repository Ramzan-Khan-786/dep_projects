console.log("Welcome in Click N Count");

let cnt = 0;
const count = document.querySelector('.count');
const up_btn = document.getElementById('up');
const down_btn = document.getElementById('down');

let lastTap = 0;


up_btn.addEventListener('click', () => {
    cnt++; 
    count.textContent = cnt; 
});

down_btn.addEventListener('click', () => {
    cnt--; 
    count.textContent = cnt; 
});


count.addEventListener('click', () => {
    const now = new Date().getTime(); 
    const timeDiff = now - lastTap; 
    
    if (timeDiff < 300 && timeDiff > 0) { 
        cnt = 0; 
        count.textContent = cnt; 
    }
    
    lastTap = now; 
});
