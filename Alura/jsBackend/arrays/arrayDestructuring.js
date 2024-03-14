const alunos = ['João', 'Juliana', 'Ana', 'Caio'];

const medias = [10, 8, 7.5, 9];

const matriz = [alunos, medias];


function exibeAlunos(aluno) {
    if (matriz[0].includes(aluno)) {
        //const alunos = matriz[0];
        //const medias = matriz[1];
        const [alunos, medias] = matriz; // atribui automaticamente as variaveis (equivale às duas linhas acima)
        const indice = alunos.indexOf(aluno);
        const media = medias[indice];
        console.log(`${aluno} cadastrado. Posição: ${indice} - Média: ${media}`);
    } else {
        console.log('Aluno não cadastrado.');
    }
}


exibeAlunos("Juliana");
//console.log(matriz);
//console.log(`Aluno: ${matriz[0][1]} e a nota é ${matriz[1][0]}`);