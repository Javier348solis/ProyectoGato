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
let mostrarCuadrito = document.getElementById("mostrarCuadrito")
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
   if (condition) {
       pcJuega()  
   }
   if (e.target.innerHTML=="❌") {
    mostrarCuadrito.classList.remove("js2")
    mostrarCuadrito.classList.add("js")
   }else if(e.target.innerHTML=="⭕"){
    mostrarCuadrito.classList.remove("js")
    mostrarCuadrito.classList.add("js2")
   }
   }
   function pcJuega() {
    let casillasVacias = Array.from(celdas)
    casillasVacias.filter(vacias=>vacias.innerHTML=="")
    let alea  = Math.floor(Math.random() * casillasVacias.length)
    casillasVacias[alea].innerHTML="⭕" 
   }
   function winner(a, b, c) {
    if (celdas[a].innerHTML.length && celdas[a].innerHTML == celdas[b].innerHTML && celdas[a].innerHTML==celdas[c].innerHTML) {
         console.log("GANA");  
         alert("Ganaste") 
    }
   }


  






   let idioma = document.getElementById("valorIdioma")
   let descri = document.getElementById("descri")
   let turnoDe = document.getElementById("turnoDe")
   let rules = document.getElementById("rules")
    let textoING="Welcome, are you ready to defeat Michi Pepe? Welcome, are you ready to defeat Michi Pepe?. First you must know the basic rules: 1. You have to choose between the *❌* or *⭕*. 2. You can't cheat. 2. You can't cheat. 3. If you have three *❌* or *⭕* either horizontally, vertically or diagonally, you win! Good luck..."
    let textESP ="Bienvenido, estas listo para derrotar al Michi Pepe? Primero debes de saber las reglas básicas: 1. Tienes que escoger entre la *❌* or *⭕*. 2. No puedes hacer trampa. 3. Si tienes tres *❌* o *⭕* bien sea horizontal, vertical o diagonalmente, tu ganas!. Buena suerte..."
    let textturnoESP = "Turno de" 
    let textturnoENG = "Turn of" 
    let titleING="Rules"
    let titleESP="Reglas"
   idioma.addEventListener("change",()=>{
       const valorIdioma = idioma.value
       console.log(valorIdioma);
    if (valorIdioma=="esp") {
        descri.innerHTML=textESP
        turnoDe.innerHTML=textturnoESP
        rules.innerHTML=titleESP
    }else{
        descri.innerHTML=textoING
        turnoDe.innerHTML=textturnoENG
        rules.innerHTML 
    }
   })
  
