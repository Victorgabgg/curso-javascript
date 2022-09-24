function calc(){
    var nome = prompt('Digite o nome do aluno: ')
    var nota1 = Number(prompt(`Digite a primeira nota de ${nome}: `))
    var nota2 = Number(prompt(`Digite a segunda nota de ${nome}: `))

    media = (nota1 + nota2) / 2

    a = document.getElementsByTagName('p')[0]
    a.innerHTML = `
    <p>Calculando a média final de <mark>${nome}.</mark></p> 
    <p>As notas obtidas foram <mark>${nota1} e ${nota2}.</mark></p>
    <p>A média final será <mark>${media}.</mark></p>`

    if (media >= 6) {
        a.innerHTML += `A mensagem que temos é: <strong>Parabéns!</strong>`
    }else{
        a.innerHTML += `A mensagem que temos é: <strong>Estude um pouco mais!</strong>`
    }
    
}