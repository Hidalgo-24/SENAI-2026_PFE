function MeuAvatar(props) {
  return (
    <div style={{
      border: "2px solid #ccc",
      padding: "20px",
      borderRadius: "10px",
      width: "250px",
      textAlign: "center",
      margin: "20px auto"
    }}>

      <img 
        src={props.foto} 
        alt="Foto de perfil"
        style={{width:"120px", borderRadius:"50%"}}
      />

      <h2>{props.nome}</h2>
      <p>Idade: {props.idade}</p>
      <p>Estilo musical: {props.estiloMusical}</p>
      <p>Disciplina favorita: {props.disciplina}</p>

    </div>
  )
}

export default MeuAvatar