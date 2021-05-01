var lineOfText = prompt('Enter the string');

function search() {
    var countVowels = 0;
    var vowels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е'];
    lineOfText = lineOfText.toLocaleLowerCase();

    for (var i = 0; i < lineOfText.length; i++)
        for (var j = 0; j < vowels.length; j++)
            if (lineOfText[i] === vowels[j]) {
                ++countVowels;
                break;
            }
    return countVowels;
}

alert(search());