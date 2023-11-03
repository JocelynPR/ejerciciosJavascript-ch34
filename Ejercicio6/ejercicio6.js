function burbuja(elementos) {
  var length = elementos.length;
  for (var i = 0; i < length; i++) {
    for (var j = 0; j < (length - i - 1); j++) {
      if (elementos[j] > elementos[j + 1]) {
        var auxiliar = elementos[j];
        elementos[j] = elementos[j + 1];
        elementos[j + 1] = auxiliar;
      }
    }
  }
}

const arreglo = [3, 6, 12, 5, 100, 1];
burbuja(arreglo);

console.log(arreglo);