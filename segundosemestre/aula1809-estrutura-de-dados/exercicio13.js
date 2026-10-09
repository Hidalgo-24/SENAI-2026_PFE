let carros = [];

carros.push('Toyota');
carros.push('Honda');
carros.push('Ford');
carros.push('Chevrolet');
carros.push('Fiat');
carros.push('Volkswagen');

let carro = carros.shift();
carros.push(carro);

carro = carros.shift();
carros.push(carro);

console.log(carros);