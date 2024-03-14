const alunos = ['João', 'Juliana', 'Ana', 'Caio'];

const medias = [10, 8, 7.5, 9];

const matriz = [alunos, medias];


function exibeAlunos(aluno) {
    if (matriz[0].includes(aluno)) {
        const indice = matriz[0].indexOf(aluno)
        console.log(`${aluno} cadastrado. Posição: ${indice} - Média: ${matriz[1][indice]}`);
    } else {
        console.log('Aluno não cadastrado.');
    }
}


exibeAlunos("Juliana");
//console.log(matriz);
//console.log(`Aluno: ${matriz[0][1]} e a nota é ${matriz[1][0]}`);