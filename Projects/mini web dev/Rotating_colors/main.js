console.log("Welcome to Rotator");

const start=document.querySelector(".Start");
const stop=document.querySelector(".Stop");

const rotor= document.querySelector('.Rotator');



let func_start = ()=>{
    console.log("Start Rotating");
    rotor.style.animation = "rotate 0.0489s linear infinite";
};
let func_stop = ()=>{
    console.log("Stop Rotating");
    rotor.style.animation = "none";
};

start.addEventListener('click',()=>{
    func_start();
});

stop.addEventListener('click',()=>{
    func_stop();
});

