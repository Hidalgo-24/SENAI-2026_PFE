const usuarios = ["Arthur", "Joao", "Maria", "Pedro"];

function buscarUsuario(nomes, nome) {

    for (let i = 0; i < nomes.length; i++) {

        if (nomes[i].toLowerCase() === nome.toLowerCase()) {
            return true;
        }

    }

    return false;
}

console.log(buscarUsuario(usuarios, "arthur"));
console.log(buscarUsuario(usuarios, "MARIA"));
console.log(buscarUsuario(usuarios, "Carlos"));