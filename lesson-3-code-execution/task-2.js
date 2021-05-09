var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

//Before
function showKeys(image) {
    for (var key in image) {
        alert('Ключ: ' + key + ', значение: ' + image[key]);
    }
}

showKeys(image);

//After
function multiplyNumeric(image) {
    for(var key in image) {
        if(typeof image[key] == 'number') {
            image[key] *= 2;
        }
        alert('Ключ: ' + key + ', значение: ' + image[key])
    }
}

multiplyNumeric(image);