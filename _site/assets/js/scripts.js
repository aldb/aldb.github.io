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
            $(document.getElementById(v)).focus().click();
        }
    })

    setTimeout(function(){ 
        $('#navHeader').attr("style", "visibility: visible"); 
    }, 100);

})(jQuery);


function tags(el) {
    if ($(el).hasClass("tag-active")) {
        $(el).removeClass("tag-active").children().hide();
        $('.post').show();
        window.location.hash = 'three';
        return true;
    }
    $(el).addClass("tag-active").children().show();
    var tag = el.innerHTML.split('(')[0].trim();
    $('.post').hide();
    $(".tags-mark:contains('" + tag + "')").each(function(){
        $(this.parentElement.parentElement.parentElement.parentElement).show();
    });
    window.location.hash = 'tag=' + tag;
}
