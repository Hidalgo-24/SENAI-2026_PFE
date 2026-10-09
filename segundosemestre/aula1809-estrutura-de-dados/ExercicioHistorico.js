function historicoTextos() {

  let historico = [];

  historico.push('Hoje');
  historico.push('vou');
  historico.push('estudar');
  historico.push('JavaScript');

  console.log('Texto completo:', historico);

  historico.pop();

  console.log('Depois de desfazer:', historico);
}

historicoTextos();