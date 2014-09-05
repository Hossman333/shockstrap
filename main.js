$(function() {
    $(".dial").knob({
        "fgColor":"#000",
        "width":"200"
    });

    $('.button').click(function() {
        $(this).toggleClass('button-clicked');
    })

});