function AjaxStorage() {
  var self = this;
  var updatePassword;
  self.hashStorage = {};

  var AjaxHandlerScript = "http://fe.it-academy.by/AjaxStringStorage2.php";

  $.ajax(
    {
      url: AjaxHandlerScript,
      type: "POST",
      dataType: "json",
      data: {
        f: "READ",
        n: "Melnikov"
      },
      success: update,
      error: errorHandler
    }
  );

  function update(data) {
    self.hashStorage = JSON.parse(data.result);
    console.log(data.result);
  }

  function errorHandler(statusStr, errorStr) {
    alert(statusStr + ' ' + errorStr);
  }

  self.addValue = function (key, value) {
    self.hashStorage[key] = value;
    sendInfo(self.hashStorage);
  }

  function sendInfo() {
    updatePassword = Math.random();
    $.ajax(
      {
        url: AjaxHandlerScript,
        type: 'POST',
        dataType: "json",
        data: {
          f: 'LOCKGET',
          n: 'Melnikov',
          p: updatePassword
        },
        cache: false,
        success: lockGetReady,
        error: errorHandler
      }
    );
  }

  function lockGetReady() {
    $.ajax(
      {
        url: AjaxHandlerScript,
        type: 'POST',
        dataType: "json",
        data: {
          f: 'UPDATE',
          n: 'Melnikov',
          v: JSON.stringify(self.hashStorage),
          p: updatePassword
        },
        cache: false,
        success: updateReady,
        error: errorHandler
      }
    );
  }

  function updateReady() {
    console.log("Данные отправлены");
  }

  self.getValue = function (key) {
    if (key in self.hashStorage) {
      return self.hashStorage[key];
    } else {
      return undefined;
    }
  }

  self.deleteValue = function (key) {
    if (key in self.hashStorage) {
      delete self.hashStorage[key];
      sendInfo(self.hashStorage);
      return true;
    } else {
      return false;
    }
  }

  self.getKeys = function () {
    var keys = [];
    for (var key in self.hashStorage) {
      keys.push(" " + key);
    }
    return keys;
  };
}