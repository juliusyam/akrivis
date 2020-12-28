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
---

{% include projects.html %}

<script>
$(document).ready(function(){

    var totalButtonAmount = 0;

    function createProjectButtonDivP(buttonName) {

        const p = $('<p>', {
            html: buttonName
        });

        return p;
    }

    function createProjectButtonDivImg() {

        const img = $('<img>', {
            src: '/akrivis/assets/img/project-icon.png'
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
        console.log('totalButtonAmount = ' + totalButtonAmount);

        return buttonsDiv;
    }
    
    var projectBtnSection = $('section.project-section .catalog');
    projectBtnSection.append(prepareProjectButton(


        //This section is all you need to edit!
        {buttonNo: '1', buttonDes: 'Project 1'},
        {buttonNo: '2', buttonDes: 'Project 2'},
        {buttonNo: '3', buttonDes: 'Project 3'},
        {buttonNo: '4', buttonDes: 'Project 4'},
    ));

    function projectButtonClick(number) {

        var buttonID = 'project' + number;
        var getButtonID = 'button#' + buttonID;
        var loadURL = '/akrivis/projects/' + buttonID;

        $(getButtonID).click(function(){
            $('.individual-project').empty();
            $('.individual-project').load(loadURL);
        });
        console.log(buttonID);
        console.log(getButtonID);
        console.log(loadURL);
    }

    for (var p = 1; p <= totalButtonAmount; p++) {
        projectButtonClick(p);
    }
    
});
</script>