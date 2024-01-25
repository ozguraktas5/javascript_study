const companies = new Set()
console.log(companies)

const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setLanguages = new Set(languages)
console.log(setLanguages)

for(const language of setLanguages) {
  console.log(language)
}

const companies2 = new Set()

companies2.add('Facebook')
companies2.add('Google')
companies2.add('Microsoft')
companies2.add('Apple')
companies2.add('IBM')
companies2.add('Oracle')
companies2.add('Amazon')

console.log(companies2.size)
console.log(companies2)

const companies3 = ['Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft']

const companiesSet = new Set()

for (const companies of companies3) {
  companiesSet.add(companies)
}

console.log(companiesSet)

console.log(companiesSet.delete('Amazon'))
console.log(companiesSet)

console.log(companiesSet.has('Oracle'))
console.log(companiesSet.has('Monster'))

companiesSet.clear()
console.log(companiesSet)

const langSet = new Set(languages)
console.log(langSet)
console.log(langSet.size)

const counts = []
const count = {}

for(const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log(filteredLang)
    counts.push({ lang: l, count: filteredLang.length })
}

console.log(counts)