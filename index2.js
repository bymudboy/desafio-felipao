
let vitoria = 200
let derrota = 124

function calculoSaldo() {
let saldo = (vitoria - derrota)
return saldo
}

saldo = calculoSaldo()
let rank = saldo

for (let i = 0; i< 10; i++)
    console.log("Verificando o rank..." + (i+1))

if (rank <= 10) {
    rank = console.log("O herói tem um saldo de " + saldo + " vitórias. Está no nível FERRO")
} else if (rank >= 11 && rank <= 20){
    console.log("O herói tem um saldo de " + saldo + " vitórias. Está no nível BRONZE")
} else if (rank >= 21 && rank <= 50){
    console.log("O herói tem um saldo de " + saldo + " vitórias. Está no nível PRATA")
} else if (rank >= 51 && rank <= 80){
    console.log("O herói tem um saldo de " + saldo + " vitórias. Está no nível OURO")
} else if (rank >= 81 && rank <= 90){
    console.log("O herói tem um saldo de " + saldo + " vitórias. Está no nível DIAMANTE")
} else if (rank >= 91 && rank <= 100){
    console.log("O herói tem um saldo de " + saldo + " vitórias. Está no nível LENDÁRIO")
} else if (rank >= 101){
    console.log("O herói tem um saldo de " + saldo + " vitórias. Está no nível IMORTAL")
} 

vitoria -= 10
saldo = calculoSaldo()
rank = saldo
