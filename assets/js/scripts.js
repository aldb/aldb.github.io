(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    new WOW().init();
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 30)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $('#collapsingNavbar li a').click(function(el) {
        /* always close responsive nav after click */
        $('.navbar-toggler:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

    window.location.hash.split('#tag=').map(function(v){
        if (v !== "") {
            var el = document.getElementById(v);
            el.focus();
            el.click()
        }
    })
})(jQuery);

function tags(el) {
    if (el.className === 'tag-active') {
        el.className = '';
        $('.post').show();
        window.location.hash = 'three';
        return true;
    }
    $('.tag-active').attr('class', '');
    el.className = 'tag-active';
    var tag = el.innerHTML.split('(')[0].trim();
    var postsTags = document.getElementsByClassName('tags-mark');


    for (var i =0; i < postsTags.length; i++ ) {
        var tags = postsTags[i].innerHTML.split(',');
        var hide = true;
        for (var k=0;k < tags.length; k++ ){
            if (tags[k].trim() === tag) {
                hide = false;
                break;
            }
        }
        if (hide === true) {
            $(postsTags[i].parentElement.parentElement.parentElement.parentElement).hide();
        }
    }
    window.location.hash = 'tag=' + tag;
}