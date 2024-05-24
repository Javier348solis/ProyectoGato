// Se llama a los objetos para darle funcion a las celdas y a llos botones
const boton = document.getElementById("boton");
const ipn = document.getElementById("ipn");
const cuadrados = Array.from(document.getElementsByClassName("celda"));
const mostrarCuadrito = document.getElementById("mostrarCuadrito");
const idioma = document.getElementById("valorIdioma");
const descri = document.getElementById("descri");
const turnoDe = document.getElementById("turnoDe");
const regla = document.getElementById("regla");
const dosJugadores = document.getElementById("changeroles");

// Variables de jugadores 1 vs 1
let isPlayerOne = true;
let activarDosJugadores = false;

// Textos para cambiar el idioma de español a ingles o viceversa
const texto = {
    ING: "Welcome, are you ready to defeat Michi Pepe? Welcome, are you ready to defeat Michi Pepe?. First you must know the basic rules: 1. You have to choose between the *❌* or *⭕*. 2. You can't cheat. 2. You can't cheat. 3. If you have three *❌* or *⭕* either horizontally, vertically or diagonally, you win! Good luck...",
    ESP: "Bienvenido, estas listo para derrotar al Michi Pepe? Primero debes de saber las reglas básicas: 1. Tienes que escoger entre la *❌* or *⭕*. 2. No puedes hacer trampa. 3. Si tienes tres *❌* o *⭕* bien sea horizontal, vertical o diagonalmente, tu ganas!. Buena suerte...",
    turnoESP: "Turno de",
    turnoING: "Turn of",
    reglaESP: "Reglas",
    reglaING: "Rules"
};

// Funcion para que se pueda juegar usuario vs usuario 
const userMove = (e) => {
    const tabla = e.target.innerHTML;
    if (!tabla) {
        e.target.innerHTML = isPlayerOne ? "❌" : "⭕";
        isPlayerOne = !isPlayerOne;
        checkWinner();
        if (!activarDosJugadores) pcJuega();
    }
    mostrarCuadrito.classList.toggle("js", e.target.innerHTML === "❌");
    mostrarCuadrito.classList.toggle("js2", e.target.innerHTML === "⭕");
};
  //funcion para permitirle a la computadora jugar. de la linea 44 a la 45 lo que permite es que si la computadora no esta jugando, entonces el humano juegue
const pcJuega = () => {
    const casillasVacias = cuadrados.filter((celda) => !celda.innerHTML);
    if (casillasVacias.length > 0) {
        const alea = Math.floor(Math.random() * casillasVacias.length);
        casillasVacias[alea].innerHTML = "⭕";
        isPlayerOne = true; 
        checkWinner();
    }
};
     //Aqui se define las combinaciones ganadoras de las matrices o arreglos de arreglos horizontal, vertical o diagonalmente
const checkWinner = () => {
    const winningCombos = [
        [0, 1, 2], 
        [3, 4, 5], 
        [6, 7, 8], // Horizontal
        [0, 3, 6], 
        [1, 4, 7], 
        [2, 5, 8], // Vertical
        [0, 4, 8], 
        [2, 4, 6] // Diagonal
    ];
    //Declarar el gane mediante las casillas y tirar un alert. Lo mismo para el empate
    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cuadrados[a].innerHTML && cuadrados[a].innerHTML === cuadrados[b].innerHTML && cuadrados[a].innerHTML === cuadrados[c].innerHTML) {
            alert("¡Ganaste!");
            return;
        }
    }
    if (cuadrados.every((celda) => celda.innerHTML)) {
        alert("¡Empate!");
        
    }
};

// Event Listeners
boton.addEventListener("click", (e) => {
    e.preventDefault();
});

for (const celda of cuadrados) {
    celda.addEventListener("click", userMove);
}
//Declarar los objetos para asi cambiar el idioma de ingles a español o viceversa
idioma.addEventListener("change", () => {
    const valorIdioma = idioma.value;
    descri.innerHTML = valorIdioma === "esp" ? texto.ESP : texto.ING;
    turnoDe.innerHTML = valorIdioma === "esp" ? texto.turnoESP : texto.turnoING;
    regla.innerHTML = valorIdioma === "esp" ? texto.reglaESP : texto.reglaING;
});
 //Activar la funcion de 1 vs 1 || humanos vs humano  
dosJugadores.addEventListener("click", () => {
    activarDosJugadores = true;
});
