const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus= document.getElementById("focus");




function showTime(){
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();
    seconds = today.getSeconds();


    const amPm = hours >=12 ? 'PM' : 'AM';

hours %=12 || 12;


time.innerHTML= `${hours}<span> :</span> ${addZero(minutes)}<span> :</span>${addZero(seconds)}`;
setTimeout(showTime, 1000);

}
function addZero(n){
return (parseInt(n,10)<10 ? "0":"")+n;
}

function setBgGreeting(){
    let today = new Date();
    hour = today.getHours();
if(hour<12){
document.body.style.backgroundImage = "URL('/images/Morning.jpeg')";
greeting.textContent = "Good Morning";
}
else if(hour<18){
    document.body.style.backgroundImage = "URL('/images/afternoon.jpg')";
    greeting.textContent = "Good Afternoon";

}
else{
    document.body.style.backgroundImage = "URL('/images/Night.jpeg')";
    greeting.textContent = "Good Evening";

}

}




setBgGreeting();
showTime();
