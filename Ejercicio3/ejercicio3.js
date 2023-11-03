const arreglo = [1, 2, 3, 4];

const inicio = 0;

const suma = arreglo.reduce((acumulador, valorActual) => acumulador + valorActual, inicio);

const multiplicacion = arreglo.reduce((acumulador, valorActual) => acumulador * valorActual);

console.log("La suma es: " + suma); //la sum es: 10

console.log("El producto es: " + multiplicacion); // el producto es: 24

