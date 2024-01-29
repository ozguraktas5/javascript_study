let pattern = "love";
let regEx = new RegExp(pattern);

console.log(regEx);

let pattern2 = "love";
let flag = "gi";
let regEx2 = new RegExp(pattern, flag);

console.log(regEx2);

let regEx3 = new RegExp("love", "gi");

console.log(regEx3);

let regEx4 = /love/gi;

const str3 = "I love Javascript";
const pattern3 = /love/;
const result3 = pattern3.test(str3);

console.log(result3);

const str4 = "I love Javascript";
const pattern4 = /love/;
const result4 = str4.match(pattern4);

console.log(result4);

const str5 = "I love Javascript";
const pattern5 = /love/g;
const result5 = str5.match(pattern5);

console.log(result5);

const str6 = "I love Javascript";
const pattern6 = /love/g;
const result6 = str6.search(pattern6);

console.log(result6);

const txt =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";
matchReplaced = txt.replace(/Python|python/, "JavaScript");

console.log(matchReplaced);

const txt2 =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";
matchReplaced = txt.replace(/Python|python/g, "JavaScript");

console.log(matchReplaced);

const txt3 =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";
matchReplaced = txt.replace(/Python/gi, "JavaScript");

console.log(matchReplaced);

const txt4 =
  "%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.";
matches = txt4.replace(/%/g, "");

console.log(matches);

const pattern7 = "[Aa]pple";
const txt7 =
  "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ";
const matches7 = txt7.match(pattern7);

console.log(matches7);

const pattern8 = /[Aa]pple/g;
const txt8 =
  "Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. ";
const matches8 = txt8.match(pattern8);

console.log(matches8);

const pattern9 = /[Aa]pple|[Bb]anana/g;
const txt9 =
  "Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.";
const matches9 = txt9.match(pattern9)

console.log(matches9)

const pattern10 = /\d/g
const txt10 = 'This regular expression example was made in January 12,  2020.'
const matches10 = txt10.match(pattern10)

console.log(matches10)

const pattern11 = /\d+/g
const txt11 = 'This regular expression example was made in January 12,  2020.'
const matches11 = txt11.match(pattern11)

console.log(matches11)

const pattern12 = /[a]./g
const txt12 = 'Apple and banana are fruits'
const matches12 = txt12.match(pattern12)

console.log(matches12)

const pattern13 = /[a].+/g
const txt13 = 'Apple and banana are fruits'
const matches13 = txt13.match(pattern13)

console.log(matches13)

const pattern14 = /[a].*/g
const txt14 = 'Apple and banana are fruits'
const matches14 = txt14.match(pattern14)

console.log(matches14)

const pattern15 = /[Ee]-?mail/g
const txt15 = 'I am not sure if there is a convention how to write the word e-mail.\
Some people write it email others may write it as Email or E-mail.'
const matches15 = txt15.match(pattern15)

console.log(matches15)

const pattern16 = /\b\w{4}\b/g
const txt16 = 'This regular expression example was made in December 6,  2019.'
const matches16 = txt16.match(pattern16)

console.log(matches16)

const pattern17 = /\b[a-zA-Z]{4}\b/g
const txt17 = 'This regular expression example was made in December 6,  2019.'
const matches17 = txt17.match(pattern17)

console.log(matches17)

const txt18 = 'This regular expression example was made in December 6,  2019.'
const pattern18 = /\d{4}/g
const matches18 = txt18.match(pattern18)

console.log(matches18)

const txt19 = 'This regular expression example was made in December 6,  2019.'
const pattern19 = /\d{1,4}/g
const matches19 = txt19.match(pattern19)

console.log(matches19)


