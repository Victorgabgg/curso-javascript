function sorteador(){
    let n = Math.floor(Math.random() * 100) + 1

    a = document.getElementById('parag')

    a.innerHTML += `<p>Pensei no numero: <mark>${n}</mark></p>`

}

function limpar(){
    a.innerHTML = `Vou criar um numero aleatório de 1 a 100.`

}