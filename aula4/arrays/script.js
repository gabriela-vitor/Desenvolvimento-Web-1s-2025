//array
let numeros = [10, 20, 30, 40];
let nomes = ["nome: ana", "maria", "joao"];

console.log(numeros);
console.log(nomes);

let lista = [];
lista[0] = "item 1";
lista[1] = "item2";

console.log(lista);
console.log(lista[1])

let cores = new Array("vermelho", "azul", "verde");
console.log(cores);

//metodos
numeros.push(50);
console.log(numeros);

numeros.unshift(0);
console.log(numeros);

numeros.splice(1, 0, 5);
console.log(numeros);

numeros.pop();
console.log(numeros);

numeros.shift();
console.log(numeros);

numeros.splice(2,1);
console.log(numeros);