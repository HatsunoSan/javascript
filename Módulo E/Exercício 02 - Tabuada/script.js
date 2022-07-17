function gerar(){
    var usuario = document.querySelector('#numUser')
    var tabuada = document.querySelector('#tabuada')
    if (usuario.value.length == 0){     //Se o usuário NÃO digitar um número...
        alert('DIGITE UM NÚMERO!')
    } else {
        usuario = Number(usuario.value) //Tratando por fora
        tabuada.innerHTML = ''  //Quando uma tabuada for requerida, a antiga dará lugar à nova
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            //Nessa variável estará salvo o elemento option, que será *child de alguém ali na frente
            item.text = `${usuario} x ${c} = ${usuario*c}`
            tabuada.appendChild(item)   //Aqui estamos dizendo que o option será *child do select, cujo o id é #tabuada.
        }
    }
}