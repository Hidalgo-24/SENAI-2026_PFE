class Pessoa{
    nome;//atributo público
    #cpf;//atributo privado
    #salario;//atributo privado


//métodos getters e setters
setCpf(valor){
    this.#cpf = valor;
   }
getCpf(){
    return this.#cpf;
   }
setSalario(valor){
    this.#salario = valor;
   }
getSalario(){
    return this.#salario;
   }
}
const silva = new Pessoa();
silva.nome = 'Pedro';
silva.cpf = 333333333332;
silva.getCpf();
silva.setSalario(5000);
silva.getSalario();
console.log(silva.getSalario());
console.log(silva);
