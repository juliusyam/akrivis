$(window).ready(function(){
    $('.individual-project').empty();
    $('.individual-project').load('/projects/project1');

    $('section.blockquote-section').effect("fold", { mode : "show",  size : 105}, 2000);
});

//Toggles!
let gridToggleState = 0;

$('span#grid-toggle').click(function(){
    if (gridToggleState == 0) {
        $('.header-container .grid').fadeIn('slow').addClass('active').css('display', 'flex');
        $('div.header-container').css('justify-content', 'space-around');
        $(this).children('i').addClass('fa-arrow-circle-up').removeClass('fa-arrow-circle-down');
        gridToggleState = 1;
    } else {
        $('.header-container .grid').fadeOut('slow').removeClass('active').css('display', 'none');
        $('div.header-container').css('justify-content', 'center');
        $(this).children('i').addClass('fa-arrow-circle-down').removeClass('fa-arrow-circle-up');
        gridToggleState = 0;
    }
});


$('.homepage_navToAbout').click(function(){
    $([document.documentElement, document.body]).animate({  
        scrollTop: $('#about').offset().top
    }, 1000);
});

$('.homepage_navToService').click(function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $('#service').offset().top
    }, 1500);
});


$(window).scroll(function(){

    $('.header-container .grid').fadeOut('slow').removeClass('active').css('display', 'none');
    $('div.header-container').css('justify-content', 'center');
    $('span#grid-toggle').children('h5').html("Find Out More");
    $('span#grid-toggle').children('i').addClass('fa-arrow-circle-down').removeClass('fa-arrow-circle-up');
    gridToggleState = 0;

    var scroll = $(window).scrollTop();

    // Navigation Bar
    const nav = $('.navigation nav');
    const navTitle = $('.navigation nav h1.site-title');

    for (i = 0; i < nav.length; i++) {
        if (this.scrollY <= 500) {
            nav[i].className = '';
            navTitle[i].className = 'site-title';
        } else {
            nav[i].className = 'scroll';
            navTitle[i].className = 'site-title scroll'
        }
    }

    // Homepage Images
    let width = $(window).width();

    const images = $('section.service section.background-img img');

    if (width > 600) {
  
        if (scroll <= 1000) {
            images.css('display', 'none');
        } else if (scroll <= 1800) {
            images.css('display', 'none');
            $('.image1').css('display', 'flex');
        } else if (scroll <= 2300) {
            images.css('display', 'none');
            $('.image2').css('display', 'flex');
        } else if (scroll <= 2800) {
            images.css('display', 'none');
            $('.image3').css('display', 'flex');
        } else if (scroll <= 3250) {
            images.css('display', 'none');
            $('.image4').css('display', 'flex');
        } else if (scroll <= 3550) {
            images.css('display', 'none');
            $('.image5').css('display', 'flex');
        } else {
            images.css('display', 'none');
            $('.image6').css('display', 'flex');
        }

    } 
});