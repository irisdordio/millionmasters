//BACK
function goBack() {
    window.history.back();
}

//DRAG OBJECTS
dragElement(document.getElementById("main-drag"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {

        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {

        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;

        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {

        document.onmouseup = null;
        document.onmousemove = null;
    }
}

window.onload = function () {
    // find the element that you want to drag.
    var box = document.getElementById('main-drag');

    /* listen to the touchMove event,
    every time it fires, grab the location
    of touch and assign it to box */

    box.addEventListener('touchmove', function (e) {
        // grab the location of touch
        var touchLocation = e.targetTouches[0];

        // assign box new coordinates based on the touch.
        box.style.left = touchLocation.pageX + 'px';
        box.style.top = touchLocation.pageY + 'px';
    })

    /* record the position of the touch
    when released using touchend event.
    This will be the drop position. */

    box.addEventListener('touchend', function (e) {
        // current box position.
        var x = parseInt(box.style.left);
        var y = parseInt(box.style.top);
    })

}
