const doSomething = callback => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        callback('It did not go well', skills)
    }, 2000)

}

const callback = (error, result) => {
    if (error) {
        return console.log(error)
    }
    return console.log(result)
}

doSomething(callback)