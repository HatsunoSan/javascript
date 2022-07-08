var anoAtual = (new Date()).getFullYear();

function verificar() {
    var nascimentoUsuario = Number(window.document.querySelector('#ano_nascimento').value)
    var idade = anoAtual-nascimentoUsuario

    var mensagem = window.document.querySelector('#msg')
    var alteraIMG = window.document.querySelector('#imagem')
    var sexo = window.document.getElementsByName('radsex')

    if (nascimentoUsuario == 0 || nascimentoUsuario < 0 || nascimentoUsuario > anoAtual) {
        window.alert('[ERRO] Verifique as informações e tente novamente!')
    } else {
        var genero = ''

        if (sexo[0].checked) {
            genero = 'Mulher'
            if (idade <= 12) {
                alteraIMG.setAttribute('src', 'crianca-menina.jpg')
            } else if (idade < 18) {
                alteraIMG.setAttribute('src', 'adolescente-garota.jpg')
            } else if (idade <= 29) {
                alteraIMG.setAttribute('src', 'jovem-adulto-mulher.jpg')
            } else if (idade < 50) {
                alteraIMG.setAttribute('src', 'adulto-mulher.jpg')
            } else {
                alteraIMG.setAttribute('src', 'idoso-mulher.jpg')
            }

        } else if (sexo[1].checked) {
            genero = 'Homem'
            if (idade <= 12) {
                alteraIMG.setAttribute('src', 'crianca-menino.jpg')
            } else if (idade < 18) {
                alteraIMG.setAttribute('src', 'adolescente-garoto.jpg')
            } else if (idade <= 29) {
                alteraIMG.setAttribute('src', 'jovem-adulto-homem.jpg')
            } else if (idade < 50) {
                alteraIMG.setAttribute('src', 'adulto-homem.jpg')
            } else {
                alteraIMG.setAttribute('src', 'idoso-homem.jpg')
            }
        }
        mensagem.innerHTML = `Detectamos ${genero}, nascido em ${nascimentoUsuario} com ${idade} anos!`
    } 
}