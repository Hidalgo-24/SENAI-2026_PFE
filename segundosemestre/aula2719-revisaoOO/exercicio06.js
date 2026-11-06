class Pessoa{
    nome;
    idade;
    profissao;
    cidade;
    renda;

    apresentar(){
        if(this.idade > 60){
            this.renda = this.renda * 1.05;
        }
        console.log(`${this.nome}, ${this.idade} anos, ${this.profissao}, mora em ${this.cidade}, renda: R$ ${this.renda}`);
    }
}

let pessoa1 = new Pessoa();
pessoa1.nome = 'Ratao';
pessoa1.idade = 43;
pessoa1.profissao = 'Fisioterapeuta';
pessoa1.cidade = 'Mirandópolis';
pessoa1.renda = 12000;

let pessoa2 = new Pessoa();
pessoa2.nome = 'Estevan';
pessoa2.idade = 30;
pessoa2.profissao = 'Professor de EF';
pessoa2.cidade = 'Mirandópolis';
pessoa2.renda = 9000;

let pessoa3 = new Pessoa();
pessoa3.nome = 'Lucas';
pessoa3.idade = 65;
pessoa3.profissao = 'Pedreiro';
pessoa3.cidade = 'Mirandópolis';
pessoa3.renda = 2500;

pessoa1.apresentar();
pessoa2.apresentar();
pessoa3.apresentar();