// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
function sayHello(input){
    if (input === false) {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive(input) {
    return input == 5
}

function isEven(input) {
    return input % 2 === 0;
}

function isVowel(input) {
    return 'aeiouAEIOU'.includes(input);
}

