---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Our Projects
description: Feel Free to Browse around!

# Blockquote Section
block1-title: Our Focus
block1-description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint totam quisquam rem impedit temporibus quam voluptate excepturi commodi dolorum, autem nihil odio? Cum numquam similique illo, labore cupiditate cumque nemo!

block2-title: What We Strive?
block2-description: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, voluptatem animi nesciunt repudiandae error a magnam quo excepturi facilis dolores voluptates natus, illo vel provident minus libero sit accusantium modi.

block3-title: Our Achievements
block3-description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores in harum porro explicabo doloribus dolore placeat, id commodi accusantium quaerat corrupti itaque dolorum qui dolor cumque quod. Minus, nemo inventore. quaerat corrupti itaque dolorum qui dolor cumque quod. Minus, nemo inventore.

# Please scroll to line 109 to add buttons!
---

{% include projects.html %}

<script>
$(document).ready(function(){

    var totalButtonAmount = 0;
    var projectDropdownState = 0;
    var projectArrow = $('section.project-section .sub-menu i');

    var width = $(window).width();
    $(window).on('resize', function() {
        if ($(this).width() !== width) {
            width = $(this).width();
            //console.log('$(this).width() = ' + width);
        }

        if (width > 1050) {
            $('section.project-section .buttons').fadeIn('slow');
        } else {
            $('section.project-section .buttons').fadeOut('slow');
            projectArrow.addClass('fa-chevron-down').removeClass('fa-chevron-up');
            projectDropdownState = 0;
        }
    });

    function createProjectButtonDivP(buttonName) {

        const p = $('<p>', {
            html: buttonName
        });

        return p;
    }

    function createProjectButtonDivImg() {

        const img = $('<img>', {
            src: '/assets/img/project-icon.png'
        });

        return img;
    }

    function createProjectButtonDiv(buttonName) {

        const buttonInnerDiv = $('<div>');
        
        buttonInnerDiv.append(createProjectButtonDivImg());
        buttonInnerDiv.append(createProjectButtonDivP(buttonName));
    
        return buttonInnerDiv;
    }

    function createProjectButton(buttonNumber, buttonName) {
        
        const button = $('<button>', {
            id: 'project' + buttonNumber,
            class: 'each-project-btn'
            // html: buttonName
        });

        button.append(createProjectButtonDiv(buttonName));
    
        return button;
    }
    
    function prepareProjectButton(object) {
        
        const buttonsDiv = $('<div>', {
            class: 'buttons'
        });
    
        for (var i = 0; i < arguments.length; i++) {
            object = arguments[i];
            buttonsDiv.append(createProjectButton(object.buttonNo, object.buttonDes));
        }

        totalButtonAmount = i;
        //console.log('totalButtonAmount = ' + totalButtonAmount);

        return buttonsDiv;
    }
    
    var projectBtnSection = $('section.project-section .catalog');
    projectBtnSection.append(prepareProjectButton(


        //This section is all you need to edit!
        {buttonNo: '1', buttonDes: 'Employee Exit Survey Analysis'},
        {buttonNo: '2', buttonDes: 'Staff Retention Analysis'},
        {buttonNo: '3', buttonDes: 'COVID-19 Return to the Office Analysis'},
        {buttonNo: '4', buttonDes: 'Company Culture and Organizational-Health-Analysis'},
    ));

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

    function projectButtonClick(number) {

        var buttonID = 'project' + number;
        var getButtonID = 'button#' + buttonID;
        var loadURL = '/projects/' + buttonID;

        $(getButtonID).click(function(){
            $('.individual-project').empty();
            $('.individual-project').load(loadURL);

            $([document.documentElement, document.body]).animate({  
                scrollTop: $('#project-section').offset().top
            }, 1000);

            if (width < 1050) {
                $('section.project-section .buttons').fadeOut('slow');
                projectArrow.addClass('fa-chevron-down').removeClass('fa-chevron-up');
                projectDropdownState = 0;
            }
        });
        // console.log(buttonID);
        // console.log(getButtonID);
        // console.log(loadURL);
    }

    for (var p = 1; p <= totalButtonAmount; p++) {
        projectButtonClick(p);
    }
    
});
</script>

