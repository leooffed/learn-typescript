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

let myName = "leo"

if (myName && myName.toLowerCase()) {
    console.log(myName)
} else {
    console.log("is not to Upper")
}

// Litteraux d'objet
let empty_object = {}

let stoo = {
    "fist-name": "Jerome",
    "last-name": "Joe",
    "nickname": "Niga"
}

let flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2003-12-22 14:55",
        city: "London"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-11 11:03",
        city: "Los Angeles"
    },
    equipement: {
        model: "Jorimu 838"
    },
    status: "Kuse"
}

// Recuperation
console.log(stoo['fist-name'])
console.log(flight.departure.IATA)

console.log(stoo["login"])

// using || or
let middle = stoo["login"] || "(none)"
let status = flight.status || "unknown"
console.log(middle)
console.log(status)

// utilisation && pour se premunir
flight.equipement
flight.equipement.model
console.log(flight.equipement && flight.equipement.model)


// update
stoo['fist-name'] = "Jerome"
stoo['middle-name'] = 'Lester'
stoo["last-name"] = "Curly"
flight.equipement = {
    model: "oeiry 777"
}

flight.status = 'overdue'

// Reference

let x = stoo
x.nickname = 'Curlo'
let nick = stoo.nickname
console.log(nick)

let a = {}, b = {}, c = {}

console.log(a = b = c = {})

// Prototype
if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        let F = function() {
            F.prototype = o
            return new F()
        }
    }
}

let another_stoo = Object.create(stoo)

console.log(another_stoo['first-name'] = 'Hary')
console.log(another_stoo['first-name'] = 'Junior')
console.log(another_stoo.nickname = 'Moe')

stoo.profession = 'actor'
console.log(another_stoo.profession)

// Reflection

console.log(typeof flight.number)
console.log(typeof flight.status)
console.log(typeof flight.arrival)
console.log(flight.manifest)

console.log(typeof flight.toString)
console.log(typeof flight.constructor)

console.log(flight.hasOwnProperty('number'))
console.log(flight.hasOwnProperty('constructor'))

// Enumeration

let name

for (name in another_stoo) {
    if (typeof another_stoo[name] !== 'function') {
        document.write(name + ": " + another_stoo[name] + "<br>")
        console.log(name + ": " + another_stoo[name])
    }
}

let i
let properties = [
    'first-name',
    'middle-name',
    'last-name',
    'profession'
]

for (i = 0; i < properties.length; i++) {
    document.write(properties[i] + ": " + another_stoo[properties[i]])
    console.log(properties[i] + ": " + another_stoo[properties[i]])
}


// Delete
console.log(another_stoo.nickname)

delete another_stoo.nickname
console.log(another_stoo.nickname)

// Reduction mondiale (Global Abatement)
let MyApp = {}

MyApp.stoo = {
    "first-name": "Jerome",
    "last-name": "Joe",
    "nickname": "Niga"
}

MyApp.flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2003-12-22 14:55",
        city: "London"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-11 11:03",
        city: "Los Angeles"
    },
    equipement: {
        model: "Jorimu 838"
    },
    status: "Kuse"
}


// Function

 /** Function d'objet */

 // Function Literal
 let add = function (a, b) {
    return a + b
 }

 // Invocation
  /** Le modele d'invocation de methode */
  let myObject = {
    value: 0,
    increment: function(inc) {
        this.value += typeof inc === "number" ? inc : 1
    }
  }

myObject.increment()
console.log(myObject.value)

myObject.increment(2)
console.log(myObject.value)

// Le Modèles d'Invocation de fonction
let sum = add(3, 4)
console.log(sum)


myObject.double = function() {
    let that = this

    let helper = function() {
        that.value = add(that.value, that.value)
    }

    helper()
}

myObject.double()
document.writeln(myObject.value)
console.log(myObject.value)