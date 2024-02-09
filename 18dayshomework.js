// const urlCountries = 'https://restcountries.com/v2/all';
// fetch(urlCountries)
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(country => {
//             console.log(country.name)
//             console.log(country.capital)
//             console.log(country.languages.name)
//             console.log(country.population)
//             console.log(country.area)
//         })
//     })
//     .catch(err => console.log(err))

// const catNames = 'https://api.thecatapi.com/v1/breeds';
// fetch(catNames)
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(cat => {
//             console.log(cat.name)
//         })
//     })
//     .catch(err => console.log(err))

const catAverageWeight = 'https://api.thecatapi.com/v1/breeds';
fetch(catAverageWeight)
    .then(response => response.json())
    .then(data => {
        data.forEach(cat => {
            if (cat.weight.metric.match(/\d+/g)) {
                console.log(cat.weight.metric)
            }
        })
    })
    .catch(err => console.log(err))

