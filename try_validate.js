import promptSync from "prompt-sync"
const prompt = promptSync({sigint: true})
import { validate } from "bycontract"

let num = Number(prompt("Digite um número: "))
validate(num, "number")

