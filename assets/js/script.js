$(window).ready(function(){
    $('.individual-project').empty();
    $('.individual-project').load('/projects/project1');
    
    // $('section.background-section .blockquote').animate({
    //     opacity: 1,
    //     bottom: '+=100'
    // }, 1500);

    $('section.blockquote-section').effect("fold", { mode : "show",  size : 105}, 2000);
});

//Toggles!1

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

$('button#homepage_navToAbout').click(function(){
    $([document.documentElement, document.body]).animate({  
        scrollTop: $('#about').offset().top
    }, 1000);
});

$('button#homepage_navToService').click(function(){
    $([document.documentElement, document.body]).animate({
        scrollTop: $('#service').offset().top
    }, 1500);
});

$(window).resize(function(){    
    let width = $(window).width();
    //console.log(width);

    if (width > 1050) {
        $('section.project-section .buttons').fadeIn('slow');
    } else {
        $('section.project-section .buttons').fadeOut('slow');
        projectArrow.addClass('fa-chevron-down').removeClass('fa-chevron-up');
        projectDropdownState = 0;
    }
})

$(window).scroll(function(){

    var scroll = $(window).scrollTop();

    // Navigation Bar
    const nav = $('.navigation nav, .navigation nav h1');

    for (i = 0; i < nav.length; i++) {
        if (this.scrollY <= 500) {
            nav[i].className = '';
        } else {
            nav[i].className = 'scroll';
        }
    }

    // Homepage Images
    let width = $(window).width();

    const images = $('section.service section.background-img img');

    if (width > 1050) {
  
        if (scroll <= 1500) {
            images.css('display', 'none');
        } else if (scroll <= 2500) {
            images.css('display', 'none');
            $('.image1').css('display', 'flex');
        } else if (scroll <= 3200) {
            images.css('display', 'none');
            $('.image2').css('display', 'flex');
        } else if (scroll <= 3800) {
            images.css('display', 'none');
            $('.image3').css('display', 'flex');
        } else {
            images.css('display', 'none');
            $('.image4').css('display', 'flex');
        }
    } else if (width > 600) {

        if (scroll <= 1800) {
            images.css('display', 'none');
        } else if (scroll <= 2900) {
            images.css('display', 'none');
            $('.image1').css('display', 'flex');
        } else if (scroll <= 3400) {
            images.css('display', 'none');
            $('.image2').css('display', 'flex');
        } else if (scroll <= 3900) {
            images.css('display', 'none');
            $('.image3').css('display', 'flex');
        } else {
            images.css('display', 'none');
            $('.image4').css('display', 'flex');
        }
    }
})

$('button#project1').click(function(){
    $('.individual-project').empty();
    $('.individual-project').load('/akrivis/projects/project1');
});

$('button#project2').click(function(){
    $('.individual-project').empty();
    loadProject2JSON();
});

$('button#project3').click(function(){
    $('.individual-project').empty();
    $('.individual-project').load('/akrivis/projects/project3');
});

$(document).ready(function(){


    function createProjectButtonDiv(buttonName) {

        const buttonInnerDiv = $('<div>', {

        });
    
        return buttonInnerDiv;
    }

    // function createProjectButtonDivContent(buttonName, img) {

    //     buttonName = $('<p>', {
    //         html: 'this is a test'
    //     });

    //     img = $('<img>', {
    //         src: '/assets/img/project-icon.png'
    //     });

    //     return createProjectButtonDiv(buttonName, img);
    // }

    function createProjectButton(buttonNumber, buttonName) {
        
        const button = $('<button>', {
            id: 'project' + buttonNumber,
            html: buttonName,
            attr: ('data-caption', buttonName)
        });
    
        return button;
    }
    
    function prepareProjectButton(object) {
        
        const buttonsDiv = $('<div>', {
            class: 'buttons'
        });
    
        for (var i = 0; i<arguments.length; i++) {
            object = arguments[i];
            buttonsDiv.append(createProjectButton(object.buttonNo, object.buttonDes));
        }
    
        return buttonsDiv;
    }
    
    let projectBtnSection = $('section.project-section .catalog');
    projectBtnSection.append(prepareProjectButton(
        {buttonNo: '1', buttonDes: 'Project 1a'},
        {buttonNo: '2', buttonDes: 'Project 2a'},
        {buttonNo: '3', buttonDes: 'Project 3a'},
        {buttonNo: '4', buttonDes: 'Project 3a'},
    ));

});

function loadProject2JSON() {
    $.ajax({
        type: 'GET',
        url: '/akrivis/assets/json/stuff.json',
        contentType: 'application/json; charset=UTF-8',
        dataType: 'json',
        success: function(response) {
            console.log(response);

            listGroupDiv = $('<div>', {
                class: 'list-group-div'
            });

            $.each(response, function(key, value) {
                //$('.people').append(document.createTextNode(value.Name))

                listGroupItem = $('<li>', {
                    class: 'list-group-item'
                });

                var ajaxTitle = $('<h1>');
                var listName = $('<h1>');
                var listCity = $('<h2>');
                var listAlignment = $('<h3>');
                var listBorn = $('<p>');
                var listPicture = $('<img>');
                var listPictureSrc = value.Picture;
                console.log(listPictureSrc);

                ajaxTitle.html("First JSON AJAX");
                listName.html(document.createTextNode(value.Name));
                listCity.html(document.createTextNode(value.City));
                listAlignment.html(document.createTextNode(value.Alignment));
                listBorn.html(document.createTextNode(value.Born));
                listPicture.attr("src", listPictureSrc);
                console.log(listPicture.attr("src"));

                listGroupItem.append(ajaxTitle);
                listGroupItem.append(listName);
                listGroupItem.append(listCity);
                listGroupItem.append(listAlignment);
                listGroupItem.append(listBorn);
                listGroupItem.append(listPicture);
                listGroupDiv.append(listGroupItem);
            });

            $('.individual-project').append(listGroupDiv);
        },
        error: function(response) {
            console.log("error " + response);
        }
    });
}