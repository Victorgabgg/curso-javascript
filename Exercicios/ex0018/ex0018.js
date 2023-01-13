//var a = document.getElementById('botao')
//a.addEventListener('click', calc)

function calc(){
    let i = 0;
    let n1 = Number(prompt('Primeiro Valor:'));
    let n2 = Number(prompt('Segundo Valor: '));
    let n3 = 0;
    let op = Number(prompt(`O que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`));
    i = document.getElementById('parag');

switch(op){
    case 1:
        n3 = n1 + n2;
        i.innerHTML = `O resultado da soma é <mark>${n3}.</mark>`
        break;
    case 2:
        n3 = n1 - n2;
        i.innerHTML = `O resultado da subtração é <mark>${n3}.</mark>`
        break;
    case 3:
        n3 = n1 * n2;
        i.innerHTML = `O resultado da multiplicação é <mark>${n3}.</mark>`
        break;
    case 4: 
        n3 = n1 / n2;
        i.innerHTML = `O resultado da divisão é <mark>${n3}.</mark>`
        break;
    default:
    i.innerHTML = `Opção inválida! Digite uma das 4!`
    break;
}

}
