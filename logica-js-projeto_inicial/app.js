alert('Bem vindo ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute; 
let tentativas = 1;
while ( chute != numeroSecreto){
    let chute = prompt (`Digite um número de 1 a ${numeroMaximo}`);

if (chute == numeroSecreto){
   break;
    alert(`você acertou! O número é ${numeroSecreto} com o total de ${tentativas} tentativas`);
} else {
    if (chute > numeroSecreto){
        alert(`o numero secreto é menor que ${chute}`);
       } else {
         alert(`o numero secreto é maior que ${chute}`);
       }

    }
    tentativas++; 

}    
 let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`você acertou! O número é ${numeroSecreto} com o total de ${tentativas} ${palavraTentativa}`);
 //if (tentativas > 1 ){
 //   alert(`você acertou! O número é ${numeroSecreto} com o total de ${tentativas} tentativas`);
// } else {
//    alert(`você acertou! O número é ${numeroSecreto} com o total de ${tentativas} tentativa`);
// }

