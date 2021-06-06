class THashStorage {
    constructor() {
        this.storage = {};
    }

    add(key, value) {
        this.storage[key] = value;
    }

    getValue(key) {
        return this.storage[key];
    }

    deleteValue(key) {
        if (key in this.storage) {
            return delete this.storage[key];
        } else {
            return false;
        }
    }

    showKeys() {
        return Object.keys(this.storage);
    }
}

var drinkStorage = new THashStorage();

document.querySelector('.btn-add').addEventListener('click', function () {
    add();
})

function add() {
    var drink = {}
    var drinkName = prompt('Введите нзвание', 'Margo').toLowerCase().trim();

    if (drinkName) {
        drink.isAlco = confirm('Напиток алкогольный') ? 'да' : 'нет';
        if (drink.isAlco === true) {
            drink.isAlco = 'да';
        } else {
            drink.isAlco = 'нет';
        }
        drink.recipe = prompt('Введите рецепт', 'Водка + Сок');
        return drinkStorage.add(drinkName, drink);
    } else {
        alert('Ничего не введено');
    }
}

document.querySelector('.btn-get').addEventListener('click', function () {
    showInfo();
})

function showInfo() {
    var drinkName = prompt('Какой напиток ищите?', 'Margo').toLowerCase().trim();
    var getDrinkInfo;
    if (drinkName) {
        getDrinkInfo = drinkStorage.getValue(drinkName);
    } else {
        getDrinkInfo = null;
    }
    var result = '';

    if (getDrinkInfo) {
        var nameDrink = 'Напиток: ' + drinkName + '<br>';
        var isDrinkAlco = 'Алкоголный: ' + getDrinkInfo.isAlco + '<br>';
        var drinkRecipe = 'Рецепт: ' + getDrinkInfo.recipe + '<br>';

        result = nameDrink + isDrinkAlco + drinkRecipe;
    } else {
        result = 'Нету';
    }

    document.querySelector('.information').innerHTML = result;
}

document.querySelector('.btn-show').addEventListener('click', function () {
    showDrinks();
})

function showDrinks() {
    var showInfo = drinkStorage.showKeys();
    var result = '';

    if (showInfo.length) {
        for (var i = 0; i < showInfo.length; i++) {
            result += (i + 1) + ' ' + showInfo[i] + '<br>';
        }
    } else {
        result = 'Пусто'
    }
    document.querySelector('.information').innerHTML = result;
}

document.querySelector('.btn-del').addEventListener('click', function () {
    deleteDrink();
})

function deleteDrink() {
    var drinkName = prompt('Какой напиток удалить', 'Margo').toLowerCase().trim();
    var removeDrink = drinkStorage.deleteValue(drinkName)
    var result = '';

    if (removeDrink) {
        result = drinkName + ' удален';
    } else {
        result = 'Нет таког';
    }
    document.querySelector('.information').innerHTML = result;
}