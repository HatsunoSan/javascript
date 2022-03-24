function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('div#foto')
    var data = new Date()
    var hora = 18 //data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}!`
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.innerHTML = '<img src="manha.png">'
        document.body.style.background = "#aec2cb"

    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.innerHTML = '<img src="tarde.png">'
        document.body.style.background = "#e68b64"

    } else {
        //  BOA NOITE
        img.innerHTML = '<img src="noite.png">'
        document.body.style.background = "#000916"
    }
}
