var horasys = new Date()
var hora = horasys.getHours()




var msg = window.document.querySelector('#msg')
var imagem = window.document.querySelector('#imagem')



if (hora >= 0 && hora < 12) {
    msg.innerHTML = `Agora são ${hora}h, Bom dia!`
    imagem.setAttribute('src', 'manha-exportada.png')
    window.document.body.style.backgroundColor = '#e3b85b'
} else if (hora < 18) {
    msg.innerHTML = `Agora são ${hora}h, Boa tarde!`
    imagem.setAttribute('src', 'tarde-exportada.png')
    window.document.body.style.backgroundColor = '#f19364'
} else {
    msg.innerHTML = `Agora são ${hora}h, Boa noite!`
    imagem.setAttribute('src', 'noite-exportada.png')
    window.document.body.style.backgroundColor = '#111520'
}