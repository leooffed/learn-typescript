console.log("A" === "\u0041")

console.log('u' + 'a' + 't')

console.log('cat'.toUpperCase() === 'CAT')

let obj = "Jeu"

for (myVar in obj) {
    if (obj.hasOwnProperty(myVar)) {
        console.log(myVar + ":" + obj)
    }
}

let nombre = 10

do {
    nombre += 1
    console.log(nombre)
} while(nombre === 10)

let bool = false

let says =  bool? "bonjour" : "bonsoir" 
console.log(says)


// ordre de priorite
console.log(2 + 3 * 5)
console.log((2 + 3) * 5)

// Operateur 
console.log([], ("")) // Raffinement et invocations
console.log(delete + typeof bool, ("+ - !")) // Operateur unaires
console.log("*, /, %") // Multiplaction, division, remainder (reste) or Modulo
console.log("+, -") // Addition/concatenation, subtraction
console.log(">=, <=, >, <") // Inegalite
console.log("===, !==") // Les egalite
console.log("&&") // La logique {ET}
console.log("||") // La Logique (OU)
console.log() // Les Ternaire


