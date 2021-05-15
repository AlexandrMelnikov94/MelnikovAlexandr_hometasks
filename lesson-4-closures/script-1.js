'use strict'

var line = '';
var NumberOfLines = prompt('Количество строк',);
var symbolInLine = prompt('Количетсво символов в строке',);

for (var i = 0; i < NumberOfLines; i++) {
    for (var j = 0; j < symbolInLine; j++) {
        if ((i + j) % 2 === 0) {
            line += '#';
        } else {
            line += ' ';
        }
    }
    line += '\n';
}

console.log(line);