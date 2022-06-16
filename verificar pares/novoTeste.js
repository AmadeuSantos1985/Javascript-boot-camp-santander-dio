function substituiPares(lista){
    for (let i = 0; i < lista.length; i++){
        if (lista[i] === 0){
            console.log("Você ja é zero");
        } else if (lista[i] % 2 === 0){
            console.log(`Substituindo ${lista[i]} por 0..`);
            lista[i] = 0;
        }
    }

    return lista;
}

let arr = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(substituiPares(arr));