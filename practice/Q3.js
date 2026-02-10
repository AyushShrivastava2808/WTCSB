// prompt works only for browser
// so to take input on terminal we have to create a set of input and output
// this is done using readline module
const r1 = require("readline").createInterface({
    input : process.stdin,
    output : process.stdout
});

r1.question("Enter something: ",
    (answer) => {
        console.log("you entered:", answer);
        r1.close();
    }
)