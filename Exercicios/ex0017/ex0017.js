var botao = document.getElementById('botao')
botao.addEventListener('click', adivinhar)
var n = Math.floor(Math.random() * 100) + 1

function adivinhar(){
    var digitado = prompt('Digite seu palpite')
    a = document.getElementById('parag')

    if (n > digitado){
        a.innerHTML += `<p>Você falou ${digitado}. O número é <strong>MAIOR</strong></p>`
    }

    else if (n < digitado) {
        a.innerHTML += `<p>Você falou ${digitado}. O número é <strong>MENOR</strong></p>`
    }
    else if (n == digitado){
        a.innerHTML += `<p>Você falou ${digitado} e <mark>ACERTOU!!!<mark></p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }
}