function rollDie(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1
}

function greet(msg, person = "Joaquin") {
    return `${msg}, ${person}`
}