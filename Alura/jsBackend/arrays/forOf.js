const notas = [10, 6.5, 8, 7.5];
let soma = 0;
// percorre automaticamente todos os elementos do array
// obtém diretamente cada elemento, e aplica alguma função
for (let nota of notas) {
    soma += nota;
}

const media = soma / notas.length;

console.log(media);
