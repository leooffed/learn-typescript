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


