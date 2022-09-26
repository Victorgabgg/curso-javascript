a = document.getElementsByClassName("botao")[0]
        a.addEventListener('click',clique)

        function clique(){
        n1 = Number(prompt("Digite um valor: "))
        n2 = Number(prompt("Agora digite outro valor: "))

        if (n1 > n2) {
            maior = n1
        }else
        {
            maior = n2
        }

        newMessage =  document.getElementById('resp')
        newMessage.innerHTML = `<p>Analisando os valores ${n1} e ${n2}, o maior valor é <strong>${maior}.</strong></p>`
    }