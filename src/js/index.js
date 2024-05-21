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

boton.addEventListener("click", function (e) {
    e.preventDefault
}) 
let tabla = [cuadrados0, cuadrados1, cuadrados2, cuadrados3,cuadrados4, cuadrados5, cuadrados6, cuadrados7, cuadrados8]
cuadrados0.addEventListener("click", function (e) {
    e.preventDefault
    return "x"
})