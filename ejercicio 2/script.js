//Ejercicio 2:
//Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números

// Variables: impares, nInicial, nActual
//--- Primero declaro la nIncial
//--- Hacemos una funcion (contadorImpares)
//--- Marcamos tambien que el nInicial es igual que nActual
//--- Usamos un for para repetir 50 veces
//--- Dentro un If para saber el nº impar usando el resto
//--- Si no se cumple la condicion aumentamos el nActual
//--- Mostrarlo en consola

let nInicial= 75
function contadorImpares(nInicial) {
    let nActual= nInicial;

    for (let i = 0; i < 50; i++) {
        if (nActual % 2 !== 0) {
            console.log(nActual)
        }
        nActual++;
    }
    
}

contadorImpares(nInicial)

