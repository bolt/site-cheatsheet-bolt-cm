
jQuery(function($) { 

    var $container = $('.panels');
    // init
    $container.packery({
          itemSelector: '.columns',
          gutter: 0
    });

    $(document).foundation();

});
