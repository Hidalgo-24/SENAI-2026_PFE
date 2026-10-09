const alunos = [
    { numero: 4, nome: "Ana Alfreda" },
    { numero: 5, nome: "Alfredo" },
    { numero: 3, nome: "Malta" },
    { numero: 7, nome: "Brian" },
    { numero: 2, nome: "Sueny" }
];

function ordenaAlunos(alunos) {

    for (let i = 0; i < alunos.length; i++) {

        for (let j = 0; j < alunos.length - 1; j++) {

            if (alunos[j].numero > alunos[j + 1].numero) {

                let temp = alunos[j];

                alunos[j] = alunos[j + 1];

                alunos[j + 1] = temp;
            }
        }
    }

    return alunos;
}

console.log(ordenaAlunos(alunos));