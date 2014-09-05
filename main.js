$(function() {
    $(".dial").knob({
        "fgColor":"#FECE06",
        "width":"200",
        change: function (value) {
            $('.text-container').empty();
            if(value >= 1 && value < 14) {
                $('.text-container').append('<h1>Cringe</h1>');
                $('.dial').trigger(
                    'configure',
                    {
                        "fgColor":"#FECE06"
                    }
                )
            } if(value >= 14 && value < 28) {
                $('.text-container').append('<h1>Yelp</h1>');
                $('.dial').trigger(
                    'configure',
                    {
                        "fgColor":"#FECE06"
                    }
                )
            } if(value >= 28 && value < 42) {
                $('.text-container').append('<h1>Grunt</h1>');
                $('.dial').trigger(
                    'configure',
                    {
                        "fgColor":"#F9700B"
                    }
                )
            } if(value >= 42 && value < 56) {
                $('.text-container').append('<h1>Scream</h1>');
                $('.dial').trigger(
                    'configure',
                    {
                        "fgColor":"#F9700B"
                    }
                )
            } if(value >= 56 && value < 70) {
                $('.text-container').append('<h1>Cry like a baby</h1>');
                $('.dial').trigger(
                    'configure',
                    {
                        "fgColor":"#A31D21"
                    }
                )
            } if(value >= 70 && value < 100) {
                $('.text-container').append('<h1>omg!! kill him!</h1>');
                $('.dial').trigger(
                    'configure',
                    {
                        "fgColor":"#A31D21"
                    }
                )
            }
        }
    });

    $('.button').click(function() {
        $(this).toggleClass('button-clicked');
        $(this).toggleClass('pulse');
    })

});