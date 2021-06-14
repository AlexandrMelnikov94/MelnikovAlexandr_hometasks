'use strict';

(function () {
    var imgs = document.getElementsByTagName('img');
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.position = 'absolute';
        imgs[i].addEventListener('mousedown', dragStart, false);
        imgs[i].style.cursor = 'move';
    }
})();

var clickX;
var clickY;
var dragImg;

function dragStart(e) {
    e = e || window.event;
    e.preventDefault();

    dragImg = e.target;
    document.body.appendChild(dragImg);

    clickX = e.pageX - dragImg.offsetLeft;
    clickY = e.pageY - dragImg.offsetTop;

    document.addEventListener('mousemove', dragMove, false);
    document.addEventListener('mouseup', dragFinish, false);
}

function dragMove(e) {
    e = e || window.event;
    e.preventDefault();

    var target = e.target;
    target.style.zIndex = 10;
    target.style.left = e.pageX - clickX + 'px';
    target.style.top = e.pageY - clickY + 'px';
}

function dragFinish() {
    document.removeEventListener('mousemove', dragMove, false);
    document.removeEventListener('mouseup', dragFinish, false);
}