import { useState } from "react";
import "./calculadora.css";

export default function Calculadora() {
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [resultado, setResultado] = useState("");
  const [erro, setErro] = useState("");

  function validar(a, b = null) {
    if (a === "" || (b !== null && b === "")) {
      setErro("Preencha todos os campos!");
      return false;
    }

    if (Number(a) <= 0 || (b !== null && Number(b) <= 0)) {
      setErro("Não são permitidos números zero ou negativos!");
      return false;
    }

    setErro("");
    return true;
  }

  function somar(e) {
    e.preventDefault();
    if (!validar(n1, n2)) return;
    setResultado(Number(n1) + Number(n2));
  }

  function subtrair(e) {
    e.preventDefault();
    if (!validar(n1, n2)) return;
    setResultado(Number(n1) - Number(n2));
  }

  function multiplicar(e) {
    e.preventDefault();
    if (!validar(n1, n2)) return;
    setResultado(Number(n1) * Number(n2));
  }

  function dividir(e) {
    e.preventDefault();
    if (!validar(n1, n2)) return;

    if (Number(n2) === 0) {
      setErro("Não pode dividir por zero!");
      return;
    }

    setResultado(Number(n1) / Number(n2));
  }

  function raizQuadrada(e) {
    e.preventDefault();
    if (!validar(n1)) return;
    setResultado(Math.sqrt(Number(n1)));
  }

  function potencia(e) {
    e.preventDefault();
    if (!validar(n1, n2)) return;
    setResultado(Math.pow(Number(n1), Number(n2)));
  }

  function limpar(e) {
    e.preventDefault();
    setN1("");
    setN2("");
    setResultado("");
    setErro("");
  }

  return (
    <div className="container">
      <h1>Calculadora</h1>

      <form>
        <label>Número 1</label>
        <input
          type="number"
          value={n1}
          onChange={(e) => setN1(e.target.value)}
        />

        <label>Número 2</label>
        <input
          type="number"
          value={n2}
          onChange={(e) => setN2(e.target.value)}
        />

        <div className="botoes">
          <button onClick={somar}>+</button>
          <button onClick={subtrair}>-</button>
          <button onClick={multiplicar}>×</button>
          <button onClick={dividir}>÷</button>
          <button onClick={raizQuadrada}>√</button>
          <button onClick={potencia}>xʸ</button>
          <button onClick={limpar} className="limpar">Limpar</button>
        </div>

        {erro && <p className="erro">{erro}</p>}

        <h2>Resultado: {resultado}</h2>
      </form>
    </div>
  );
}