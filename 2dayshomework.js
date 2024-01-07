let Challenge = "30 Days Of Javascript";
console.log(Challenge);
console.log(Challenge.length);

let buyukHarfler = Challenge.toUpperCase();
console.log(buyukHarfler);
let kucukHarfler = Challenge.toLowerCase();
console.log(kucukHarfler);

let substr = Challenge.substring(0, 2);
console.log(substr);

let substr2 = Challenge.substring(3);
console.log(substr2);

console.log(Challenge.includes("Script"));
console.log(Challenge.split(""));

console.log(Challenge.includes("Script"));
console.log(Challenge.split(" "));

console.log(
  "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(",")
);

console.log(Challenge.replace("Javascript", "Python"));

console.log("JavaScript'in 30 Günü".charAt(15));
console.log("JavaScript'in 30 Günü".charCodeAt("J"));

console.log(Challenge.indexOf("a"));
console.log(Challenge.lastIndexOf("a"));

console.log(
  "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır".indexOf(
    "çünkü"
  )
);
console.log(
  "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır".lastIndexOf(
    "çünkü"
  )
);
console.log(
  "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır".search(
    "çünkü"
  )
);

console.log("   30 Days Of Javascript   ".trim());
console.log(Challenge.startsWith(3));
console.log(Challenge.endsWith("t"));
console.log("Javascript'in 30 Günü".match(/a/gi));
console.log("30 Days of".concat(" Javascript"));
console.log("30 Gün Javascript".repeat(2));

console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

console.log(typeof "10" == typeof 10);
let nmbr = parseInt("10");
console.log(nmbr);

console.log(parseFloat("9.8") == 10);
console.log("python".includes("on"));
console.log("jargon".includes("on"));
console.log("Umarım bu kurs jargonla dolu değildir.".includes("jargon"));

let sayi = Math.random() * 101;
console.log(Math.round(sayi));

let rastgeleSayi = Math.floor(Math.random() * 51) + 50;
console.log(rastgeleSayi);

let rastgeleSayi2 = Math.floor(Math.random() * 256);
console.log(rastgeleSayi2);

let string = "JavaScript";
let rastgeleIndex = Math.floor(Math.random() * string.length);
console.log(string[rastgeleIndex]);

console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

console.log(
  "Aşk bu dünyadaki en iyi şeydir. Bazıları aşkını buldu ve bazıları hala aşkını arıyor.".match(
    /aşk/gi
  )
);
console.log(
  "Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır".match(
    /çünkü/gi
  )
);

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching"
const clean = (sentence.replace(/[^\w\s]/gi, ''));
const words = clean.split(' ');
const wordFrequency = {};
words.forEach(word => {
    word = word.toLowerCase();
    wordFrequency[word] = (wordFrequency[word] || 0) + 1;
})

let mostFrequentWord = null;
let highestFrequency = 0;

for (const word in wordFrequency) {
  if (wordFrequency[word] > highestFrequency) {
    mostFrequentWord = word;
    highestFrequency = wordFrequency[word];
  }
}

console.log("En sık kullanılan kelime:", mostFrequentWord);
console.log("Frekansı:", highestFrequency);