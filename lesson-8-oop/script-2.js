function isPal(str) {
    var strMod = str.toLowerCase().replace(/\s+/g, '');
    if (strMod === strMod.split('').reverse().join('')) {
        console.log(str);
        return true;
    } else {
        console.log(str);
        return false;
    }
}

console.log(isPal('anna'));
console.log(isPal('janna'));
console.log(isPal('Anna'));
console.log(isPal('AnNa'));
console.log(isPal('а роза упала на лапу азора'));
console.log(isPal('а роза упала на лапу разора'));
console.log(isPal('абв гг г вба'));