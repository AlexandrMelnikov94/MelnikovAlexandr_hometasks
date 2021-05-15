var array = [];

do {
    var numberOfSum = parseFloat(prompt('Введите число:', ''));
    if (Number(numberOfSum) || numberOfSum === 0) {
        array.push(numberOfSum);
    }
} while (Number(numberOfSum) || numberOfSum === 0);

var sum = 0;
for (var i = 0; i < array.length; i++) {
    sum += array[i];
}

alert(sum);