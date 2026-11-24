const entrada = require('prompt-sync')();

let i = 1;

console.log("🚀 Iniciando contagem na mesma linha...\n");

const intervalo = setInterval(() => {
    // Limpa a linha atual do terminal e move o cursor para o início (coluna 0)
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);

    // Escreve o número atual na mesma linha
    process.stdout.write(`Tempo decorrido: ${i} segundo(s)`);

    if (i === 15) {
        clearInterval(intervalo); // Para o contador quando chega a 10
        console.log("\n\n✅ Tempo limite de 15 segundos atingido!");
        entrada('Pressione ENTER para encerrar!');
    }

    i++;
}, 1000); // 1000 milissegundos = 1 segundo


