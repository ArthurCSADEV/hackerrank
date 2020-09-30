'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function Rectangle(a, b) {
    var rectangle = { 
        length: a,
        width: b,
        perimeter: (a+b)*2,
        area: (a*b)
    } 
    return rectangle;
};

