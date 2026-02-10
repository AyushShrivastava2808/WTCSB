const ans = (num1, num2, operation) => {
    switch(operation) {
        case "add":
            return num1 + num2;
        case "sub":
            return num1 - num2;
        case "mul":
            return num1 * num2;
        case "div":
            return num1 / num2;
        default:
            return "Invalid operation";
    }
};

console.log(ans(2, 3, "add"));
console.log(ans(2, 3, "sub"));
console.log(ans(2, 3, "mul"));
console.log(ans(2, 3, "div"));
console.log(ans(2, 3, "mod"));