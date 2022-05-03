let footerEl = document.querySelector('footer');
let leftSideEl = document.querySelector('#left-side')

function getScrollHeight() {
    return document.documentElement.scrollHeight
}

function getElemWidth() {
    return leftSideEl.offsetWidth
}

function applyChange() {
    footerEl.style.top = `${getScrollHeight()-50}px`;
    if (getElemWidth() < 200) footerEl.style.display = "none"
    else {
        footerEl.style.left = `${(getElemWidth()/2-footerEl.offsetWidth/2)}px`
    }   
}
//we need to set up the current footer position
applyChange()
// the footer readjust by the movement of the window
window.onresize = applyChange
