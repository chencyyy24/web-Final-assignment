let items = document.getElementsByTagName('section')
var index = 0
var yes = false
function csss(i) {
    yes = true
    window.scrollTo({
        top: items[i].offsetTop,
        behavior: "smooth"
    })
    setTimeout(() => yes = false, 400);
}
addEventListener('wheel', (e) => {
    if (yes) {
        return
    }
    if (e.deltaY > 0) {
        index = Math.min(index + 1, items.length - 1)
    }
    else {
        index = Math.max(index - 1, 0)
    }
    csss(index)
})