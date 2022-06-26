var data = new Date()           //Salvando infos em variáevl
var ano = data.getFullYear()    //Salvando info do ano com 4 dígitos em variável


function verificar() {
    var resultado = window.document.querySelector('#res')   
    var usuario = Number(window.document.querySelector('#txtano').value)    //convert input do user em numero e dando valor.
    var idade = ano - usuario
    resultado.innerHTML = idade


    var usersex = window.document.getElementsByName('radsex')
    var sexo = ''


    var imagem = document.createElement('img')                              //[!!!!!!!!!]
    imagem.setAttribute('id', 'foto')                                       //[!!!!!!!!!]


    if (idade >= ano || idade < 0) {
        alert('[ERRO] Verifique as informações e tente novamente.')
    } else {
        if (usersex[0].checked) {
            sexo = 'Homem'

            if (idade < 10) {
            //CRIANÇA
            imagem.setAttribute('src', 'menino-criança.jpg')

        } else if (idade <= 18) {
            //JOVEM
            imagem.setAttribute('src', 'jovem-h-adulto.jpg')
        } else if (idade < 45) {
            //ADULTO
            imagem.setAttribute('src', 'homem-adulto.jpg')
        } else {
            //IDOSO
            imagem.setAttribute('src', 'homem-idoso.jpg')
            }

        } else if (usersex[1].checked) {
            sexo = 'Mulher'

            if (idade < 10) {
                //CRIANÇA
                imagem.setAttribute('src', 'menina-criança.jpg')
    
            } else if (idade <= 18) {
                //JOVEM
                imagem.setAttribute('src', 'jovem-f-adulto.jpg')
            } else if (idade < 45) {
                //ADULTO
                imagem.setAttribute('src', 'mulher-adulto.jpg')
            } else {
                //IDOSO
                imagem.setAttribute('src', 'mulher-idoso.jpg')
            }
        }
        
        resultado.innerHTML = `Detectamos ${sexo} com idade de ${idade} anos`
        resultado.appendChild(imagem)                                   //[!!!!!!!!!!!!!]
    }   
    
}   

