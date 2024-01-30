const pattern1 = /\d+/g;
const txt1 = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`;
const matches1 = txt1.match(pattern1);
console.log(matches1);

for (let i = 0; i < matches1.length; i++) {
  let yillikGelir =
    parseInt(matches1[0] * 12) +
    parseInt(matches1[1]) +
    parseInt(matches1[2] * 12);
  console.log(yillikGelir + " euro");
}

points = ["-1", "2", "-4", "-3", "-1", "0", "4", "8"];
const sortedPoints = points.sort((a, b) => {
  return a - b;
});

const minNumber = parseInt(points[0]);
const maxNumber = parseInt(points[points.length - 1]);

const distance = maxNumber + Math.abs(minNumber);

console.log(distance);

function isValidVariable(variableName) {
  if (!variableName || /^\d/.test(variableName)) {
    return false;
  }

  if (!/^[a-zA-Z0-9_]+$/.test(variableName)) {
    return false;
  }

  return true;
}

console.log(isValidVariable("first_name"));
console.log(isValidVariable("first-name"));
console.log(isValidVariable("1first_name"));
console.log(isValidVariable("firstname"));

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

function tenMostFrequentWords(paragraph) {
    const words = paragraph.match(/\b\w+\b/g)
    

    const wordCount = {}
    words.forEach(function(word) {
        if (wordCount[word]) {
            wordCount[word]++
        } else {
            wordCount[word] = 1
        }
    })

    const sortedWords = Object.keys(wordCount).sort(function(a,b) {
        return wordCount[b] - wordCount[a]
    })

    const tenWords = sortedWords.slice(0, 10)

    const result = tenWords.map(function(word) {
        return {word: word, count: wordCount[word]}
    })

    return result
}

console.log(tenMostFrequentWords(paragraph))
