let numero = document.querySelector('#numUser')
let lista = document.querySelector('#lista')
let resultado = document.querySelector('#res')
let valores = []


//verificar se o NÚMERO digitado pelo usuário é maior ou igual a 1/menor ou igual a 100
function maiorMenor(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}



//Se eu buscar o NÚMERO dentro do valores, e não retornar -1, return true, senão, return false
function naLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
//se maiorMenor for true e o valor(número) não(!) estiver na lista(valores)
function adicionar() {
    if (maiorMenor(numero.value) && !naLista(numero.value, valores)){
        valores.push(Number(numero.value))
        let item = document.createElement('option')
        lista.appendChild(item)
        item.text = `Valor ${numero.value} adicionado!`
        
    } else {
        alert('Valor inválido ou já existente.')
    }
    //Esse numero.value faz a caixinha apagar logo que o if acima termine de rodar.
    numero.value = ''
    //esse numero.focus() faz com que o foco vá para a caixinha sem precisar clicar nela novamente.
    numero.focus()
    //Esse resultado.innerHTML faz com que, ao usuário clicar em adicionar após já ter clicado em finalizar, o resultado mostrado anteriormente seja apagado.
    resultado.innerHTML = ''
}


function finalizar(){
    if (valores.length == 0){
        alert('Por favor, adicione algum valor antes de clicar em finalizar!')
    } else {
        resultado.innerHTML = `Valores em ordem crescente: ${valores.sort((a, b) => a - b)}.<br>
        Ao todo, temos ${valores.length} valores cadastrados.<br>
        O maior valor adicionado foi ${Math.max.apply(Math, valores)}.<br>
        O menor valor adicionado foi ${Math.min.apply(Math, valores)}.<br>
        Somando todos os valores, temos a seguinte soma: ${valores.reduce(somar, 0)}.<br>
        A média dos valores digitados é ${valores.reduce(somar, 0)/valores.length}.`

    }
}

function somar(x, y){
    return x + y
}