import PromptSync from "prompt-sync"
const prompt = PromptSync({sigint: true})
let nota;
let soma = 0;
for (let i=0; i<4; i++){
    nota = Number(prompt(`Digite a ${i+1}ª nota: `))
    soma +=nota
}

let media = soma/4

console.log("Média do aluno:", media)

