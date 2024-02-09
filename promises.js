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

const doSomething2 = callback => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        callback(false, skills)
    }, 2000)
}

doSomething2((error, result) => {
    if (error) {
        return console.log(error)
    }
    return console.log(result)
})

const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if (skills.length > 0) {
            resolve(skills)
        } else {
            reject('Something wrong has happened')
        }
    }, 2000)
})

doPromise
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error))

const doPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if (skills.includes('Node')) {
            resolve('fullstack developer')
        } else {
            reject('Something wrong has happened')
        }
    }, 2000)
})

doPromise2
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error))

const url = 'https://restcountries.com/v2/all'
fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

const square = async function (n) {
    return n * n
}

const calculateSquare = async function() {
    const value = await square(2)
    console.log(value)
}

calculateSquare()

const url2 = 'https://restcountries.com/v2/all'
fetch(url2)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

const fetchData = async () => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)
    } catch (err) {
        console.log(err)
    }
}

console.log('===== async and await')
fetchData()
