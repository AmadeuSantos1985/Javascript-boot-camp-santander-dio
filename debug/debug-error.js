function validaArray(lista, num){
    try{
        if(!lista && !num) throw new ReferenceError("Envie os parametros");

    if(typeof lista != 'object') throw new TypeError("Array precisa ser do tipo object");

    if(typeof num != 'number') throw new TypeError("Num precisa ser do tipo number");

    if(lista.length != num) throw new RangeError("Tamanho invalido!");

    return lista;

    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError!")
            console.log(e.message)
        }
        else if( e instanceof TypeError){
            console.log("Este erro é um TypeError!")
            console.log(e.message)
        }
        else if(e instanceof RangeError){
            console.log("Este erro é um RangeError!")
            console.log(e.message)
        }
        else {
            console.log("Tipo de erro não esperado:" + e)
        }
    }
}

console.log(validaArray([1, 2, 3, 4, 5], 5));