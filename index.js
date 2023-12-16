// // // document.querySelector("button").addEventListener("click",clicked)

// // // function clicked(){
// // //    alert("button is pressed")
// // // }
// // // const buttons = document.querySelectorAll('button'); // select all buttons

// // // buttons.forEach(button => {
// // //   button.addEventListener('click', handleClick); // add 'click' event listener to each button
// // // });

// // // function handleClick() {
// // //   alert('Button clicked!'); // display alert when button is clicked
// // // }
// // // const buttons = document.querySelectorAll('button'); // select all buttons

// // // for (let i = 0; i < buttons.length; i++) {
// // //   buttons[i].addEventListener('click', handleClick); // add 'click' event listener to each button
// // // }

// // // function handleClick() {
// // //   alert('your Button clicked!'); // display alert when button is clicked
// // // }
// const buttons = document.querySelectorAll('button'); // select all buttons

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', function() {
//     // add unique event listener to each button
//     switch(i) {
//       case 0:
//         alert('Button W clicked!');
//         break;
//       case 1:
//         alert('Button a clicked!');
//         break;
//       case 2:
//         alert('Button s clicked!');
//         break;
//       case 3:
//         alert('Button d clicked!');
//         break;
//       case 4:
//         alert('Button j clicked!');
//         break;
//       case 5:
//         alert('Button k clicked!');
//         break;
//       default:
//         alert('Button l clicked!');
//         break;
//     }
//   });
// }
// // document.querySelector(".drum").addEventListener("click",abc)
// // function abc(){
// //     alert("Button is pressed")
// // }







// // const buttons = document.querySelectorAll('button');
// // for (let i = 0; i < buttons.length; i++) {
// //   buttons[i].addEventListener('click', handleClick); // add 'click' event listener to each button
// // }

// // function handleClick() {
// //   alert('your Button clicked!'); // display alert when button is clicked
// // }
//Detecting Button Press

var numberOfButoon = document.querySelectorAll(".drum").length;
for (var i = 0; i<numberOfButoon; i++) {
    document.querySelectorAll("button")[i].addEventListener("click",handleClick)
function handleClick() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimition(buttonInnerHTML);
}
}

// Detecting Key pressed
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimition(event.key);
});

function makeSound(key) {

    switch (key) {
        case "w":
           var tom1 = new Audio("sounds/tom-1.mp3");
           tom1.play();
        break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;
        
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;
    default: console.log(buttonInnerHTML);
    }
}

function buttonAnimition(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
    }