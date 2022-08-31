
let element = document.querySelectorAll(".square");
 
num = 0;

array = [];

for(let i =0; i<element.length;i++){
  element[i].addEventListener("click", function() {
  element[i].innerHTML = num % 2 !== 0 ? "O" : "X";
  array.push(element[i].id)
num++

firstRow = element[0].innerHTML == "X" && element[0].innerHTML == element[1].innerHTML && element[0].innerHTML == element[2].innerHTML ? alert("winner X!")  : element[0].innerHTML ==  "O" && element[0].innerHTML == element[1].innerHTML && element[0].innerHTML == element[2].innerHTML ? alert("winner O!") : null

secondRow = element[3].innerHTML == "X" && element[3].innerHTML == element[4].innerHTML && element[3].innerHTML == element[5].innerHTML ? alert("winner X!") : element[3].innerHTML ==  "O" && element[3].innerHTML == element[4].innerHTML && element[3].innerHTML == element[5].innerHTML ? alert("winner O!") : null

thirdRow = element[6].innerHTML == "X" && element[6].innerHTML == element[7].innerHTML && element[6].innerHTML == element[8].innerHTML ? alert("winner X!") : element[6].innerHTML ==  "O" && element[6].innerHTML == element[7].innerHTML && element[6].innerHTML == element[8].innerHTML ? alert("winner O!") : null
 
fourthRow = element[0].innerHTML == "X" && element[0].innerHTML == element[3].innerHTML && element[0].innerHTML == element[6].innerHTML ? alert("winner X!") : element[0].innerHTML ==  "O" && element[0].innerHTML == element[3].innerHTML && element[0].innerHTML == element[6].innerHTML ? alert("winner O!") : null    
    
fifthRow = element[1].innerHTML == "X" && element[1].innerHTML == element[4].innerHTML && element[1].innerHTML == element[7].innerHTML ? alert("winner X!") : element[1].innerHTML ==  "O" && element[1].innerHTML == element[4].innerHTML && element[1].innerHTML == element[7].innerHTML ? alert("winner O!") : null
    
sixthRow = element[2].innerHTML == "X" && element[2].innerHTML == element[5].innerHTML && element[2].innerHTML == element[8].innerHTML ? alert("winner X!") : element[2].innerHTML ==  "O" && element[2].innerHTML == element[5].innerHTML && element[2].innerHTML == element[8].innerHTML ? alert("winner O!") : null    
    
seventhRow = element[0].innerHTML == "X" && element[0].innerHTML == element[4].innerHTML && element[0].innerHTML == element[8].innerHTML ? alert("winner X!") : element[0].innerHTML ==  "O" && element[0].innerHTML == element[4].innerHTML && element[0].innerHTML == element[8].innerHTML ? alert("winner O!") : null
    
eighthRow = element[2].innerHTML == "X" && element[2].innerHTML == element[4].innerHTML && element[2].innerHTML == element[6].innerHTML ? alert("winner X!") : element[2].innerHTML ==  "O" && element[2].innerHTML == element[4].innerHTML && element[6].innerHTML == element[2].innerHTML ? alert("winner O!") : null
  
function buttonDisable(){
  for(let i =0; i<element.length;i++){
      element[i].disabled = true;
    }
}

if(element[i].innerHTML !== ""){
    element[i].disabled = true;  
    element[i].style.color="black"
   }  
    
switch(element.value) {
    case firstRow:
     buttonDisable()
    break;
    case secondRow:
     buttonDisable()
    break;
    case thirdRow:
     buttonDisable()
    break;
    case fourthRow:
     buttonDisable()
    break;
    case fifthRow:
     buttonDisable()
    break;
    case sixthRow:
     buttonDisable()
    break;
    case seventhRow:
     buttonDisable()
    break;
    case eighthRow:
     buttonDisable()
    break;
    default:
    if(array.length == 9){
      alert("Tie!")
    }
    
  }

});
  
let btn = document.createElement("button");
  btn.className = "btn"
let showMoves = document.getElementById("show")
let el = document.querySelectorAll(".btn")

showMoves.addEventListener("click", function(){
  for(let k=i;k<array.length;k++){
    btn.innerHTML = "Go to move " + Number(array[i]);
btn.addEventListener("click", function () {
  element[array[i]].style.color = "rgb(198, 21, 21)";
  element[array[i]].style.fontFamily= 'Titan One';
  
});
document.body.appendChild(btn);
  }
    
});

} 
 
let reset = document.getElementById("newGame")
reset.addEventListener("click", function(){
    [...document.getElementsByClassName("square")].forEach(reset => reset.innerHTML = ""); 
    [...document.getElementsByClassName("square")].forEach(reset => reset.disabled = false);
  [...document.getElementsByClassName("square")].forEach(reset => reset.style.backgroundColor = "white");
  [...document.getElementsByClassName("btn")].forEach(reset => reset.remove());
  [...document.getElementsByClassName("square")].forEach(reset => reset.style.fontFamily = "Rajdhani,sans-serif");
  [...document.getElementsByClassName("square")].forEach(reset => reset.style.fontStyle = "sans-serif");
   num = 0; 
   array.length = 0;

}); 
