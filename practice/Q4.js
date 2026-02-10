const calculator = () => ({
    add: (a,b) => a+b,
    sub: (a,b) => a-b,
    mul: (a,b) => a*b,
    div: (a,b) => (b==0 ? "Error" : a/b)
})

console.log(calculator().add(11,5));
console.log(calculator().div(11,0));