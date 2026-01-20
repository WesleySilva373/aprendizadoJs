function pessoa (nome,sobrenome,idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

const wesley = new pessoa ( 'wesley' ,'silva',20)

pessoa.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome} ${idade}`
}

Object.getOwnPropertyNames(NodeList.prototype)
Object.getOwnPropertyNames(HTMLAllCollection.prototype)
Object.getOwnPropertyNames(Document.prototype)

const li = document.querySelector('li')