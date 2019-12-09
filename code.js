// helloWorld function 
// function helloWorld() {
//     return "Hello, World!";
// }

function helloWorld() {
    return "Hello, World!";
}

var test = true;

function sayHello(input) {
    return (typeof input === 'string' && input.length > 0 && isNaN(input)) ?
        "Hello, " + input + "!" : "Hello, World!";
}

function isFive(input) {
    return (parseFloat(input) === 5);
}

function isEven(input) {
    return typeof input !== 'boolean' && input % 2 === 0;
}

function isVowel(input) {
    if(typeof input === 'string' && input.length === 1) {
        var vowelList = 'aeiouAEIOU';
        return (vowelList.indexOf(input) !== -1);
    }
    return false;
}

function add(a, b) {
    if(typeof Number(a) === 'number' && typeof Number(b) === 'number') {
        return a + b;
    }
    return NaN;
}
