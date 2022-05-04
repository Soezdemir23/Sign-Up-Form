let footerEl = document.querySelector('footer');
let leftSideEl = document.querySelector('#left-side')

let titleEl = document.querySelector('header')

function getScrollHeight() {
    return document.documentElement.scrollHeight
}

function getElemWidth() {
    return leftSideEl.offsetWidth
}
/**
 * this is going to responsively adjust the titleby 33% and footer by 50% of the whole html being displayed. 
 * this way we can make sure the User is always getting greeted by the same ol' design 
 */
function applyChange() {
    footerEl.style.top = `${getScrollHeight()-50}px`;
    titleEl.style.top = `${getScrollHeight()/3}px`
    if (getElemWidth() < 200) footerEl.style.display = "none"
    else {
        footerEl.style.left = `${(getElemWidth()/2-footerEl.offsetWidth/2)}px`
        
    }

}
//we need to set up the current footer position
applyChange()
// the footer readjust by the movement of the window
window.onresize = applyChange