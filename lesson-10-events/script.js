var fieldsOfFrom = [
    {label: 'Разработчики:', type: 'text', name: 'developers'},
    {label: 'Название сайта:', type: 'text', name: 'siteName'},
    {label: 'URL сайта:', type: 'text', name: 'URL'},
    {label: 'Дата запуска:', type: 'text', name: 'startProject'},
    {label: 'Посетителей в сутки:', type: 'text', name: 'visitorsPerDay'},
    {label: 'E-mail для связки:', type: 'text', name: 'email'},
    {
        label: 'Рубрика каталога:',
        type: 'select',
        name: 'catalog',
        selection: [{longtext: 'здоровье'}, {text: 'домашний уют'}, {
            text: 'бытовая техника'
        }]
    },
    {
        label: 'Размещение:', type: 'radio', name: 'cost',
        selection: [{text: 'бесплатное'}, {text: 'платное'}, {text: 'VIP'}]
    },
    {label: 'Разрешить отзывы:', type: 'checkbox', name: 'permission'},
    {label: 'Описание сайта:', type: 'textarea', name: 'siteDescribe'},
    {label: 'Опубликовать', type: 'submit', name: 'publish'}
];

createForm();


function createForm() {
    var form = document.getElementById('formForSite');
    for (var i = 0; i < fieldsOfFrom.length; i++) {
        for (var j in fieldsOfFrom[i]) {
            if (fieldsOfFrom[i][j] === 'Разработчики:') {
                var label = document.createElement('label');
                form.appendChild(label);
                var br = document.createElement('br');
                form.appendChild(br);
                var showName = document.createTextNode('Разработчики:');
                label.appendChild(showName);
                var dev = document.createElement('input');
                label.appendChild(dev);
                dev.setAttribute('style', 'margin-left :49.5px');
            }
            if (fieldsOfFrom[i][j] === 'Название сайта:') {
                label = document.createElement('label');
                form.appendChild(label);
                br = document.createElement('br');
                form.appendChild(br);
                showName = document.createTextNode('Название сайта:');
                label.appendChild(showName);
                var siteName = document.createElement('input');
                label.appendChild(siteName);
                siteName.setAttribute('style', 'margin-left :38px');
            }
            if (fieldsOfFrom[i][j] === 'URL сайта:') {
                label = document.createElement('label');
                form.appendChild(label);
                br = document.createElement('br');
                form.appendChild(br);
                showName = document.createTextNode('URL сайта:');
                label.appendChild(showName);
                var url = document.createElement('input');
                label.appendChild(url);
                url.setAttribute('style', 'margin-left :70px');

            }
            if (fieldsOfFrom[i][j] === 'Дата запуска:') {
                label = document.createElement('label');
                form.appendChild(label);
                br = document.createElement('br');
                form.appendChild(br);
                showName = document.createTextNode('Дата запуска:');
                label.appendChild(showName);
                var startProject = document.createElement('input');
                label.appendChild(startProject);
                startProject.setAttribute('style', 'margin-left :55px');

            }
            if (fieldsOfFrom[i][j] === 'Посетителей в сутки:') {
                label = document.createElement('label');
                form.appendChild(label);
                br = document.createElement('br');
                form.appendChild(br);
                showName = document.createTextNode('Посетителей в сутки:');
                label.appendChild(showName);
                var visitorsPerDay = document.createElement('input');
                label.appendChild(visitorsPerDay);
                visitorsPerDay.setAttribute('style', 'margin-left :1px');

            }
            if (fieldsOfFrom[i][j] === 'E-mail для связки:') {
                label = document.createElement('label');
                form.appendChild(label);
                br = document.createElement('br');
                form.appendChild(br);
                showName = document.createTextNode('E-mail для связки:');
                label.appendChild(showName);
                var email = document.createElement('input');
                label.appendChild(email);
                email.setAttribute('style', 'margin-left :23px');
            }
            if (fieldsOfFrom[i][j] === 'Рубрика каталога:') {
                label = document.createElement('label');
                form.appendChild(label);
                br = document.createElement('br');
                form.appendChild(br);
                showName = document.createTextNode('Рубрика каталога:');
                label.appendChild(showName);
                if (fieldsOfFrom[i].selection) {
                    for (var n = 0; n < fieldsOfFrom[i].selection.length; n++) {
                        for (var m in fieldsOfFrom[i].selection[n]) {
                            if (fieldsOfFrom[i].selection[n][m] === 'здоровье') {
                                var catalog = document.createElement('select');
                                label.appendChild(catalog);
                                var variant = document.createElement('option');
                                catalog.appendChild(variant);
                                var health = document.createTextNode('здоровье');
                                variant.appendChild(health);

                            }
                            if (fieldsOfFrom[i].selection[n][m] === 'домашний уют') {
                                variant = document.createElement('option');
                                catalog.appendChild(variant)
                                var cosiness = document.createTextNode('домашний уют');
                                variant.appendChild(cosiness);
                            }
                            if (fieldsOfFrom[i].selection[n][m] === 'бытовая техника') {
                                variant = document.createElement('option');
                                catalog.appendChild(variant)
                                var teh = document.createTextNode('бытовая техника');
                                variant.appendChild(teh);
                            }
                        }
                    }
                }
                catalog.setAttribute('style', 'margin-left :24.5px');
            }

            if (fieldsOfFrom[i][j] === 'Размещение:') {
                label = document.createElement('label');
                form.appendChild(label);
                br = document.createElement('br');
                form.appendChild(br);
                showName = document.createTextNode('Размещение:');
                label.appendChild(showName);

                if (fieldsOfFrom[i].selection) {
                    for (var l = 0; l < fieldsOfFrom[i].selection.length; l++) {
                        for (var k in fieldsOfFrom[i].selection[l]) {
                            if (fieldsOfFrom[i].selection[l][k] === 'бесплатное') {
                                var radioButton = document.createElement('input');
                                radioButton.setAttribute('type', 'radio');
                                radioButton.setAttribute('name', 'radioCheck');
                                label.appendChild(radioButton);
                                var free = document.createTextNode('бесплатное');
                                label.appendChild(free);
                                radioButton.setAttribute('style', 'margin-left :59px');
                            }
                            if (fieldsOfFrom[i].selection[l][k] === 'платное') {
                                radioButton = document.createElement('input');
                                radioButton.setAttribute('type', 'radio');
                                radioButton.setAttribute('name', 'radioCheck');
                                label.appendChild(radioButton);
                                var notFree = document.createTextNode('платное');
                                label.appendChild(notFree);
                            }
                            if (fieldsOfFrom[i].selection[l][k] === 'VIP') {
                                radioButton = document.createElement('input');
                                radioButton.setAttribute('type', 'radio');
                                radioButton.setAttribute('name', 'radioCheck');
                                label.appendChild(radioButton);
                                var vip = document.createTextNode('VIP');
                                label.appendChild(vip);
                            }
                        }
                    }
                }

            }
            if (fieldsOfFrom[i][j] === 'Разрешить отзывы:') {
                label = document.createElement('label');
                form.appendChild(label);
                br = document.createElement('br');
                form.appendChild(br);
                showName = document.createTextNode('Разрешить отзывы:');
                label.appendChild(showName);
                var allowReviews = document.createElement('input');
                allowReviews.setAttribute('type', 'checkbox');
                label.appendChild(allowReviews);
                allowReviews.setAttribute('style', 'margin-left :15px');
            }

            if (fieldsOfFrom[i][j] === 'Описание сайта:') {
                label = document.createElement('label');
                form.appendChild(label);
                br = document.createElement('br');
                form.appendChild(br);
                showName = document.createTextNode('Описание сайта:');
                label.appendChild(showName);
                label.appendChild(br);
                var siteDescribe = document.createElement('textarea');
                label.appendChild(siteDescribe);
                siteDescribe.setAttribute('style', 'width  :313px');
            }

            if (fieldsOfFrom[i][j] === 'Опубликовать') {
                br = document.createElement('br');
                form.appendChild(br);
                var publish = document.createElement('input');
                publish.setAttribute('type', 'submit');
                form.appendChild(publish);
            }
        }
    }
}