let boton = document.getElementById("boton")
let ipn = document.getElementById("ipn")

let cuadrados0 = document.getElementById("ipn0")
let cuadrados1 = document.getElementById("ipn1")
let cuadrados2 = document.getElementById("ipn2")
let cuadrados3 = document.getElementById("ipn3")
let cuadrados4 = document.getElementById("ipn4")
let cuadrados5 = document.getElementById("ipn5")
let cuadrados6 = document.getElementById("ipn6")
let cuadrados7 = document.getElementById("ipn7")
let cuadrados8 = document.getElementById("ipn8")
let reini = document.getElementById("reini")

let celdas = document.getElementsByClassName("celda")

let=isPlayerOne=true

 
boton.addEventListener("click", function (e) {
    e.preventDefault
}) 
let tabla = [cuadrados0, cuadrados1, cuadrados2, cuadrados3,cuadrados4, cuadrados5, cuadrados6, cuadrados7, cuadrados8]
    for (let index = 0; index < celdas.length; index++) {
        celdas[index].addEventListener("click",userMove)
    }
   function userMove(e) {
    let tabla = e.target.innerHTML;
    if(!tabla.length) {
        e.target.innerHTML = isPlayerOne? '❌' : '⭕'
        isPlayerOne = !isPlayerOne 
        
        winner(0,1,2);
        winner(3,4,5);
        winner(6,7,8);
        winner(0,3,6);
        winner(1,4,7);
        winner(2,5,8);
        winner(6,4,2);
        winner(8,4,0);
   }  
   }
   function winner(a, b, c) {
    if (celdas[a].innerHTML.length && celdas[a].innerHTML == celdas[b].innerHTML && celdas[a].innerHTML==celdas[c].innerHTML) {
         console.log("GANA");  
         alert("Ganaste") 
    }
   }

   function mostrarGanador() {
    
   }