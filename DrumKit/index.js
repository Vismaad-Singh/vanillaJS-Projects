
//detecting button press
let lengthOfTotalButtons = document.querySelectorAll(".drum").length;

for(let i=0;i<lengthOfTotalButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {

let buttonInnerHTML = this.innerHTML;
 makeSound(buttonInnerHTML);

    });

}



//detecting keyboard press
document.addEventListener("keypress" , function(e){
   makeSound(e.key)
});



function makeSound(key) {
    switch (key) {
        case "w":
             var audio = new Audio("sounds/crash.mp3");
    audio.play();
            break;
    
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
        break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
        break;
    
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
    
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
        break;
    
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
        break;
    
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
        break;
    
        
        default:
        console.log(buttonInnerHTML);
            break;
    }
}







// function HouseKeeper(name,age,yearsOfExperiance,prefferedArea,cleanHouse){
//     this.name = name;
//     this.age = age;
//     this.yearsOfExperiance = yearsOfExperiance;
//     this.prefferedArea = prefferedArea;
//     this.cleanHouse = function () {
//         alert("GO CLEAN THE HOUSE NOW!!")
//     }
// }
// const houseKeeper1 = new HouseKeeper("ram",25,12,["bathroom","bedroom"]);
// console.log(houseKeeper1.cleanHouse());





// let houseKeeper1 = {
//   name: "ram",
//   age: 25,
//   work: "gardner",
// };
// let houseKeeper2 = {
//   name: "sham",
//   age: 35,
//   work: "clothes",
// };
// function work() {
//   console.log(
//     houseKeeper2.name +
//       " is of " +
//       houseKeeper2.age +
//       " years and is here to work as a " +
//       houseKeeper2.work
//   );
// }
// work();
