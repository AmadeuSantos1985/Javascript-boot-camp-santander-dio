function mapSemThis (lista){
    return lista.map(function (item){
        return item * 2;
    });
}

const nums = [2, 3, 4, 6, 8, 10];

console.log(mapSemThis(nums));