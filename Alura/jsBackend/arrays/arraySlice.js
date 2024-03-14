const arrayAlunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara',
                     'Marjorie', 'Guilherme', 'Aline', 'Fabiana',
                     'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian',
                      'Isabela', 'Vinícius', 'Renan', 'Renata',
                       'Daisy', 'Camilo'];
// índices para selecionar os alunos do índice 0, ao 9
const sala1 = arrayAlunos.slice(0, 10);
// OU arrayAlunos.slice(0, alunos.length / 2);

const sala2 = arrayAlunos.slice(10); // o slice obterá os alunos do índice 10, até o final do array
// OU arrayAlunos.slice(alunos.length / 2);

console.log(sala1);
console.log(sala2);