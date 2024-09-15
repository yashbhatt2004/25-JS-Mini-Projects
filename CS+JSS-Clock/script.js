//Selecting All Elements which will be needed for functioning of Clock
let secondHand=document.querySelector('.second-hand');
let minuteHand=document.querySelector('.minute-hand');
let hourHand=document.querySelector('.hour-hand');
let meridiem=document.querySelector('.meridiem');
let timelapse=document.querySelector('.timelapse');

//Following Functions are used for moving the hands of clock as required
function moveHoursHand(){
    hours=(hours+1)%24
    let degrees=hours/12*360+90;
    hourHand.style.transition = hours === 0 ? 'none' : `all ${0.05/lapseSpeed}s`; //To remove transitions whenever hour hand strikes 0
    hourHand.style.transform = `rotate(${degrees}deg)`; 
    if (hours===0 || hours===12){ //required to change Meridiem according to Time
        if (hours===0)
            meridiem.textContent="A.M.";
        else
            meridiem.textContent="P.M.";
        setTimeout(() => hourHand.style.transition = `all ${0.05/lapseSpeed}s`, 50/lapseSpeed);
    }
}
function moveMinutesHand()
{
    minutes=(minutes+1)%60
    let degrees=minutes/60*360+90;
    minuteHand.style.transition =  minutes === 0 ? 'none' : `all ${0.05/lapseSpeed}s`; //To remove transitions whenever minute hand strikes 0
    minuteHand.style.transform = `rotate(${degrees}deg)`;
    if (minutes===0){ //signals a hour is up i.e. 60 minutes have passed
        setTimeout(() => minuteHand.style.transition = `all ${0.05/lapseSpeed}s`, 50/lapseSpeed);
        moveHoursHand();
    }
}
function moveSecondsHand(){
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            seconds=(seconds+1)%60
            let degrees=seconds/60*360+90;
            secondHand.style.transition =  seconds === 0 ? 'none' : `all ${0.05/lapseSpeed}s`; //To remove transitions whenever second hand strsecond
            secondHand.style.transform = `rotate(${degrees}deg)`;
            if (seconds===0){ //signals a minute is up i.e. 60 seconds have passed
             
                setTimeout(() => secondHand.style.transition = `all ${0.05/lapseSpeed}s`, 50/lapseSpeed);
                moveMinutesHand();
            }
            else{
                secondHand.style.transform = `rotate(${degrees}deg)`; 
            }
            resolve();
        },1000/lapseSpeed) //Timeout is readjusted in case of relapse
    })
}
async function clock(){
    //Initialize Transition Property for all hands
    secondHand.style.transition = `all ${0.05/lapseSpeed}s`;
    minuteHand.style.transition = `all ${0.05/lapseSpeed}s`;
    hourHand.style.transition = `all ${0.05/lapseSpeed}s`;
    while (true){
        await moveSecondsHand();
    }
}
//Initializing Clock using pre-defined class Date to initialize all hands of clock 
let d=new Date();
let seconds= d.getSeconds();
let minutes= d.getMinutes();
let hours= d.getHours();
let secDegrees=seconds/60*360+90;
secondHand.style.transform=`rotate(${secDegrees}deg)`;
let minDegrees=minutes/60*360+90;
minuteHand.style.transform=`rotate(${minDegrees}deg)`;
let hourDegrees=hours/12*360+90;
hourHand.style.transform=`rotate(${hourDegrees}deg)`;
if (hours>12){
    meridiem.textContent="P.M.";
}
else{
    meridiem.textContent="A.M.";
}
//Initialize Lapse Speed To 1 which is default speed of clock
let lapseSpeed=1;

//Add Event Listener to timelapse button which can be used to change Lapse Speed of Clock whenever clicked
timelapse.addEventListener('click',()=>{
    lapseSpeed=parseFloat(prompt("Enter Lapse Speed"));
    if (isNaN(lapseSpeed)) lapseSpeed = 1;
})

//used to start clock
clock();