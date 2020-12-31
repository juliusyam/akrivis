var burgerState = 0;

$('.burger').click(function(){
    if (burgerState == 0) {
        $(this).addClass('toggle');
        $('.nav-box').fadeIn('slow').addClass('active').css('display', 'flex');
        $('.navigation').fadeIn('slow').addClass('activeNavBackground');
        burgerState = 1;
    } else {
        $(this).removeClass('toggle');
        $('.nav-box').fadeOut('slow').removeClass('active');
        $('.navigation').removeClass('activeNavBackground');
        burgerState = 0;
    }
});

$('.menu').children('a').click(function(){
    $('.burger').removeClass('toggle');
    $('.nav-box').fadeOut('slow').removeClass('active');
    $('.navigation').removeClass('activeNavBackground');
    burgerState = 0;
})
