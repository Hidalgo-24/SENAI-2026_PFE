"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);
  const [mensagem, setMensagem] = useState("");

  function calcular(operacao: string) {
    setMensagem("");
    setResultado(null);

    // Verifica se o primeiro número foi preenchido
    if (numero1 === "") {
      setMensagem("Digite o primeiro número.");
      return;
    }

    const n1 = Number(numero1);
    const n2 = Number(numero2);

    // Verifica se o primeiro número é válido
    if (isNaN(n1)) {
      setMensagem("O primeiro número é inválido.");
      return;
    }

    // Operações que precisam de apenas um número
    if (operacao === "raiz") {
      if (n1 < 0) {
        setMensagem("Não é possível calcular a raiz de um número negativo.");
        return;
      }

      setResultado(Math.sqrt(n1));
      return;
    }

    // Para as outras operações, o segundo número é obrigatório
    if (numero2 === "") {
      setMensagem("Digite o segundo número.");
      return;
    }

    if (isNaN(n2)) {
      setMensagem("O segundo número é inválido.");
      return;
    }

    let resultadoCalculado: number;

    switch (operacao) {
      case "soma":
        resultadoCalculado = n1 + n2;
        break;

      case "subtracao":
        resultadoCalculado = n1 - n2;
        break;

      case "multiplicacao":
        resultadoCalculado = n1 * n2;
        break;

      case "divisao":
        if (n2 === 0) {
          setMensagem("Não é possível dividir por zero.");
          return;
        }

        resultadoCalculado = n1 / n2;
        break;

      case "potencia":
        if (n1 === 0 && n2 < 0) {
          setMensagem("Não é possível elevar zero a um número negativo.");
          return;
        }

        resultadoCalculado = Math.pow(n1, n2);
        break;

      default:
        setMensagem("Operação inválida.");
        return;
    }

    if (!Number.isFinite(resultadoCalculado!)) {
      setMensagem("O resultado não é um número válido.");
      return;
    }

    setResultado(resultadoCalculado!);
  }

  return (
    <main className={styles.container}>
      <div className={styles.calculadora}>

        <h1>Calculadora</h1>

        <div className={styles.campo}>
          <label>Número 1</label>

          <input
            type="number"
            value={numero1}
            onChange={(e) => setNumero1(e.target.value)}
            placeholder="Digite o primeiro número"
          />
        </div>

        <div className={styles.campo}>
          <label>Número 2</label>

          <input
            type="number"
            value={numero2}
            onChange={(e) => setNumero2(e.target.value)}
            placeholder="Digite o segundo número"
          />
        </div>

        <div className={styles.operacoes}>

          <button onClick={() => calcular("soma")}>
            +
          </button>

          <button onClick={() => calcular("subtracao")}>
            −
          </button>

          <button onClick={() => calcular("multiplicacao")}>
            ×
          </button>

          <button onClick={() => calcular("divisao")}>
            ÷
          </button>

          <button onClick={() => calcular("raiz")}>
            √
          </button>

          <button onClick={() => calcular("potencia")}>
            xʸ
          </button>

        </div>

        {mensagem && (
          <div className={styles.erro}>
            {mensagem}
          </div>
        )}

        {resultado !== null && (
          <div className={styles.resultado}>
            <p>Resultado</p>

            <strong>
              {Number.isInteger(resultado)
                ? resultado
                : resultado.toFixed(4)}
            </strong>
          </div>
        )}

      </div>
    </main>
  );
}