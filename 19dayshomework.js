function disFonksiyon() {
  let number = 2;
  function icFonksiyon() {
    number * 2;
    return number;
  }

  return icFonksiyon;
}

let fonksiyon = disFonksiyon();
console.log(fonksiyon());
console.log(fonksiyon());
console.log(fonksiyon());

function outerFunction3() {
  let array = [];
  function addArray() {
    array.push("Ali");
    return array;
  }
  function removeArray() {
    array.pop();
    return array;
  }
  function clearArray() {
    array = [];
    return array;
  }
  return {
    addArray: addArray,
    removeArray: removeArray,
    clearArray: clearArray,
  };
}

const innerFuncs2 = outerFunction3();

console.log(innerFuncs2.addArray());
console.log(innerFuncs2.removeArray());
console.log(innerFuncs2.clearArray());
