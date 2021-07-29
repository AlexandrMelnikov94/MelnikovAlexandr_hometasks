const divEl = document.getElementById('page');

let pElementsArray;
let articlesArray;
let sideBarEl;

function switchToContentsPage(EO) {
  EO = EO || window.event;
  EO.preventDefault();
  switchToState({page: 'contents'});
}

function switchToArticlePage(EO) {
  EO = EO || window.event;
  EO.preventDefault();
  if (EO.target.tagName === 'A') {
    switchToState({page: 'article ' + EO.target.attributes[0].value});
  }
}

function switchToState(state) {
  return location.hash = encodeURIComponent(JSON.stringify(state));
}

window.addEventListener('hashchange', renderNewState, false);

function renderNewState() {
  let state = decodeURIComponent(location.hash.substr(1));

  (state === '') ? (state = {page: 'main'}) : (state = JSON.parse(state));

  if (state.page.substr(0, 7) === 'article') {
    createArticlePage();
  }

  switch (state.page) {
    case 'main':
      createMainPage();
      break;
    case 'contents':
      createContentsPage();
      break;
  }
}

renderNewState();

function createMainPage() {
  const header = document.createElement('b');
  header.innerHTML = 'Энциклопедия';
  header.style.fontSize = 40 + 'px';
  const contentsLink = document.createElement('a');
  contentsLink.innerHTML = 'Список статей';
  contentsLink.href = '';
  const br = document.createElement('br');
  divEl.innerHTML = '';
  divEl.appendChild(header);
  divEl.appendChild(br);
  divEl.appendChild(contentsLink);
  contentsLink.addEventListener('click', switchToContentsPage, false);
}

function createContentsPage() {
  const header = document.createElement('b');
  header.innerHTML = 'Оглавление';
  header.style.fontSize = 40 + 'px';
  const br = document.createElement('br');
  const divContentEl = document.createElement('div');
  divContentEl.id = 'content';
  const letterArr = ['A', 'Б', 'В', 'Г', 'Д'];
  for (let z = 0; z < letterArr.length; z++) {
    let pEl = document.createElement('p');
    pEl.innerHTML = letterArr[z];
    divContentEl.appendChild(pEl);
  }

  divEl.innerHTML = '';
  divEl.appendChild(header);
  divEl.appendChild(br);
  divEl.appendChild(divContentEl);

  pElementsArray = document.querySelectorAll('p');

  refreshArticles();

  document.addEventListener('click', switchToArticlePage, false);
}

function createArticlePage() {

  divEl.innerHTML = '';

  let state = JSON.parse(decodeURIComponent(location.hash.substr(1)));
  let src = state.page.substr(8);

  $.ajax(
    {
      url: src + '.html',
      type: 'GET',
      dataType: 'html',
      success: function (EO) {
        divEl.innerHTML = EO;
        divEl.insertAdjacentHTML('afterbegin', `<div id='sidebar' style="float: left; width: 100px; margin: 30px"></div>`);
        sideBarEl = document.getElementById('sidebar');
        if (!articlesArray) {
          refreshArticles();
        } else {
          createSideBar();
        }
      },
      error: errorHandler
    })
}

function createSideBar() {
  sideBarEl = document.getElementById('sidebar');
  for (let i = 0; i < articlesArray.length; i++) {
    let article = articlesArray[i];
    sideBarEl.insertAdjacentHTML('afterbegin', `<a href= ${article.href}>${article.name}</a><br>`);
  }
}


//------------

var updatePassword;

function sendMessage() {
  updatePassword = Math.random();
  $.ajax(
    {
      url: "http://fe.it-academy.by/AjaxStringStorage2.php",
      type: 'POST',
      data: {
        f: 'LOCKGET',
        n: 'Melnikov_Articles',
        p: updatePassword
      },
      cache: false,
      success: lockGetReady,
      error: errorHandler
    }
  );
}

function lockGetReady(resultH) {
  if (resultH.error !== undefined)
    alert(resultH.error);
  else {
    articlesArray = [
      {name: 'арбуз', href: 'articles/watermelon'},
      {name: 'банан', href: 'articles/banana'},
      {name: 'виноград', href: 'articles/grape'},
      {name: 'гранат', href: 'articles/pomegranate'},
      {name: 'дыня', href: 'articles/melon'}];
    if (resultH.result !== "") {
      articlesArray = [
        {name: 'арбуз', href: 'articles/watermelon'},
        {name: 'банан', href: 'articles/banana'},
        {name: 'виноград', href: 'articles/grape'},
        {name: 'гранат', href: 'articles/pomegranate'},
        {name: 'дыня', href: 'articles/melon'}];
      if (!articlesArray.length)
        articlesArray = [];
    }

    $.ajax(
      {
        url: "http://fe.it-academy.by/AjaxStringStorage2.php",
        type: 'POST',
        data: {
          f: 'UPDATE',
          n: 'Melnikov_Articles',
          v: JSON.stringify(articlesArray),
          p: updatePassword
        },
        cache: false,
        success: updateReady,
        error: errorHandler
      }
    );
  }
}

function updateReady(resultH) {
  if (resultH.error !== undefined)
    alert(resultH.error);
}

sendMessage();

function refreshArticles() {
  $.ajax(
    {
      url: "http://fe.it-academy.by/AjaxStringStorage2.php",
      type: 'POST',
      data: {f: 'READ', n: 'Melnikov_Articles'},
      cache: false,
      success: readReady,
      error: errorHandler
    }
  );
}

function readReady(ResultH) {
  if (ResultH.error !== undefined)
    alert(ResultH.error);
  else {
    articlesArray = [];
    if (ResultH.result !== "") {
      articlesArray = JSON.parse(ResultH.result);
      if (!articlesArray.length)
        articlesArray = [];
    }
    if (JSON.parse(decodeURIComponent(location.hash.substr(1))).page.substr(0, 7) !== 'article') {
      showArticles();
    } else {
      document.addEventListener('click', switchToArticlePage, false);
      createSideBar();
    }
  }
}

function showArticles() {
  for (let i = 0; i < articlesArray.length; i++) {
    let article = articlesArray[i];
    switch (article.name.charAt(0)) {
      case 'а':
        pElementsArray[0].insertAdjacentHTML('afterend', `<a href= ${article.href}>${article.name}</a>`);
        break;
      case 'б':
        pElementsArray[1].insertAdjacentHTML('afterend', `<a href= ${article.href}>${article.name}</a>`);
        break;
      case 'в':
        pElementsArray[2].insertAdjacentHTML('afterend', `<a href= ${article.href}>${article.name}</a>`);
        break;
      case 'г':
        pElementsArray[3].insertAdjacentHTML('afterend', `<a href= ${article.href}>${article.name}</a>`);
        break;
      case 'д':
        pElementsArray[4].insertAdjacentHTML('afterend', `<a href= ${article.href}>${article.name}</a>`);
        break;
    }
  }
}

function errorHandler(jqXHR, StatusStr, ErrorStr) {
  alert(StatusStr + ' ' + ErrorStr);
}