let nom = prompt("Ingrese su nombre");
let corr = prompt("Ingrese su correo");
let age = prompt("Ingrese su edad");

const listaSaldo = [];
const listaCuota = [];
let creditoN = prompt("¿Cuántos créditos desea?");

do {
    let saldo = prompt("¿Cuánto dinero necesita?");
    listaSaldo.push (saldo);
    console.log (listaSaldo.length);

    let quot = prompt("¿Cuánto plazo necesita?");
    listaCuota.push (quot);
    console.log (listaCuota.length);

    let int = 1.04;

    function calcular (saldo, quot, int) {
        return saldo*int/quot
    }

    let listaResultado = [];
    let resultado = calcular(saldo,quot,int);
    listaResultado.push (resultado);
    console.log (listaResultado.length)

    alert(resultado);
    
} while (listaSaldo.length !=creditoN)

alert ("Gracias!");





