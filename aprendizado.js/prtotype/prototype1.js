function pessoa ( nome , idade) {
    this = nome;
    this = idade;
}

var obj = {
    nome: "nadré",
    idade : 33
}

pessoa.prototype.andar = function(){
    return 'andou';
}
const andre = new pessoa ("andré" , 28)
console.log(pessoa.prototype)
console.log(andre.prototype)