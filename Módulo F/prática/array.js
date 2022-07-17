let num = [5, 8, 2, 9, 3]
console.log(`Nosso vetor é ${num}, 
nele há ${num.length} elementos, 
na posição 3, há o valor ${num[3]}
e em ordem crescente ficaria ${num.sort()}.`)
num.push(1)
console.log(`Acabei de adicionar mais um valor! Ficando agora: ${num}`)

let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)

}
