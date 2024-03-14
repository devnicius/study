//const chalk = require('chalk'); // commonJS - dedprecated
import fs from 'fs';
import chalk from 'chalk';

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
}
/*
function pegaArquivo(caminho) {
    const encoding = 'utf-8';
    fs.readFile(caminho, encoding, (erro, texto) => {
        if (erro) {
            trataErro(erro)
        }
        console.log(chalk.green(texto));
    })
}
*/

/*
// metodo assincrono (promises)
function pegaArquivo(caminho) {
    const encoding = 'utf-8';
    fs.promises //promessa / funcoes encadeadas
    .readFile(caminho, encoding)
    .then((texto) => console.log(chalk.green(texto))) // espera-se que retorne o texto, caso não de erro
    .catch(trataErro) //chama a trataErro caso retorne erro
}
*/

// metodo assincrono (async/await)
async function pegaArquivo(caminho) { // função assíncrona -> fará com que o JavaScript aguarde a promessa ser resolvida para retornar o valor
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminho, encoding); // aguardar a promessa retornar/ser processada
        console.log(chalk.green(texto));
    }
    catch(erro){trataErro(erro)}
    finally {console.log(chalk.blue('Encerrando aplicação...'))}
}


pegaArquivo('./arquivos/texxto.md')