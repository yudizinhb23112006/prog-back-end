let n1 = parseInt(document.getElementById('nota1').value);
let n2 = parseInt(document.getElementById('nota2').value);
let n3 = parseInt(document.getElementById('nota3').value);

let aprovado = sum > 60
let reculperaçao = (sum == 50) && (sum <=59)
let reprovado = sum < 50

function soma() {
    sum = n1+n2+n3/3;
    alert(sum)

    if (aprovado){
        
        alert('voce esta aprovado')

    }
    if (reculperaçao) {
        
        alert('voce esta em reculperaçao')
    }

    if (reprovado){
        
        alert('voce esta reprovado')
    }
}
