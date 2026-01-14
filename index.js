const readline = require("readline")

// ===== Classe Herói =====
class Heroi {
  constructor(nome, idade, tipo, nivel) {
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    this.nivel = nivel
  }

  atacar() {
    let ataque

    switch (this.tipo) {
      case "mago":
        ataque = "magia"
        break
      case "guerreiro":
        ataque = "espada"
        break
      case "monge":
        ataque = "artes marciais"
        break
      case "ninja":
        ataque = "shuriken"
        break
      default:
        ataque = "um ataque desconhecido"
    }

    console.log(`\n⚔️  O ${this.tipo} atacou usando ${ataque}!`)
  }
}

// ===== Classe Monstro =====
class Monstro {
  constructor(nome, nivel) {
    this.nome = nome
    this.nivel = nivel
  }

  atacar() {
    console.log(`💀 O monstro ${this.nome} atacou com fúria!`)
  }
}

// ===== Função de batalha =====
function batalhar(heroi, monstro) {
  console.log("\n🔥 A batalha começou!")
  console.log(`Herói nível: ${heroi.nivel}`)
  console.log(`Monstro nível: ${monstro.nivel}`)

  heroi.atacar()

  const chanceHeroi = heroi.nivel + Math.floor(Math.random() * 10)
  const chanceMonstro = monstro.nivel + Math.floor(Math.random() * 10)

  if (chanceHeroi >= chanceMonstro) {
    console.log(`🏆 ${heroi.nome} derrotou o monstro ${monstro.nome}!`)
  } else {
    monstro.atacar()
    console.log(`☠️ ${heroi.nome} foi derrotado pelo monstro ${monstro.nome}...`)
  }
}

// ===== Interface de entrada =====
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log("🎮 Bem-vindo ao Mini Game Herói vs Monstro!\n")

rl.question("Nome do herói: ", (nome) => {
  rl.question("Idade do herói: ", (idade) => {
    rl.question("Tipo (guerreiro, mago, monge, ninja): ", (tipo) => {
      rl.question("Nível do herói (1 a 10): ", (nivel) => {

        const heroi = new Heroi(nome, idade, tipo.toLowerCase(), Number(nivel))

        const monstros = ["Goblin", "Orc", "Dragão", "Esqueleto", "Demônio"]
        const monstroEscolhido = monstros[Math.floor(Math.random() * monstros.length)]
        const nivelMonstro = Math.floor(Math.random() * 10) + 1

        const monstro = new Monstro(monstroEscolhido, nivelMonstro)

        console.log(`\n👹 Um monstro apareceu: ${monstro.nome} (nível ${monstro.nivel})`)

        batalhar(heroi, monstro)

        rl.close()
      })
    })
  })
})
