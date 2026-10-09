let entrada = require('prompt-sync')(); 

let num = entrada('Digite um número: '); 

if (isNaN(num)) {
    console.log('O programa só funciona quando um valor numérico é inserido!');    
} else {
    
    if (num % 2 === 0) {
        console.log(`O número ${num} é par!`);    
    } else {
        console.log(`O número ${num} é impar!`);
    }
    
    if (num > 0) {
       console.log(`O número ${num} é positivo!`); 
    } else if (num < 0) {
       console.log(`O número ${num} é negativo!`); 
    } else {
       console.log(`O número ${num} é zero!`);  
    }
}


console.log('');
entrada('Presssione ENTER para encerrar o programa');
