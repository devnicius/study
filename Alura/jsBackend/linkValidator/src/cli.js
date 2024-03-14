import pegaArquivo from "./index.js";
import fs from 'fs';
import chalk from "chalk";
import listValidation from "./http-validation.js";

// valores de argumento - captura a entrada da linha de comando
const address = process.argv;

async function imprimeLista(valid, resultado, file = '') {
    if (valid) {
        console.log(chalk.yellow('Lista validada '),
        chalk.black.bgYellow(file),
        await listValidation(resultado));
    } else {
        console.log(chalk.yellow('Lista de links '),
        chalk.black.bgYellow(file),
        await listValidation(resultado));
    }
}

async function processaTexto(args) {
    const valid = args[3] === '--valida';
    try {
        fs.lstatSync(address[2]);
    } catch(err) {
        if (err.code === 'ENOENT') {
            console.log(chalk.red('Arquivo ou diretório não existe.'));
            return;
        }
    }
    
    if (fs.lstatSync(args[2]).isFile()) {
        const resultado = await pegaArquivo(args[2]);
        
        imprimeLista(valid, resultado, args[2]);
    } else if (fs.lstatSync(args[2]).isDirectory()) {
        const dir = await fs.promises.readdir(args[2]);
        dir.forEach(async (fileName) => {
            const list = await pegaArquivo(`${args[2]}/${fileName}`);
            imprimeLista(valid, list, fileName);
        })
        console.log(dir);
    }
}
processaTexto(address);