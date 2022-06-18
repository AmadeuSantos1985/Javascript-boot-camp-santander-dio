const maca = {
    valor: 2,
}

const  laranja ={
    valor: 3,
}

function mapComThis(lista, thisArgumento){
    return lista.map( function(item){
        return item*this.valor;
    }, thisArgumento);
}

const nums = [1, 2];

console.log('this->maçã', mapComThis(nums, maca));
console.log('this->laranja', mapComThis(nums, laranja));