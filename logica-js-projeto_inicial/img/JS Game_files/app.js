let numeroSecreto = Math.floor(Math.random() * 100 + 1);

alert('Boas vindas ao jogo do número secreto')
let numeroMaximo = 5000;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute
let tentativas = 1;

while (chute != numeroSecreto) {
    let chute = prompt('Escolha um número entre 1 e 10')
     if (chute == numeroSecreto) {
        break
    } else {
        if (chute > numeroSecreto) {
           alert('O número secreto é menor')
        } else {
            alert('O número secreto é maior')
        }
    }
    tentativas++
 }

 let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa' 
 alert(`O número secreto era ${numeroSecreto} e você acertou com apenas ${tentativas} ${palavraTentativas}`) 
