/*      case R.id.someValue :
        case R.id.someOtherValue :
        //do stuff 
        
        mes.toUpperCase()

        Outono - Abril-> Junho
        Inverno - Julho -> Setembro
        Primavera - Outubro -> Novembro
        Verão - Dezembro -> Março
        */

var a = document.getElementById('botao');
a.addEventListener('click',estacoes);

function estacoes(){
        let saida = 0;
        let estacao;
        let esc = prompt(`Digite o mês por extenso (ex: Setembro)`);
        saida = document.getElementById('parag');
  
        switch(esc.toUpperCase()){
                case 'ABRIL':
                case 'MAIO':
                case 'JUNHO':
                        estacao = 'OUTONO';
                break;
                
                case 'JULHO':
                case 'AGOSTO':
                case 'SETEMBRO':
                        estacao = 'INVERNO';
                break;

                case 'OUTUBRO':
                case 'NOVEMBRO':
                        estacao = 'PRIMAVERA';
                break;

                case 'DEZEMBRO':
                case 'JANEIRO':
                case 'FEVEREIRO':
                case 'MARÇO':
                        estacao = 'VERÃO';
                break;

        default:
                saida.innerHTML = `Mês inválido, tente novamente.`
                break;
        }
saida.innerHTML = `No mês de <strong>${esc.toUpperCase()}</strong>, estamos na estação <mark>${estacao}.</mark>`
}