class Pedido{
    numero;
    cliente;
    produto;
    valor;
    status;
    feedback;

    finalizarPedido(){
        this.status = 'Finalizado';
        if(this.feedback == 'negativo'){
            this.valor = this.valor * 1.05;
        }
        console.log(`Pedido finalizado: R$ ${this.valor}`);
    }

    cancelarPedido(){
        this.status = 'Cancelado';
        console.log('Pedido cancelado');
    }
}

let pedido1 = new Pedido();
pedido1.numero = 1;
pedido1.cliente = 'João';
pedido1.produto = 'Teclado';
pedido1.valor = 100;
pedido1.feedback = 'negativo';

let pedido2 = new Pedido();
pedido2.numero = 2;
pedido2.cliente = 'Maria';
pedido2.produto = 'Mouse';
pedido2.valor = 80;
pedido2.feedback = 'positivo';

pedido1.finalizarPedido();
pedido2.cancelarPedido();

console.log(pedido1);
console.log(pedido2);