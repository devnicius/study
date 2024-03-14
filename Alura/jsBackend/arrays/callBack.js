const nomes = ["Evaldo", "Mari", "Camis"];

/*nomes.forEach(function(nome) {
    console.log(nome);
})*/

/*nomes.forEach((nome) => { // arrow function
    console.log(nome)
})*/

function imprimeNome(nome) {
    console.log(nome)
}

nomes.forEach(imprimeNome); // Função callBack externa

