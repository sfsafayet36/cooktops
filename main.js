let images = document.getElementById('images')
let pos;
function addrun() {
    pos = 0;
    let setint = setInterval(function () {

        pos++
        images.style.right = pos + 'px';
        images.style.transition = '10ms ease'

        if (pos == 1225) {
            clearInterval(setint)
            addreverse()
        }


    }, 15)
}
addrun()

function addreverse() {
    let setint2 = setInterval(function () {
        pos--

        images.style.right = pos + 'px'

        if (pos == 0) {
            clearInterval(setint2)
            addrun()
        }
    }, 15)
}

