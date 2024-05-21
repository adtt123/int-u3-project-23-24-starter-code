// Declare variables below to save the different divs of your story.
let beginning = document.querySelector(".story-opening")
let option1screen = document.querySelector(".option-one-screen")
let option2screen = document.querySelector(".option-two-screen")
let option1end = document.querySelector(".option-one-end")
let option2end = document.querySelector(".option-two-end")
let option_one = document.querySelector(".option-one")
let option_two = document.querySelector(".option-two")
let keep_going_btn = document.querySelector(".keep-going")
let falling_btn = document.querySelector(".falling")
let goHomeOne = document.querySelector(".go-back")
let goHomeTwo = document.querySelector(".go-backtoo")




// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.


option_one.addEventListener('click', function(){
  option1screen.style.display = "block";
  beginning.style.display = "none";
 });


option_two.addEventListener('click', function(){
  option2screen.style.display = "block";
  beginning.style.display = "none";
});

keep_going_btn.addEventListener('click', function(){
  option1screen.style.display = "none";
  option1end.style.display = "block";
});

goHomeOne.addEventListener('click', function(){
  option1end.style.display = "none";
  beginning.style.display = "block";
});


falling_btn.addEventListener('click', function(){
  option2end.style.display = "block";
  option2screen.style.display = "none";
 });

goHomeTwo.addEventListener('click', function(){
  option2end.style.display = "none";
  beginning.style.display = "block";
})