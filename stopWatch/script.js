// let counter = document.getElementById("timer")
// let seconds = 0;
// let minutes=0;
// let hours=0;

// let stopTimer = true;

// function startTimer(){
//     if(stopTimer===true){
//         stopTimer=false;
//         timerCycle();
        

//     }
// }


// function hello(){
//     if(stopTimer===false){
//         stopTimer = true;
      
        
//     }
// }

// function timerCycle(){
    
//     if(stopTimer==false){
//         seconds = parseInt(seconds);
//         minutes = parseInt(minutes);
//         hours = parseInt(hours);
        
        
//         seconds +=1;
//         if(seconds==60){
//             minutes+=1;
//             seconds=0;
//         }
//         if(minutes==60){
//             hours+=1;
//             minutes=0;
//             seconds=0;
//         }
//         if(seconds<10){
//             seconds='0'+seconds;
//         }
//         if(minutes<10){
//             minutes = '0'+minutes
//         }
//         if(hours<10){
//             hours ='0'+ hours
//         }

//         counter.innerHTML = hours +':'+minutes +':'+seconds;
//         setTimeout("timerCycle()",1000)
//     }
// }


// function resetTimer(){
//     counter.innerHTML = "00:00:00";

// stopTimer =true;
// hours=0;
// minutes=0;
// seconds=0;
// }

let numbers = [0, 3, 5];
let result = true;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 10) {
        result = false;
        break;
    }
}
console.log(result);