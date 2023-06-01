//Ejercicio 1:
//Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase

//--- Variables= frase, cuenta, resultado, letra
//
//--- Crear una funcion (nLetra)
//--- Dentro de la funcion iniciar la variable "cuenta"
//--- Despues un for para recorrer la frase
//--- dentro del for un if para ver si se repite la letra
//--- recoger el valor de cuenta
//--- Mostrarlo en pantalla

function nLetra(frase, letra) {
    let cuenta = 0;
    for (let i = 0; i < frase.length; i++) {
        if (frase[i] === letra) {
            cuenta++;
        }
        
    }
    return cuenta
}

let frase = "Manuel pasa el rampup";
let letra = "a";
let resultado = nLetra(frase, letra);
console.log (letra + " se repite " + resultado + " veces")