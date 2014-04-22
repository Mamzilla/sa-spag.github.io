/**
 *  MAIN SCRIPT
 *  By Alexis Gauthiez
 *  Version 1.0
 */

$(document).ready(function() {
    
    cheet('↑ ↑ ↓ ↓ ← → ← → b a', function(){
        $('.page.dimmer')
            .dimmer('show')
            .dimmer('hide');
    });
    
    // Dimmers
    $('section:not(:first)')
        .dimmer('show')
        .waypoint(function(direction) {
            $(this).dimmer(direction == 'up' ? 'show' : 'hide')
        }, { offset: '20 %' });
    
    // Sticky menu
    var offset = $('nav .item:first').offset().top - $('nav .item:last').offset().top;

    $('.sticky')
        .waypoint('sticky', { offset: offset })
        .css('top', offset + 'px');
    
    $('nav .menu')
        .mouseenter(function(){   
            $('.sticky').animate({  
                top: 5
            }, 'fast');
        })
        .mouseleave(function(){
            $('nav .item:last i').transition('bounce');
            $('.sticky').animate({  
                top: offset
            }, 'fast');
        });
    
    // Smooth scroll
    $('nav a').click(function(){  
        var id = $(this).attr("href");  

        $('html, body').animate({  
            scrollTop: $(id).offset().top  
        }, 'slow');
    });
});