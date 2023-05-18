const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

function appendCat(name) {
    const newArray = [...cats, name]
    return newArray
}

function prependCat(name) {
    const newArray = [name, ...cats]
    return newArray
}

function removeLastCat() {
    //const newCats = [...cats]
    //const noReturn = [newCats.splice(-1)]
    //return newCats
    return cats.slice(0, -1)
}

function removeFirstCat() {
    //const newCats = [...cats]
    //const noReturn = [newCats.splice(0, 1)]
    //return newCats
    return cats.slice(1)
}
