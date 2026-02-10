
// Check Even
const ans = (n) => {
    if(n%2==0){
        return true;
    }
    return false
}

console.log(ans(2))

// Reverse String
const rev = (str) => {
    let l = str.length-1;
    let revStr = "";
    while(l>=0) {
        revStr += str[l];
        l--;
    }
    return revStr
}

console.log(rev("ayush"));

const result = (n) => {
    if(n>40){
        return Pass;
    }
    return false;
}

console.log(result(40));