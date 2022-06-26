var data = new Date()
var SysAno = data.getFullYear()

function verificar() {
    var UserAno = Number(window.document.querySelector('#txtano').value)
    var idade = SysAno - UserAno


    if (idade < 0 || idade == SysAno) {
        window.alert('[ERRO] Verifique novamente as informações.')
    } else {
        var resultado = window.document.querySelector('#res')
        var radsex = window.document.getElementsByName('radsex')
        sexo = ''

        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')

        if (radsex[0].checked) {
            //Criança
            sexo = 'Homem'
            if (idade < 10) {
                
                imagem.setAttribute('src', 'menino-criança.jpg')
            } else if (idade <= 18) {
                //Jovem
                imagem.setAttribute('src', 'jovem-h-adulto.jpg')
            } else if (idade <= 45) {
                //Adulto
                imagem.setAttribute('src', 'homem-adulto.jpg')
            } else {
                //Idoso
                imagem.setAttribute('src', 'homem-idoso.jpg')
            }



            } else if (radsex[1].checked) {
                //Mulher
                sexo = 'Mulher'
                if (idade < 10) {
                    
                    imagem.setAttribute('src', 'menina-criança.jpg')
                } else if (idade <= 18) {
                    //Jovem
                    imagem.setAttribute('src', 'jovem-f-adulto.jpg')
                } else if (idade <= 45) {
                    //Adulto
                    imagem.setAttribute('src', 'mulher-adulto.jpg')
                } else {
                    //Idoso
                    imagem.setAttribute('src', 'mulher-idoso.jpg')
                }
            }
        resultado.innerHTML = `Detectamos ${sexo} com idade de ${idade} anos`
        resultado.appendChild(imagem)
    }
    

    
    
}