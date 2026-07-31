class Caneta {
    cor = 'Amarela';
    marca = 'Faber Castel';
    ponta = 'Fina';
    qtdTinta = 10;
    tampa = false

    escrever(){
        this.qtdTinta -= 1;
        return 'Comecei a escrever';
    }
    sublinhar(valor) {
        if (valor > this.qtdTinta) {
            console.log("Ação negada: O valor solicitado é maior que a tinta disponível.");
        } else {
            this.qtdTinta -= valor;
            console.log("Sublinhado com sucesso. Tinta restante: " + this.qtdTinta);
        }
    }

    recarregar(valor) {
        if ((this.qtdTinta + valor) > 15) {
            console.log("Ação negada: A recarga excede o limite máximo de 15ml.");
        } else {
            this.qtdTinta += valor;
            console.log("Recarga efetuada! Quantidade atual: " + this.qtdTinta + "ml");
        }
    }

    getQtndTinta(){
        return this.qtdTinta;
    }
}

const canetaFina = new Caneta();
canetaFina.escrever(); 
canetaFina.escrever(); 
canetaFina.sublinhar(5); 
canetaFina.recarregar(10); 

console.log('A quantidade restante de tinta é ' + canetaFina.getQtndTinta());