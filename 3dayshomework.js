let firstName = "Ebru",
    lastName = "Taneli",
    country = "Turkey",
    city = "Bursa",
    age = 29,
    isMarried = false,
    year = 2024

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

console.log('10' === 10)
console.log(parseInt('9.8') === 10)

console.log(Boolean(1))
console.log(Boolean("1"))
console.log(Boolean("merhaba"))

console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean(null))

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != "4")
console.log(4 == '4')
console.log(4 === '4')
console.log(("python".length) > ("jargon".length))

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log((!"dragon".includes("on") && !"python".includes("on")))

const now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth()+1)
console.log(now.getDay())
console.log(now.getHours() + ":" + now.getMinutes())
console.log(now.getMinutes())
let suAn = new Date();
let ocak1970 = new Date(0);
let gecenSure = (suAn - ocak1970) / 1000;
console.log(gecenSure)

// let base = prompt("Enter base:")
// console.log(`Enter base: ${base}`)
// let height = prompt("Enter height:")
// console.log(`Enter height: ${height}`)
// let area = (base * height)/2
// console.log(`The area of the triangle is ${area}`)

// let a = prompt("Enter side a:")
// console.log(`Enter side a: ${a}`)
// let b = prompt("Enter side b:")
// console.log(`Enter side a: ${b}`)
// let c = prompt("Enter side c:")
// console.log(`Enter side a: ${c}`)
// let triangle = parseInt(a) + parseInt(b) + parseInt(c)
// console.log(`The perimeter of the triangle is ${triangle}`)

// let uzunluk = prompt("Uzunlugu giriniz:")
// console.log(`Uzunluk: ${uzunluk}`)
// let genislik = prompt("Genisligi giriniz:")
// console.log(`Genislik: ${genislik}`)
// let alan = parseInt(uzunluk) * parseInt(genislik)
// console.log(`Alan: ${alan}`)
// let cevre = 2 * (parseInt(uzunluk) + parseInt(genislik))
// console.log(`Cevre: ${cevre}`)

// const piSayisi = 3.14
// let yaricap = prompt("Yaricapi giriniz:")
// console.log(`Yaricap: ${yaricap}`)
// let daireAlani = (piSayisi * yaricap * yaricap)
// console.log(`Daire Alani: ${daireAlani}`)
// let daireCevresi = (2 * piSayisi * yaricap)
// console.log(`Daire Cevresi: ${daireCevresi}`)

// let m = 2;
// let b = -2;

// let xKesme = -b / m;
// let yKesme = b;
// let egim = m;

// console.log(`Egim: ${egim}`)
// console.log("Y-ekseniyle kesişim noktası: (" + 0 + ", " + yKesme + ")");
// console.log("X-ekseniyle kesişim noktası: (" + xKesme + ", " + 0 + ")");

// let x1 = 2;
// let y1 = 2;
// let x2 = 6;
// let y2 = 10;

// let egim = (y2-y1) / (x2-x1)
// console.log(`Egim: ${egim}`)

function hesaplaY(x) {
    return Math.pow(x, 2) + 6 * x + 9;
}

let xDegerleri = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

// Y'yi hesapla ve sonuçları konsola yazdır
for (let i = 0; i < xDegerleri.length; i++) {
    let x = xDegerleri[i];
    let y = hesaplaY(x);
    console.log("x = " + x + ", y = " + y);

    // y'nin 0 olduğu durumu kontrol et
    if (y === 0) {
        console.log("y'nin 0 olduğu x değeri: " + x);
    }
}








