/*
    Como podemos rodar isso em um arquivo .ts sem causar erros?

    let employee = {};
    employee.code = 10;
    employee.name = 'John';

*/

interface iEmployee {
    code: number,
    name: string
}

let employee: iEmployee = {
    code: 10,
    name: 'John'
}