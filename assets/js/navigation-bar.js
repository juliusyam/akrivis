// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav_links');
//     const topButton = document.querySelectorAll('.navigation li');
    
//     burger.addEventListener('click', () => {
//         //Toggle Nav
//         nav.classList.toggle('nav_active');
//         //Animate top-button
//         topButton.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation = '';
//             }
//             else {
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
//             }
//         });
//         //Burger Animation
//         burger.classList.toggle('toggle');
//     });

// }

// navSlide();

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
