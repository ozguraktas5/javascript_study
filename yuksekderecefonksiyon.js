const callback = (n) => {
    return n ** 2
}

function cube(callback, n) {
    return callback(n) * n
}

console.log(cube(callback, 5))

const higherOrder = n => {
    const doSomething = m => {
        const doWhatEver = t => {
            return 2 * n + 4 * m + t
        }
        return doWhatEver
    }
    return doSomething
}

console.log(higherOrder(5)(6)(7))