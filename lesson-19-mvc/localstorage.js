function TLocalStorage(name) {
  this.lsHash = {};

  if (localStorage.getItem(name)) {
    if(name === 'drinks') {
      var menuObject = JSON.parse(localStorage.drinks);
      this.lsHash = menuObject;
    }
    if (name === 'dishes') {
      var menuObject = JSON.parse(localStorage.dishes)
      this.lsHash = menuObject;
    }
  }

  this.addValue = function (key, value) {
    this.lsHash[key] = value;
  }

  this.getValue = function (key) {
    if (key in this.lsHash) {
      return this.lsHash[key];
    } else {
      return undefined;
    }
  }

  this.deleteValue = function (key) {
    if (key in this.lsHash) {
      delete this.lsHash[key];
      return true;
    } else {
      return false;
    }
  }

  this.getKeys = function () {
    var keys = [];
    for (var key in this.lsHash) {
      keys.push(" " + key);
    }

    return keys;
  }

  this.store  = function () {
    localStorage.setItem(name, JSON.stringify(this.lsHash));
  }
}