var data = new Date()           // "capturar" informações do sistema
var hora = data.getHours()      // especificando o que queremos de info, no caso, HORA.

function carregar() {           // cria-se uma função ao carregar o body
    var msg = window.document.querySelector('#horario') //selecionando que mostrará o horario
    var img = window.document.querySelector('#imagem')  //selecionando div que alterará a img dinamicamente
    var cumprimento = window.document.querySelector('#ola')
    msg.innerHTML = `Agora são ${hora} horas`   //Alterando a div dinamicamente com o horário
    if (hora < 12) {
        //BOM DIA
        
        img.src = 'manha-expor.png' //alterando ela com o horário
        document.body.style.backgroundColor = 'rgb(226 173 15)' //alterando o fundo de acordo com a imagem
        cumprimento.innerHTML = 'Tenha um bom dia!' //
    } else if (hora < 18) {
        //BOA TARDE
        
        img.src = 'tarde-expor.png'
        document.body.style.backgroundColor = 'rgb(253 187 142)'
        cumprimento.innerHTML = 'Tenha uma boa tarde!'
    } else {
        //BOA NOITE
        
        img.src = 'noite-expor.png'
        document.body.style.backgroundColor = 'rgb(88 66 102)'
        cumprimento.innerHTML = 'Tenha uma boa noite!'
    }
}
