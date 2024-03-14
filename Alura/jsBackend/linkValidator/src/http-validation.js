import chalk from 'chalk';

function linkExtract(linkList) {
    return linkList.map((objLink) => Object.values(objLink).join());
}

async function responseCheck(URLList) {
    const arrStatus = await Promise.all(
         URLList.map(async (url) => {
            try {
                const response = await fetch(url);
                return `${response.status} - ${response.statusText}`;
            } catch(err) { return throwError(err); }
        })
    )
    return arrStatus;
}

function throwError(err) {
    if (err.cause.code === 'ENOTFOUND') {
        return 'Link não encontrado.'    
    } else {return 'Erro: ' + err}
    console.log(chalk.red('Erro: '), err)
}

export default async function listValidation(linkList) {

    const extract = linkExtract(linkList);
    const status = await responseCheck(extract);

    return linkList.map((obj, index) => ({
        index,
        ...obj, // spread operator
        status: status[index]
    }))
}