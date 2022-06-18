const lista = [
    {
        produto: 'sabão em pó',
        preco: 30,
    },

    {
        produto: 'cereal',
        preco: 12,
    },

    {
        produto: 'toalha',
        preco: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(previus, current){
        return previus - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));