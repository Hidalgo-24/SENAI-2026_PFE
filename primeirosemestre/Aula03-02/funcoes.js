//primeiro tipo de função padrão
function saudacao(nome,sobrenome){
    console.log(' Olá, seja bem vindo ' + nome + " " + sobrenome);
}

saudacao('Arthur', 'Hidalgo'); //chamada de funcao

//segundo tipo - função anonima
const somar = function(num1,num2){
    console.log('A soma dos números é = ' + (num1+num2));
    }
    somar(25,35)

// terceiro tipo - arrow function
const subtrair = (num1, num2) => {
    console.log("A subtração dos numeros é = " + (num1 - num2));
}
subtrair(30,50);

//  tipo - arrow function
const subtrairComRetorno = (num1, num2) => {
    return num1-num2;
}
console.log('A subtração dos numeros é = ' + 
subtrairComRetorno(30,50));