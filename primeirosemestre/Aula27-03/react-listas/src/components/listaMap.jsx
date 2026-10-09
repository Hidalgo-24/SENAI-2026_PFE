const estudantes = [
    {id: 1, nome: 'Ratao', idade:17,ra:676767},
    {id: 2, nome: 'Estevin', idade:17,ra:686868},
    {id: 3, nome: 'Luquinha', idade:17,ra:696969},
]

export default function ListaMap({titulo}){
    const listaEstudantes = estudantes.map((estudante) => {
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