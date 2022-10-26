var valor 

function verificarValor(){
    valor = prompt("insira um valor")
    if (valor == 0) {
        valor = 0
    } else if (valor > 0) {
        valor = 1
    } else if (valor < 0) {
        valor = -1
    }
}
verificarValor()

console.log(valor)