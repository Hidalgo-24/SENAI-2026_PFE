const estudantes = [
    {id: 1, nome: 'Ratao', idade:17,ra:676767, disciplina: 'Ed. Fisica'},
    {id: 2, nome: 'Estevin', idade:17,ra:686868, disciplina: 'Ed. Fisica'},
    {id: 3, nome: 'Luquinha', idade:17,ra:696969, disciplina: 'Ed. Fisica'},
]

export default function ListaFilter({titulo}){
    const lista = estudantes.filter(estudante => estudante.disciplina == 'Ed. Fisica')
    const listaEstudantes = lista.map((estudante) => {
        return <li key={estudante.id}>
            <h3>{estudante.nome}</h3>
            <p>{estudante.idade}</p>
            <p>{estudante.ra}</p>
        </li>
    })
    return(
        <>
        <h1>{titulo}</h1>
         <ul>
            {listaEstudantes}
         </ul>
         </>
    )
}