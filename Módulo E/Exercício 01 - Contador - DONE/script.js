
function contar(){
    var inicio = window.document.querySelector('#inicio').value
    var teste = window.document.querySelector('#fim').value
    var incremento = window.document.querySelector('#incremento').value
    var contando = window.document.querySelector('#mensagem')
    if (inicio.length == 0 || teste.length == 0){
        contando.innerHTML = 'Impossível contar!'
    }else {
        inicio = Number(inicio)
        teste = Number(teste)
        incremento = Number(incremento)
        contando.innerHTML = 'Contando: <br>'
        if (incremento <= 0){
            alert('[ERRO] Passo inválido! Considerando Passo 1')
            incremento = 1
        }
        //Contagem Crescente\\
        if(inicio < teste){
            for(var c = inicio; c <= teste; c += incremento){
            contando.innerHTML += `${c} \u{1F449} `
            }
        } else{
        //Contagem Decrescente\\
            for(var c = inicio; c >= teste; c -= incremento){
                contando.innerHTML += `${c} \u{1F449} `
            }
        }
        contando.innerHTML += `\u{1F3C1}`
        
    }
}