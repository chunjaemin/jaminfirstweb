(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });





    
})(jQuery);

function alertt(){
    darkobject=document.querySelectorAll('.darkstart')
    console.log(darkobject)
}

document.querySelectorAll('.darkstart').forEach(function(box) {
    box.addEventListener('touchstart', function() {
    box.classList.toggle('dark');
    });
    box.addEventListener('touchend', function() {
    box.classList.toggle('dark');
    });
});


function visible_click(){
    document.getElementById('n-button').classList.toggle('none_visible');
}



var selectElement1 = document.getElementById("mySelect1");
var selectElement2 = document.getElementById("mySelect2");

selectElement1.addEventListener("change", function () {
    if (selectElement1.value === "23세") {
        alert("23세가 선택되었습니다")
    }
});

function fade_search(){
    if (selectElement1.value=="21세" && selectElement2.value=="2학년"){
        alert('합격');
    }
}

function left_fade_function1(){
    var fadebox1=document.getElementById('fade-box1')
    var searchbox1=document.getElementById('mini-search1')
    fadebox1.classList.toggle('fixleft')
    searchbox1.classList.toggle('imagechange')
}

function search_computer(){
    var mini_box=document.getElementById('mini-search-box1');
    mini_box.classList.toggle('fixleft1');
    document.querySelector('.fade-search-button').classList.toggle('imagechange');
}

