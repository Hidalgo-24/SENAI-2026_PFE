function ListaAlunos() {
  const alunos = [
    { id: 0, nome: "Ratão", nota: 10, fotoperfil: "https://i.pinimg.com/736x/4b/18/4e/4b184eedfbe8af09cc3998885ef30b93.jpg" },
    { id: 1, nome: "Barrigao", nota: 4, fotoperfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5zPfppnUIZCS7NvFyS4RqrYwM3TicfPkdWQ&s" },
    { id: 2, nome: "Samuel", nota: 9, fotoperfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq0vfRil1DyTK6Y44emZC6lThBfg3jlMhH6w&s" },
    { id: 3, nome: "Zacarias", nota: 5, fotoperfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLcSq304T0ceU39--MsFpZRv_lmnTzlQYDgA&s" },
    { id: 4, nome: "Luquinha", nota: 8, fotoperfil: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-lTHqOCGBeMNaA-g_GDTfOJHu5y5gP8mKcA&s" }
  ];

  const aprovados = alunos.filter(aluno => aluno.nota >= 6);

  return (
    <ul>
      {aprovados.map(aluno => (
        <li key={aluno.id}>
          <img src={aluno.fotoperfil} alt={aluno.nome} width="50" />
          <p>{aluno.nome} - Nota: {aluno.nota}</p>
        </li>
      ))}
    </ul>
  );
}

export default ListaAlunos;