const urlCountries = "https://restcountries.com/v2/all";
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

// const catAverageWeight = 'https://api.thecatapi.com/v1/breeds';
// fetch(catAverageWeight)
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(cat => {
//             if (cat.weight.metric.match(/\d+/g)) {
//                 console.log(cat.weight.metric)
//             }
//         })
//     })
//     .catch(err => console.log(err))

// fetch(urlCountries)
//   .then((response) => response.json())
//   .then((data) => {
//     data
//       .sort((a, b) => b.area - a.area)
//       .slice(0, 10)
//       .forEach((country) => {
//         console.log(country.name);
//         console.log(country.area);
//       });
//   })
//   .catch((err) => console.log(err));

fetch(urlCountries)
  .then((response) => response.json())
  .then(data => {
    const totalLanguages = [];
    data.forEach(country => {
        if (country.languages && country.languages.length > 0) {
            country.languages.forEach(language => {
                if (!totalLanguages.includes(language.name)) {
                    totalLanguages.push(language.name);
                }
            })
        }
    })
    console.log(totalLanguages.length)
  })
  .catch((err) => console.log(err));
