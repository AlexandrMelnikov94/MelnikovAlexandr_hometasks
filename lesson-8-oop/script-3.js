var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

function anClean(arr) {
    var temp = {};
    for (var i = 0; i < arr.length; i++) {
        var sortWords = arr[i]
            .toLowerCase()
            .split('')
            .sort()
            .join('');
        temp[sortWords] = arr[i];
    }
    return (
        Object.values(temp)
    )
}

console.log(anClean(arr));