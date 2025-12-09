function numberType(num){
    if (num === 0){
        return "Zero"
    }
    else if (num < 0){
        return "Negative"
    }
    else if(num > 0){
        return "Positive"
    }
    else {
        return "Input not valid"
    }
}

let n1 = 15
let n2 = "a"
console.log("Given number "+n1+" is "+numberType(n1));
console.log("Given number "+n2+" is "+numberType(n2));