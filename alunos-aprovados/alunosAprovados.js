const alunos =[
    {
        nome: 'joão',
        nota: 5,
        turma: 'B',
    },

    {
        nome: 'Sofia',
        nota: 9,
        turma: '1B',
    },

    {
        nome: 'Paulo',
        nota: 6,
        turma: '2C',
    },

    {
        nome: 'Miguael',
        nota: 3,
        turma: '3B',
    },

];

function alunosAprovados(alunos , media){
    let aprovados = [];

    for(let i = 0; i< alunos.length; i++){
      let {nota, nome} = alunos[i];

      if (nota >= media){
        aprovados.push(nome);
      }
    }

    return aprovados;

}

console.log(alunosAprovados(alunos,5));

