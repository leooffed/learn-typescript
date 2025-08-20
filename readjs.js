let adding = function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw {
            name: "ValueError",
            message: "Add needs numbers"
        }
    }
    return a + b
}
// Make a try_it function that calls the new add
// function incorrectly.
let try_it = function () {
    try {
        adding("seven")
    } catch (e) {
        console.log(e.name + ': ' + e.message)
    }
}
try_it()

// Types d'augmentation

Function.prototype.method = function (name, func) {
    this.prototype[name] = func
    return this
}

Number.method('integer', function(){
    return Math[this < 0 ? 'ceil': 'floor'](this)
})

// JavaScript ne dispose pas d'une methode pour supprimer les espaces

String.method('trim', function(){
    return this.replace(/^\s+|\s+$/g, '')
})

// Add a method condictionally


Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func
        return this
    }
}

// Recursion (Récursivité )
let hanoi = function hanoi(disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc - 1, src, dst, aux)
        console.log('Move disc ' + disc + ' from ' + src + ' to ' + dst )
        hanoi(disc - 1, aux, src, dst)
    }
}

/**
 * 
 * Define a walk_the_DOM function that visit every
 * node of the tree in HTML source order, starting
 * from some given node. It invokes a function,
 * passing it each node in turn. walk_the_DOM calls
 * itself to process each of the child nodes.
 */

let walk_the_DOM = function walk(node, func) {
    func(node)
    node = node.firstChild
    while (node) {
        walk(node, func) 
        node = node.nextSibling
    }
}

/**
 * Define a getElementByAttribute function.
 * It takes an attribute name string and an optional
 * matching value. It calls walk_the_DOM, passing it a
 * function that looks for an attribute name in the 
 * node. The matching nodes are accumulated in a 
 * results array.
 */

let getElementsByAttribute = function (att, value) {
    let results = []

    walk_the_DOM(document.body, function (node) {
        let actual = node.nodeType === 1 && node.getAttribute(att)
        if (typeof actual === 'string' && (actual === value || typeof value !== 'string')) {
            results.push(node)
        }
    })
    return results
}


hanoi(3, 'Src', 'Aux', 'Dst')

console.log('"' + "   neat   ".trim() + '"')

console.log((-10 / 3).integer())

console.log(adding(2, 3))
console.log(adding("Leo"))






