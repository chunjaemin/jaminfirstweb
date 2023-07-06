var fadebox = document.getElementById('mini-search-box1');
var cbox = document.getElementById('c-1');
var cboxheight =cbox.offsetHeight
fadebox.style.setProperty('height', 70 + cboxheight + 'px', 'important');


window.addEventListener(`resize`, function () {
    var cboxheight = cbox.offsetHeight
    if (fadebox) {
        fadebox.style.setProperty('height', 70 + cboxheight + 'px', 'important');
    }
});
