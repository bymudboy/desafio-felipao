class Heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

     atacar(){
        let ataque;
    
        if (this.tipo === "mago"){
            ataque = "magia"
        } else if (this.tipo === "guerreiro") {
            ataque = "espada"
        } else if (this.tipo === "monge"){
            ataque = "as artes marciais"
        } else if (this. tipo === "ninja"){
            ataque = "shuriken"
        } else {
            ataque = "fez um ataque desconhecido"
        }
    
        console.log(`O ${this.tipo} ${this.nome} de ${this.idade} anos de idade, atacou usando ${ataque}`)
    }
}



let mago = new Heroi ("Gandalf", 100, "mago")
let guerreiro = new Heroi ("Conan", 40, "guerreiro")
let monge = new Heroi ("Wang", 60, "monge")
let ninja = new Heroi ("Naruto", 15, "ninja")

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();