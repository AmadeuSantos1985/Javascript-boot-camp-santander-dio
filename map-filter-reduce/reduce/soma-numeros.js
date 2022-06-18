function somaNumeros( lista){
    return lista.reduce(function (previus, current){
        return previus + current;
    });
}

const lista = [1, 2];

console.log(somaNumeros(lista));