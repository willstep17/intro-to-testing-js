// helloWorld function 
// function helloWorld() {
//     return "Hello, World!";
// }

var helloWorld = function() {
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
    if(typeof input === 'boolean') {
        return false;
    } else {
        return (input % 2 === 0);
    }
}

function isVowel(input) {
    if(input.length > 1) {
        var vowelList = 'aeiouAEIOU';
        vowelList.charAt(input) !== -1;
    } else {
        return /[aeiouAEIOU]/.test(input);
    }

}
