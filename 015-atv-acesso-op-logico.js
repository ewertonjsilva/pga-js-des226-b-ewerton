let entrada = require('prompt-sync')(); 



/*
    O Math.random() gera um número entre 0 e 1. 
    Se for menor que 0,5, o Math.round() arredonda para 0; 
    se for maior ou igual a 0,5, arredonda para 1.
    Exemplo: 
*/
/*
    let vAleatorio = Math.random();
    console.log(`Valor aleatório gerado: ${vAleatorio}`);
    let valorArredondado = Math.round(vAleatorio); 
    console.log(`Valor arredondado gerado: ${valorArredondado}`);
*/

// Gera valor aleatório entre 0 e 1
const bloqueado = Math.round(Math.random());

let idade = entrada('Digite a idade de quem vai entrar: '); 
let acompanhado = entrada('Está acompanhado dos pais? Digite S/N: '); 

let entradaBloqueada = bloqueado == 1 ? true : false;
let entradaAcompanhado = acompanhado == 
    acompanhado.toLocaleLowerCase == 's' ? true : false;


