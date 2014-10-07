
jQuery(function($) { 

    var $container = $('.panels');
    // init
    $container.packery({
          itemSelector: '.columns',
          gutter: 0
    });

    $(document).foundation();

    $('a[href*="#"]').click(function(){
        var panel = $($(this).attr("href")).parent().parent();
        panel.animate({"background-color": "#FF6", "border-color": "#888"}).delay(100).animate({"background-color": "#FFF", "border-color": "#ccc"});
        console.log('hoi', panel);
    });

});
