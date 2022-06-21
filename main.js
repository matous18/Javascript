//Creamos la clase simulacion
class Simulacion {
    constructor(nombre, edad, saldo, cuota) {
        this.nombre = nombre;
        this.edad = parseFloat(edad);
        this.saldo = parseFloat(saldo);
        this.cuota = parseFloat(cuota);
    }
}


//Definimos el array listaResultados
var listaResultados = [];
const interes = 1.04;

//Le pedimos la información al usuario y la validamos
do {
    var checkP = prompt("Ingrese continuar para simular o salir para terminar")
    if (checkP === "salir" || checkP === "SALIR" || checkP === "Salir"){
        alert ("Gracias!");
        break;
    }else{
        var nombreS = prompt("Ingrese su nombre");
        var edadS = prompt("Ingrese su edad");
        if (edadS <= 17){
            alert ("No tiene la edad requerida para continuar.");
            break;
        }else{
            var saldoC = prompt("¿Cuánto dinero necesita?");
            var cuotaC = prompt("¿Cuánto plazo necesita?");
            function calcularCuota () {
                return saldoC*interes/cuotaC;
            }
            var result = calcularCuota(saldoC, interes, cuotaC);
            listaResultados.push(new Simulacion(nombreS, edadS, saldoC, cuotaC, result));
        }
    }    
} while (checkP != "salir" || checkP != "SALIR" || checkP != "Salir")

console.log(listaResultados);

//Mostramos la información solicitada.

for (var resultado of listaResultados) {
    let container = document.createElement("div");
    container.innerHTML = `<h2> Hola ${resultado.nombre}! Aquí está tu resultado:</h2>
                            <p> Monto: ${resultado.saldo}</p>
                            <p> Plazo: ${resultado.cuota}</p>
                            <p> Cuota: ${resultado.result}</p>`;
    document.body.appendChild(container);
}

document.getElementsByName("h2").innerHTML = "Gracias!";

//Agregamos eventos al form.

let input1 = document.getElementById("nombre");
input1.addEventListener('input', () => {
    console.log(input1.value);
});

let input2 = document.getElementById("correo");
input2.addEventListener('input', () => {
    console.log(input2.value);
});

let input3 = document.getElementById("monto");
input3.addEventListener('input', () => {
    console.log(input3.value);
});

let input4 = document.getElementById("cuotas");
input4.addEventListener('input', () => {
    console.log(input4.value);
});

let input5 = document.getElementById("edad");
input5.addEventListener('input', () => {
    console.log(input5.value);
});

function validarForm (e) {
    e.preventDefault();
    console.log("Se enció el formulario.");
}

let miFormulario = document.getElementsByClassName("formPrin");
miFormulario.addEventListener("submit", validarForm);


