// 1 - Crie uma variável com o nome completo de uma pessoa e exiba apenas o primeiro nome.

let nome = "Luiz Eduardo Furtado"
console.log(nome.slice(0,4));

// 2 - Verifique se uma string contém a palavra "Java" e exiba uma mensagem personalizada.

let prog = "JavaScript"
if (prog.includes("Java")) {
    console.log("A String contém a Palavra - Java");
} else {
    console.log("Inválido");
}

// 3 - Converta uma frase para letras maiúsculas e remova os espaços em branco nas extremidades.

let frase = "    Aprendendo JavaScript   "
let novaFrase = frase.trim().toUpperCase();
console.log(novaFrase);

// 4 - Substitua a palavra "erro" por "correção" na string "Houve um erro no sistema.".

let teste = "Houve um erro no sistema."
let teste1 = teste.replace("erro", "correção")
    console.log(teste1);

// 5 - Divida a frase "Eu amo JavaScript" em palavras separadas e exiba cada uma.

let frase1 = "Eu amo JavaScript";
let palavras = frase1.split(" "); 

for (let i = 0; i < palavras.length; i++) {
  console.log(palavras[i]);
}

// 6 -Valide se um URL começa com https:// e termina com .com.

let url = "https://www.github.com"
    if (url.startsWith("https://") && url.endsWith(".com")){
        console.log("Certificado válido")
    }    else {
        console.log("Certificado Inválido");
    }
