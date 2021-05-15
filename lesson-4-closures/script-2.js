var obj = {
    className: 'menu my menu open menu menu class menu opa opa blabla menu'
};

function removeClass(obj, cls) {
    var arr = obj.className.split(' ');

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === cls) {
            arr[i] = '';
        }
    }
    return arr.join(' ');
}


console.log(removeClass(obj, 'menu').trim().replace(/\s+/g, ' '));