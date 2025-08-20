let adding = function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw {
            name: "ValueError",
            message: "Add needs numbers"
        }
    }
    return a + b
}
console.log(adding(2, 3))
console.log(adding("Leo"))

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


