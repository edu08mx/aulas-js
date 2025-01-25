// 1 - Verifique se um número é maior que 10 e menor que 20.
    let numero = 15;
    if (numero > 10 && numero < 20) {
        console.log("true");

}   else {
    console.log("false")
}

// 2 - Crie um código que verifique se uma pessoa pode votar. Considere idade >= 16.

let idade = 18
    if (idade >= 16) {
        console.log("Pode votar")
    }
    else {
        console.log("Não pode votar");
    }

/* 3 - Implemente um sistema de notas onde:
    Notas >= 90: "Aprovado com A"
    Notas >= 70 e < 90: "Aprovado com B"
    Notas < 70: "Reprovado".  */  

let nota = 90;
    if (nota >= 90){
        console.log("Aprovado com A")
    }
    else if (nota >= 70 && nota < 90){
        console.log("Aprovado com B")
    }
    else {
        console.log("Reprovado")
    }

 /*4. Crie uma variável `saldo` e verifique:
    - Se `saldo > 0`: Mostre "Saldo positivo".
    - Se `saldo === 0`: Mostre "Sem saldo".
    - Caso contrário, mostre "Saldo negativo". */
    
let saldo = -1
    if (saldo > 0){
        console.log("Saldo Positivo")
}   else if (saldo === 0){
    console.log("Sem Saldo")
}   else {
    console.log("Saldo Negativo")
}

// 5 - Use o operador ! para verificar se uma luz está apagada e ligue-a.

let luz = false; // A luz está apagada (false)

// Verifica se a luz está apagada usando o operador de negação (!)
let luzApagada = true; // A luz está apagada

if (luzApagada) {
  console.log("A luz está apagada. Vamos ligá-la!");
  luzApagada = !luzApagada; // Inverte o estado da luz (de apagada para ligada)
}

console.log("Estado da luz:", luzApagada ? "Apagada" : "Ligada");

