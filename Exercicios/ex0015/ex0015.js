var acao = document.getElementById('botao')
acao.addEventListener('click', idadefunc)

function idadefunc(){
    res = document.getElementsByTagName('p')[0]

    let agora = new Date()
    let ano = agora.getFullYear()


    let a = Number(prompt('Em qual ano você nasceu?'))
    let saida = ano - a
    res.innerHTML = `<p>Quem nasceu em ${a} vai fazer <strong>${saida}</strong> anos em 2022.</p>`

}
