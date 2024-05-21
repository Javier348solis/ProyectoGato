let nombre = document.getElementById("nombre")
let contrasena = document.getElementById("contrasena")
let jugador = document.getElementById("jugador")
let btn = document.getElementById("btn")

let usersGame = JSON.parse(localStorage.getItem("usersGame")) || []

btn.addEventListener("click", function (e) {
    e.preventDefault
    let user = {
        nombre: nombre.value,
        contrasena: contrasena.value,
        jugador: jugador.value,    
    }
    usersGame.push(user)
    console.log(usersGame)
    alert("Succesfully registered user")
    

    (localStorage.setItem("usersGame", JSON.stringify(usersGame))) || []
})
// window.location.href= "index.html"