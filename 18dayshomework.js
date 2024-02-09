const urlCountries = 'https://restcountries.com/v2/all';
fetch(urlCountries)
    .then(response => response.json())
    .then(data => {
        data.forEach(country => {
            console.log(country.name)
            console.log(country.capital)
            console.log(country.languages.name)
            console.log(country.population)
            console.log(country.area)
        })
    })
    .catch(err => console.log(err))

