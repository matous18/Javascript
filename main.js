let nom = prompt("Ingrese su nombre");
let corr = prompt("Ingrese su correo");
let saldo = prompt("¿Cuánto dinero necesita?");
let quot = prompt("¿Cuánto plazo necesita?");
let age = prompt("Ingrese su edad");
let int = 1.04;

function calcular (saldo, quot, int) {
    return saldo*int/quot
}

let resultado = calcular(saldo,quot,int);

alert(resultado);



