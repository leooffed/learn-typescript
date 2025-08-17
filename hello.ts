let helloworld = "Hello, World"
console.log(helloworld)
console.log(typeof helloworld)

/** Utilisation du typage */
type Props =  {
    name: string
    age: number
    year: number
}

/** Utilisation des interfaces */

interface Info {
    name: string
    bio: string
    createdAt: Date
    updatAt: Date
}

function FullInfo({name, age, year}:Props) {
    let fullname = name
    let born = age
    let long = year

    if (born > long) {
        console.log("L'age est superieur, sa ne fonctionne pas")
    } else if (born < long) {
        let result = long * Date.now()
        console.log(result.toFixed())
        console.log(`Bonjour, ${fullname} vous avez ${result} jours cette annees`)
    } else {
        console.log("Error")
    }
}

// Definition des types

interface User {
    name: string
    id: number
}

const user: User = {
    name: "Hayes",
    id: 0,
}

const jouer: User = {
    name: "joueu",
    id: 1
}

console.log(jouer)

// Construction de classe avec les programmation orientee objet

interface Person {
    name: string
    id: number
}

class UserAccount {
    name: string
    id: number

    constructor(name: string, id: number) {
        this.name = name
        this.id = id
    }
}

const person: Person = new UserAccount("Leo", 1)
console.log(person)

// utiliser les interfaces pour annoter les retours de valeurs en functions
function deleteUser(user: Person){

}

/** 
function getAdminUser(): Person {

}
*/

// Syndicats
/**
 * Avec une union, vous pouvez declarer qu'un type peut etre l'un des nombreux types
 */

type MyBook = true | false

type WindowState = "open" | "closed" | "minimized"
type LockStates = "locked" | "unlocked"
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9

// syndicats sur les functions
function getLength(obj: string | string[]) {
    return obj.length
}

// comprendre le type de variable typeof

let logic = "lenght"
console.log(typeof logic)
let numbers = 12
console.log(typeof numbers)
let boolean = true
console.log(typeof boolean)
let float = 12.4
console.log(typeof float)
let arrays = [1,2,3,4,5]
console.log(Array.isArray(arrays))


// Faire en sorte qu'une fonction passe une chaine de charactere ou un tableau selon l'entre

function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        return [obj]
    }
    return obj
}

console.log(wrapInArray(["leo", "klyan", "red"]))
console.log(wrapInArray("leo"))

// Generiques
/**
 * Les generiques fournissent des variables aux types.
 */

type StringArray = Array<String>
type NumberArray = Array<number>
type ObjectWithNameArray = Array<{name: string}>

interface Backpack<Type> {
    add: (obj: Type) => void
    get: () => Type
}

// This line is a chortcut to tell TypeScript there is a 
// constant called `backpack`, and to not worry about where it came from.
declare const backpack:Backpack<string>

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get()

// Since the backpack variable is a string, you can't pass a number to the add function
backpack.add("leo")

// Systeme de types stucturel
/**
 * fondement de typescript est que la verification de type se concentre sur la forme de la valeurs.
 * appeller communement `Typeage canard` ou `typage structurel`
 */

interface Point {
    x: number
    y: number
}

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`)
}

// logs "12, 26"
const points = {x: 12, y: 26}
console.log(logPoint(points))

// les classes
class VirtualPoint {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}

const newVPoint = new VirtualPoint(13, 56)
logPoint(newVPoint)
console.log(logPoint(newVPoint))


// Typages
let fst: (a: any, b: any) => any = (a, b) => a

// or more precisely
let fsts: <T, U>(a: T, b: U) => T = (a, b) => a

// syntaxe de la valeur litteral d'objet
let o: {n: number; xs: object[]} = {n: 1, xs: []}
console.log(o)