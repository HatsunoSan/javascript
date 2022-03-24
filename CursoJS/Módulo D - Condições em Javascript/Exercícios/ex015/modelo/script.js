function verificar() {
    var data = new Date() // Pegar informações da data do sistema.
    var ano = data.getFullYear() // Aqui pegamos uma informação específica do sistema. O ano.
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) { // Verificar se tem algo digitado ou maior que o ano atual.
        window.alert('[ERRO] Verifique as informações e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex') // Selecionando ambos os "radsex"
       var idade = ano - Number(fano.value) // calculando idade
       var gênero = ''                      // Deixar vazio para ser preenchido posteriormente.
       var img = document.createElement('img') // Criando um elemento de imagem pelo JS dinamicamente.
       img.setAttribute('id', 'foto')          // Setando identificação do elemento imagem.
       if (fsex[0].checked) {               //Checa se a bolota foi marcada e preenche genero
           gênero = 'Homem'
           if (idade >= 0 && idade <= 3) {
               // bebê-homem
               img.setAttribute('src', 'bebe-menino.png')
           } else if ( idade < 10) {
               // criança-homem
               img.setAttribute('src', 'menino.png')
           } else if (idade < 22) {
               // jovem-homem
               img.setAttribute('src', 'jovem-homem.png')
           } else if (idade < 50) {
               // adulto-homem
               img.setAttribute('src', 'adulto-homem.png')
           } else {
               // idoso-homem
               img.setAttribute('src', 'idoso-homem.png')
           }
       } else if (fsex[1].checked) {        //Checa se a bolota foi marcada e preenche genero
           gênero = 'Mulher'
           if (idade >= 0 && idade <= 3) {
            // bebê-mulher
            img.setAttribute('src', 'bebe-menina.png')
        } else if ( idade < 10) {
            // criança-mulher
            img.setAttribute('src', 'menina.png')
        } else if (idade <= 22) {
            // jovem-mulher
            img.setAttribute('src', 'jovem-mulher.png')
        } else if (idade < 50) {
            // adulto-mulher
            img.setAttribute('src', 'adulto-mulher.png')
        } else {
            // idoso-mulher
            img.setAttribute('src', 'idoso-mulher.png')
        }
       }
       res.style.textAlign = 'center' // Centralizar o texto.
       res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
       res.appendChild(img)
    }
}

/*
0 ~ 3 bebe
4 ~ 10 criança
11 ~ 22 jovem
22 ~ 50 adulto
50 ~ + idoso
*/