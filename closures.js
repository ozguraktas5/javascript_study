function outerfunction() {
    let count = 0;
    function innerfunction() {
        count++
        return count
    }
    return innerfunction
} 

const innerFunc = outerfunction()
console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())

function outerFunction2() {
    let count = 0
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne: plusOne(),
        minusOne: minusOne()
    }
}

const innerFuncs = outerFunction2()
console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)