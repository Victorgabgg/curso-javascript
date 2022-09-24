/*
var vel = 61
console.log(`A sua velocidade é ${vel} Km/h`)

if (vel > 60){ //Condição simples

    console.log('Você ultrapassou o limite. Multado!')
}

console.log('Dirija sempre com o cinto de segurança.')


var idade = 67
console.log(`Você tem ${idade} anos.`)
if (idade < 16){
    console.log('Não vota.')
} else if (idade < 18 || idade > 65){
    console.log('Voto opcional.')
} else{
    console.log('Voto obrigatório.')
}
*/

var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora}`)
if (hora < 12){
    console.log('Bom dia.')
} else if (hora <= 18){
    console.log('Boa tarde.')
} else {
    console.log('Boa noite.')
}