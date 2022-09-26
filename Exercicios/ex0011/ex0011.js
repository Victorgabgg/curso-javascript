a = document.getElementById('res')
       function func(){
           
            num = Number(prompt("Digite um número: "))
            if (num % 2 == 0) {
                a.innerHTML = `<p>O número ${num} que foi digitado é <strong>PAR!</strong></p>`
            }else{
                a.innerHTML = `<p>O número ${num} que foi digitado é <strong>ÍMPAR!</strong></p>`
            }

        }