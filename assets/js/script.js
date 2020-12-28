$(window).ready(function(){
    $('.individual-project').empty();
    $('.individual-project').load('/akrivis/projects/project1');
    
    // $('section.background-section .blockquote').animate({
    //     opacity: 1,
    //     bottom: '+=100'
    // }, 1500);

    $('section.blockquote-section').effect("fold", { mode : "show",  size : 105}, 2000);
});

//Toggles!

let gridToggleState = 0;

$('span#grid-toggle').click(function(){
    if (gridToggleState == 0) {
        $('.header-container .grid').fadeIn('slow').addClass('active').css('display', 'flex');
        $('div.header-container').css('justify-content', 'space-around');
        $(this).children('h5').html("Collapse");
        $(this).children('i').addClass('fa-arrow-circle-up').removeClass('fa-arrow-circle-down');
        gridToggleState = 1;
    } else {
        $('.header-container .grid').fadeOut('slow').removeClass('active').css('display', 'none');
        $('div.header-container').css('justify-content', 'center');
        $(this).children('h5').html("Find Out More");
        $(this).children('i').addClass('fa-arrow-circle-down').removeClass('fa-arrow-circle-up');
        gridToggleState = 0;
    }
});

let projectToggleState = 0;

$('span#recentProjects-toggle').click(function(){
    if (projectToggleState == 0) {
        $('.header-container .grid').fadeIn('slow').addClass('active').css('display', 'flex');
        $('div.header-container').css('justify-content', 'space-around');
        $(this).children('h5').html("Collapse");
        $(this).children('i').addClass('fa-arrow-circle-up').removeClass('fa-arrow-circle-down');
        projectToggleState = 1;
    } else {
        $('.header-container .grid').fadeOut('slow').removeClass('active').css('display', 'none');
        $('div.header-container').css('justify-content', 'center');
        $(this).children('h5').html("Find Out More");
        $(this).children('i').addClass('fa-arrow-circle-down').removeClass('fa-arrow-circle-up');
        projectToggleState = 0;
    }
});



let projectDropdownState = 0;
let projectArrow = $('section.project-section .sub-menu i');

$('section.project-section .sub-menu div').click(function(){
    if (projectDropdownState == 0) {
        $('section.project-section .buttons').fadeIn('slow').css('display', 'flex');
        projectArrow.addClass('fa-chevron-up').removeClass('fa-chevron-down');
        projectDropdownState = 1;
    } else {
        $('section.project-section .buttons').fadeOut('slow');
        projectArrow.addClass('fa-chevron-down').removeClass('fa-chevron-up');
        projectDropdownState = 0;
    }
});

$('section.project-section .buttons button').click(function() {
    let width = $(window).width();

    $([document.documentElement, document.body]).animate({  
        scrollTop: $('#project-section').offset().top
    }, 1000);

    if (width < 1050) {
        $('section.project-section .buttons').fadeOut('slow');
        projectArrow.addClass('fa-chevron-down').removeClass('fa-chevron-up');
        projectDropdownState = 0;
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

$(window).resize(function(){    
    let width = $(window).width();

    if (width > 1050) {
        $('section.project-section .buttons').fadeIn('slow');
    } else {
        $('section.project-section .buttons').fadeOut('slow');
        projectArrow.addClass('fa-chevron-down').removeClass('fa-chevron-up');
        projectDropdownState = 0;
    }
})

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
        } else if (scroll <= 3750) {
            images.css('display', 'none');
            $('.image5').css('display', 'flex');
        } else {
            images.css('display', 'none');
            $('.image6').css('display', 'flex');
        }

    } 
});



// function loadProject2JSON() {
//     $.ajax({
//         type: 'GET',
//         url: '/akrivis/assets/json/stuff.json',
//         contentType: 'application/json; charset=UTF-8',
//         dataType: 'json',
//         success: function(response) {
//             console.log(response);

//             listGroupDiv = $('<div>', {
//                 class: 'list-group-div'
//             });

//             $.each(response, function(key, value) {
//                 //$('.people').append(document.createTextNode(value.Name))

//                 listGroupItem = $('<li>', {
//                     class: 'list-group-item'
//                 });

//                 var ajaxTitle = $('<h1>');
//                 var listName = $('<h1>');
//                 var listCity = $('<h2>');
//                 var listAlignment = $('<h3>');
//                 var listBorn = $('<p>');
//                 var listPicture = $('<img>');
//                 var listPictureSrc = value.Picture;
//                 console.log(listPictureSrc);

//                 ajaxTitle.html("First JSON AJAX");
//                 listName.html(document.createTextNode(value.Name));
//                 listCity.html(document.createTextNode(value.City));
//                 listAlignment.html(document.createTextNode(value.Alignment));
//                 listBorn.html(document.createTextNode(value.Born));
//                 listPicture.attr("src", listPictureSrc);
//                 console.log(listPicture.attr("src"));

//                 listGroupItem.append(ajaxTitle);
//                 listGroupItem.append(listName);
//                 listGroupItem.append(listCity);
//                 listGroupItem.append(listAlignment);
//                 listGroupItem.append(listBorn);
//                 listGroupItem.append(listPicture);
//                 listGroupDiv.append(listGroupItem);
//             });

//             $('.individual-project').append(listGroupDiv);
//         },
//         error: function(response) {
//             console.log("error " + response);
//         }
//     });
// }