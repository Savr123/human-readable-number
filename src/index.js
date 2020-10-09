let numbers = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety"        
}
module.exports = function toReadable (number) {
    if (number === 0) {
        return "zero";
    }
    let str = [];
    let units = number % 10;
    let dozens = Math.floor((number % 100) / 10);
    let hundreds = Math.floor(number / 100);
    if (hundreds) {
        str.push(numbers[hundreds], 'hundred');
    }  

    if (number % 100 <= 20 && number % 100 > 0) {
        str.push(numbers[number % 100]);
    } else {  
        if (dozens) {
            str.push(numbers[dozens * 10]);
        }    
        if (units) {
            str.push(numbers[units])
        }    
    }
    let str1 = str.join(" ");

    return str1;
}
