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
