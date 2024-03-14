// Sintaxe em vetores
/*const numeros = [100, 200, 300, 400, 500, 600];

for (let indice = 0; indice < numeros.length; indice++) {
    console.log(numeros[indice]);
}
*/

// Sintaxe em matrizes
/*
const numeros1 = [100, 200, 300, 400, 500, 600];
const numeros2 = [150, 250, 350, 450, 550, 650];
const numeros3 = [175, 275, 375, 475, 575, 675];

const geral = [numeros1, numeros2, numeros3];

let media = 0;

for (let i = 0; i < geral.length; i++) {
    for (let j = 0; j < geral[i].length; j++) {
        media += geral[i][j]/geral[i].length;
    }
}

media = media/geral.length;

console.log(media);
*/


// Percorrer um for do início ao fim (revisar em Laços de Repetição)


// Obtenção da média
const notas = [10, 6.5, 8, 7.5];
let soma = 0;


for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}

const media = soma / notas.length;

console.log(`Média: ${media}`);