var startPosition = 0;
var pagePosition = 0;
var scrollY = 0;
var scrollPrevented = false;

$(document).on('vmousedown', '.dragme', function(event){
    var startPosition = pagePosition;
    $(document).on('vmousemove', function(event2){
        scrollY = event2.pageY;
        console.log(scrollY);
        if(scrollY <= 700) {$('.power-meter div:eq(54)').css('background-color', 'rgb(0, 255, 0)');}
        if(scrollY <= 690) {$('.power-meter div:eq(53)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 680) {$('.power-meter div:eq(52)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 670) {$('.power-meter div:eq(51)').css('background-color', 'rgb(0, 255, 0)');}
        if(scrollY <= 660) {$('.power-meter div:eq(50)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 650) {$('.power-meter div:eq(49)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 640) {$('.power-meter div:eq(48)').css('background-color', 'rgb(0, 255, 0)');}
        if(scrollY <= 630) {$('.power-meter div:eq(47)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 620) {$('.power-meter div:eq(46)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 610) {$('.power-meter div:eq(45)').css('background-color', 'rgb(0, 255, 0)');}
        if(scrollY <= 600) {$('.power-meter div:eq(44)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 590) {$('.power-meter div:eq(43)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 580) {$('.power-meter div:eq(42)').css('background-color', 'rgb(0, 255, 0)');}
        if(scrollY <= 570) {$('.power-meter div:eq(41)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 560) {$('.power-meter div:eq(40)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 550) {$('.power-meter div:eq(39)').css('background-color', 'rgb(0, 255, 0)');}
        if(scrollY <= 540) {$('.power-meter div:eq(38)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 530) {$('.power-meter div:eq(37)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 520) {$('.power-meter div:eq(36)').css('background-color', 'rgb(0, 255, 0)');}
        if(scrollY <= 510) {$('.power-meter div:eq(35)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 500) {$('.power-meter div:eq(34)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 490) {$('.power-meter div:eq(33)').css('background-color', 'rgb(0, 255, 0)');}
        if(scrollY <= 480) {$('.power-meter div:eq(32)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 470) {$('.power-meter div:eq(31)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 460) {$('.power-meter div:eq(30)').css('background-color', 'rgb(0, 255, 0)');}
        if(scrollY <= 450) {$('.power-meter div:eq(29)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 440) {$('.power-meter div:eq(28)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 430) {$('.power-meter div:eq(27)').css('background-color', 'rgb(0, 255, 0)');}
        if(scrollY <= 420) {$('.power-meter div:eq(26)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 410) {$('.power-meter div:eq(25)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 400) {$('.power-meter div:eq(24)').css('background-color', 'rgb(0, 255, 0)');}
        if(scrollY <= 390) {$('.power-meter div:eq(23)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 380) {$('.power-meter div:eq(22)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 370) {$('.power-meter div:eq(21)').css('background-color', 'rgb(0, 255, 0)');}
        if(scrollY <= 360) {$('.power-meter div:eq(20)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 350) {$('.power-meter div:eq(19)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 340) {$('.power-meter div:eq(18)').css('background-color', 'rgb(0, 255, 0)');}
        if(scrollY <= 330) {$('.power-meter div:eq(17)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 320) {$('.power-meter div:eq(16)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 310) {$('.power-meter div:eq(15)').css('background-color', 'rgb(0, 255, 0)');}
        if(scrollY <= 300) {$('.power-meter div:eq(14)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 290) {$('.power-meter div:eq(13)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 280) {$('.power-meter div:eq(12)').css('background-color', 'rgb(0, 255, 0)');}
        if(scrollY <= 270) {$('.power-meter div:eq(11)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 260) {$('.power-meter div:eq(10)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 250) {$('.power-meter div:eq(9)').css('background-color', 'rgb(0, 255, 0)');}
        if(scrollY <= 240) {$('.power-meter div:eq(8)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 230) {$('.power-meter div:eq(7)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 220) {$('.power-meter div:eq(6)').css('background-color', 'rgb(0, 255, 0)');}
        if(scrollY <= 210) {$('.power-meter div:eq(5)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 200) {$('.power-meter div:eq(4)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 190) {$('.power-meter div:eq(3)').css('background-color', 'rgb(0, 255, 0)');}
        if(scrollY <= 180) {$('.power-meter div:eq(2)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 170) {$('.power-meter div:eq(1)').css('background-color', 'rgb(45, 255, 0)');}
        if(scrollY <= 160) {$('.power-meter div:eq(0)').css('background-color', 'rgb(255, 5, 0)');}
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