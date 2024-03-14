//const chalk = require('chalk'); // commonJS - dedprecated
import fs from 'fs';
import chalk from 'chalk';

function extractLink(texto) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*\))/gm;
    const capture = [...texto.matchAll(regex)]; // retorna um objeto iteravel e expande dentro de um array

    const result = capture.map(captura => ({[captura[1]]: captura[2]}));

    return result.length !== 0 ? result : 'Não há links no arquivo';
}

function trataErro(erro) {
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
}

// metodo assincrono (async/await)
async function pegaArquivo(caminho) { // função assíncrona -> fará com que o JavaScript aguarde a promessa ser resolvida para retornar o valor
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminho, encoding); // aguardar a promessa retornar/ser processada
        return extractLink(texto);
        
    }
    catch(erro){trataErro(erro)}
    finally {console.log(chalk.blue('Encerrando aplicação...'))}
}


export default pegaArquivo;