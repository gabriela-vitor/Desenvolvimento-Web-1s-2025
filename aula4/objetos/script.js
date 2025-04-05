//criar o objeto 
const pessoa = {
    nome: "fulano",
    idade: 20
};


let pessoa2= {};
pessoa2.nome = "ciclano";
pessoa2.nome = 20;
pessoa2.altura = 1.90;

console.log(pessoa2);

let carro = new Object();
carro.nome = "toyota";
carro.nome = 2020;
console.log(carro);

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

let p1 = new Pessoa("joao", 25);
let p2 = new Pessoa("maria", 25);
console.log(p1.nome);
console.log(p2.idade);

console.log(p1);

let pessoas = [p1, p2];
console.log(pessoas);

for(let pessoas of pessoas){
    console.log("---Pessoa---")
    for(let chat in pessoa){
        console.log(`${pessoa[chave]}`);
    }
}



class Animal{
    constructor(tipo, nome){
        this.tipo = tipo;
        this.nome = nome;
    }

    emitirSom(){
        return `$(this.nome) faz um som`;
    }
}

let gato = new Animal("felino", "fofinho");
console.log(gato.emitirSom());

let cachorro = new Animal();
console.log(cachorro.emitirSom());

