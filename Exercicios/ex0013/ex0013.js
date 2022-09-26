var botao = document.getElementById('botao')
    botao.addEventListener('click', hora)


    var res = document.getElementsByTagName('p')[0]

    function hora(){
        var agora = new Date()
        //var dia = agora.getDate (Caso quisesse pegar um dia específico.)

        res.innerHTML = `<p>O que eu recebi do sistema foi <mark>${agora}.</mark>`

    }