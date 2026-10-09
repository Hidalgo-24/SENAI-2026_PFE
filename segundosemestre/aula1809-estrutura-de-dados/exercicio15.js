let fila1 = ['A', 'B', 'C'];
let fila2 = ['D', 'E', 'F'];
let fila3 = [];

while (fila1.length > 0) {
    fila3.push(fila1.shift());
}

while (fila2.length > 0) {
    fila3.push(fila2.shift());
}

console.log(fila3);