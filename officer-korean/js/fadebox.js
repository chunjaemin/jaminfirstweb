var fadebox = document.getElementById('mini-search-box1');
var cbox = document.getElementById('c-1');
var cboxheight =cbox.offsetHeight
fadebox.style.setProperty('height', 70 + cboxheight + 'px', 'important');
var resizeTimer;

function handleResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        var cboxheight =cbox.offsetHeight
        if (fadebox) {
            fadebox.style.setProperty('height', 70 + cboxheight + 'px', 'important');
        }
    }, 250); // 250ms는 적절한 대기 시간으로 조절 가능합니다.
}

window.addEventListener('resize', handleResize);