let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

/*
1. Imprime todas las personas de la lista.
*/
people.forEach(function(personas){
console.log(personas);
});

/*
2. Se elimina "Dani" de la matriz.
*/
people.splice(1, 1);
console.log(people);


/*
3. Se elimina "Dani" de la matriz.
*/
people.splice(2, 1);
console.log(people);


/*
4. Mover "Luis" al frente del arreglo.
*/
people[0] = "Luis";
people[1] = "Maria";
console.log(people);

/*
5. Agregar su nombre al final de la matriz.
*/
people.push("Jocelyn"); 
console.log(people);

/*
6. Usando un bucle, repita esta matriz y después de console.log "Maria", salga del bucle. (usar break)
*/
for (let i = 0; i < people.length; i++)
{
  console.log("Maria");
  break;
}

/*
7. Da el indexOf donde se encuentra "Maria".
*/
console.log("El indice de Maria es: " + people.indexOf("Maria") );


console.log("==============================================")

/* 
Array final
*/
console.log("El array final es: " + people);
