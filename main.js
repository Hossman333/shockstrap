var startPosition = 0;
var pagePosition = 0;
var scrollY = 0;
var scrollPrevented = false;

$(document).on('vmousedown', '.dragme', function(event){
    var startPosition = pagePosition;
    $(document).on('vmousemove', function(event2){
        scrollY = event2.pageY;
        //EWWWWWWWWWW Definitely need to fix this. 2:35am
        if(scrollY <= 270) {$('.power-meter div:nth-child(23)').css('background-color', 'rgb(0, 255, 0)');} else {$('.power-meter div:nth-child(23)').css('background-color', '#fff')}
        if(scrollY <= 260) {$('.power-meter div:nth-child(22)').css('background-color', 'rgb(45, 255, 0)');} else {$('.power-meter div:nth-child(22)').css('background-color', '#fff')}
        if(scrollY <= 250) {$('.power-meter div:nth-child(21)').css('background-color', 'rgb(45, 255, 0)');} else {$('.power-meter div:nth-child(21)').css('background-color', '#fff')}
        if(scrollY <= 240) {$('.power-meter div:nth-child(20)').css('background-color', 'rgb(0, 255, 0)');} else {$('.power-meter div:nth-child(20)').css('background-color', '#fff')}
        if(scrollY <= 230) {$('.power-meter div:nth-child(19)').css('background-color', 'rgb(45, 255, 0)');} else {$('.power-meter div:nth-child(19)').css('background-color', '#fff')}
        if(scrollY <= 220) {$('.power-meter div:nth-child(18)').css('background-color', 'rgb(0, 255, 0)');} else {$('.power-meter div:nth-child(18)').css('background-color', '#fff')}
        if(scrollY <= 210) {$('.power-meter div:nth-child(17)').css('background-color', 'rgb(45, 255, 0)');} else {$('.power-meter div:nth-child(17)').css('background-color', '#fff')}
        if(scrollY <= 200) {$('.power-meter div:nth-child(16)').css('background-color', 'rgb(100, 255, 0)');} else {$('.power-meter div:nth-child(16)').css('background-color', '#fff')}
        if(scrollY <= 190) {$('.power-meter div:nth-child(15)').css('background-color', 'rgb(145, 255, 0)');} else {$('.power-meter div:nth-child(15)').css('background-color', '#fff')}
        if(scrollY <= 180) {$('.power-meter div:nth-child(14)').css('background-color', 'rgb(170, 255, 0)');} else {$('.power-meter div:nth-child(14)').css('background-color', '#fff')}
        if(scrollY <= 170) {$('.power-meter div:nth-child(13)').css('background-color', 'rgb(200, 255, 0)');} else {$('.power-meter div:nth-child(13)').css('background-color', '#fff')}
        if(scrollY <= 160) {$('.power-meter div:nth-child(12)').css('background-color', 'rgb(205, 255, 0)');} else {$('.power-meter div:nth-child(12)').css('background-color', '#fff')}
        if(scrollY <= 150) {$('.power-meter div:nth-child(11)').css('background-color', 'rgb(220, 255, 0)');} else {$('.power-meter div:nth-child(11)').css('background-color', '#fff')}
        if(scrollY <= 140) {$('.power-meter div:nth-child(10)').css('background-color', 'rgb(235, 255, 0)');} else {$('.power-meter div:nth-child(10)').css('background-color', '#fff')}
        if(scrollY <= 130) {$('.power-meter div:nth-child(9)').css('background-color', 'rgb(255, 245, 0)');} else {$('.power-meter div:nth-child(9)').css('background-color', '#fff')}
        if(scrollY <= 120) {$('.power-meter div:nth-child(8)').css('background-color', 'rgb(255, 215, 0)');} else {$('.power-meter div:nth-child(8)').css('background-color', '#fff')}
        if(scrollY <= 110) {$('.power-meter div:nth-child(7)').css('background-color', 'rgb(255, 195, 0)');} else {$('.power-meter div:nth-child(7)').css('background-color', '#fff')}
        if(scrollY <= 100) {$('.power-meter div:nth-child(6)').css('background-color', 'rgb(255, 175, 0)');} else {$('.power-meter div:nth-child(6)').css('background-color', '#fff')}
        if(scrollY <= 90) {$('.power-meter div:nth-child(5)').css('background-color', 'rgb(255, 160, 0)');} else {$('.power-meter div:nth-child(5)').css('background-color', '#fff')}
        if(scrollY <= 80) {$('.power-meter div:nth-child(4)').css('background-color', 'rgb(255, 145, 0)');} else {$('.power-meter div:nth-child(4)').css('background-color', '#fff')}
        if(scrollY <= 70) {$('.power-meter div:nth-child(3)').css('background-color', 'rgb(255, 120, 0)');} else {$('.power-meter div:nth-child(3)').css('background-color', '#fff')}
        if(scrollY <= 60) {$('.power-meter div:nth-child(2)').css('background-color', 'rgb(255, 90, 0)');} else {$('.power-meter div:nth-child(2)').css('background-color', '#fff')}
        if(scrollY <= 50) {$('.power-meter div:nth-child(1)').css('background-color', 'rgb(255, 5, 0)');} else {$('.power-meter div:nth-child(1)').css('background-color', '#fff')}
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