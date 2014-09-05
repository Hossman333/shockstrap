var startPosition = 0;
var pagePosition = 0;
var scrollY = 0;
var scrollPrevented = false;

$(document).on('vmousedown', '.dragme', function(event){
    var startPosition = pagePosition;
    $(document).on('vmousemove', function(event2){
        scrollY = event2.pageY;
        console.log(-scrollY);
        $('.cover').css({
            'top': -scrollY
        })
        if(scrollPrevented == false){
          scrollPrevented = true;
          $(document).on('touchmove', function(ev){
            ev.preventDefault();
          });            
        }
    });
});

$(document).on('vmouseup', function(){
    if(scrollPrevented == true){
        $('body').unbind('touchmove');
        scrollPrevented = false;
    }
    $(document).off('vmousemove');
});








