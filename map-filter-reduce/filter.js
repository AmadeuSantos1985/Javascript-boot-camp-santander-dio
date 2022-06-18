function filtraPares(lista){
    return lista.filter(callback);
}

function callback (item){
    return item % 2 === 0;
}

const meuArray = [1, 23, 55, 67, 30, 2, 4 ];

console.log('filtrando pares',filtraPares(meuArray));
