function ListaFrutas() {
  const frutas = ["Maçã", "Banana", "Pêra", "Abacaxi", "Manga"];

  return (
    <ul>
      {frutas.map((fruta, index) => (
        <li key={index}>{fruta}</li>
      ))}
    </ul>
  );
}

export default ListaFrutas;