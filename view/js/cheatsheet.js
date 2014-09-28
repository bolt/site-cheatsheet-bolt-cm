
jQuery(function($) { 

    // SyntaxHighlighter.defaults['auto-links'] = false;
    // SyntaxHighlighter.all();

    //    // Initialize the Fancybox shizzle, if present.
    //    if(jQuery().fancybox) {
    //        $('.fancybox, div.imageholder a').fancybox({ });
    //    }

    addAnchors();

    var $container = $('#panels');
    // init
    $container.packery({
          itemSelector: '.columns',
          gutter: 0
    });

});




    function addAnchors(){
        //loop through all your headers
        $.each($('h2'), function(index, value){
            //append the text of your header to a list item in a div, linking to an anchor we will create on the next line
            $('#box-anchors').append('<li><a href="#anchor-'+index+'">'+$(this).html()+'</a></li>');
            //add an a tag to the header with a sequential name
            var id = URLify($(this).html());
            var anchor = ' <a href="' + id + '" class="anchor">&para;</a>';
            $(this).replaceWith('<h2 id="' + id + '">'+$(this).html() + anchor +'</h2>');
        });
    }

