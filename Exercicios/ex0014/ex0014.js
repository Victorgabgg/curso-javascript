var dat = document.getElementById('botao')
dat.addEventListener('click', analisador)

var res = document.getElementsByTagName('p')[0]

function analisador(){
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab')

    let agora = new Date()
    let dia = agora.getDate()
    let mes = agora.getMonth()
    let ano = agora.getFullYear()
    let sem = agora.getDay()
    let hora = agora.getHours()
    let minutos = agora.getMinutes()
    let segundos = agora.getSeconds()

    res.innerHTML = `<p>O dia é: <mark>${dia}</mark></p>`
    res.innerHTML += `<p>O mes é: <mark>${meses[mes]}</mark></p>`
    res.innerHTML += `<p>O ano é: <mark>${ano}</mark></p>`
    res.innerHTML += `<p>O dia da semana é: <mark>${semana[sem]}</mark></p>`
    res.innerHTML += `<p>A hora é: <mark>${hora}</mark></p>`
    res.innerHTML += `<p>Os minutos são: <mark>${minutos}</mark></p>`
    res.innerHTML += `<p>Os segundos são: <mark>${segundos}</mark></p>`

}