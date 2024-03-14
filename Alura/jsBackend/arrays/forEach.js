const notas = [10, 6.5, 8, 7.5];
let soma = 0;

// CallBack -> Função anônima foi passada como parâmetro de outra função (forEach) -> 
// Chama a função forEach para cada elemento do array
notas.forEach(function(nota, indice) { // recebe até 3 elementos, sendo o 3º, o "array atual"
    soma += nota;
    // console.log(indice);
});

const media = soma / notas.length;

console.log(media);