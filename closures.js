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

