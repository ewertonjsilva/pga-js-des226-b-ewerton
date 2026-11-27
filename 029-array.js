
let arrayVazio = [];

let listaNumeros = [1, 2, 3, 4];

let listaNumeros2 = [
    1.3, 
    2.5, 
    3, 
    4.25
];

let listaFrutas = ['Maça', 'Morango', 'Mamão'];

// visualizar valor por posição
console.log(listaNumeros[1]);
console.log(`Frutas da lista: ${listaFrutas}`);
console.log(`Frutas da lista: ${listaFrutas[0]}, ${listaFrutas[1]}`);

// Passando por todos os valores da lista
for (cont = 0; cont < listaNumeros2.length; cont++) {
    console.log(listaNumeros2[cont]);    
}

// Exiba a lista de número 1, apresentando os números lado a lado 
// separados por -. Ex: 1 - 7 - 10...

let exibeNumeros = ''; 

for (i= 0; i < listaNumeros.length; i++) {
    exibeNumeros = exibeNumeros + listaNumeros[i]; 

    if (i < listaNumeros.length -1) {
        exibeNumeros += ' - ';         
    }

}

console.log(exibeNumeros);

// Jeito simples
console.log(listaNumeros.join(' - '));

console.log(`Antes do push: ${listaNumeros.length}`);
listaNumeros.push(5); 

console.log(listaNumeros.join(' - '));

listaNumeros[10] = 10; 

console.log(listaNumeros.length);

console.log(listaNumeros.join(' - '));


