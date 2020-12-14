$(document).ready(function(){
    
    const form = $('<form>', {
        class: 'form',
        method: 'POST',
        enctype: 'text/plain',
        name: 'submissionForm'
    });

    const textarea = $('<textarea>', {
        id: 'message',
        placeholder: 'Enquiry',
        name: 'message'
    });

    const submit = $('<input>', {
        id: 'submit',
        type: 'submit',
        name: 'submit',
        value: 'Submit'
    });

    const br = $('<br>');

    const validationMessage = $('<span>', {
        class: 'validationMessage'
    });

    function wrapTextInput(textInputLabel, textInput) {
        const wrapper = $('<section>');

        wrapper.append(textInputLabel);
        wrapper.append(textInput);

        return wrapper;
    }

    function createTextInput(scriptInputValue, presentationInputValue) {
        let className = 'inputElement';

        const textInput = $('<input>', {
            class: className,
            id: className + '_' + scriptInputValue,
            type: 'text',
            name: scriptInputValue
        });

        const textInputLabel = $('<label>', {
            class: 'textInput',
            html: presentationInputValue
        });

        return wrapTextInput(textInputLabel, textInput);
    };

    function prepareTextInput(object) {
        const textInputDiv = $('<div>', {
            class: 'text-input-div'
        });

        for (var i = 0; i <arguments.length; i++) {
            object = arguments[i];
            textInputDiv.append(createTextInput(object.scriptInputName, object.presentationInputName));
        }

        return textInputDiv;
    }

    function wrapCheckBox(checkbox, label) {
        const wrapper = $('<div>', {
            class: 'checkBoxDiv'
        });

        wrapper.append(checkbox);
        wrapper.append(label);

        return wrapper;
    };

    function createCheckBox(scriptValue, presentationValue) {
        let className = 'checkBoxElement_';

        const checkbox = $('<input>', {
            class: className + scriptValue,
            id: className + scriptValue,
            type: 'checkbox',
            name: 'typeOfService',
            value: presentationValue
        });

        const checkboxLabel = $('<label>', {
            class: 'checkBoxLabel',
            html: presentationValue
        });

        return wrapCheckBox(checkbox, checkboxLabel);
    };

    function prepareCheckBox(object) {
        const checkboxDiv = $('<div>', {
            class: 'checkbox-div'
        });

        for (var i = 0; i <arguments.length; i++) {
            object = arguments[i];
            checkboxDiv.append(createCheckBox(object.scriptName, object.presentationName));
        }

        return checkboxDiv;
    };

    // $('input.inputElement').mousedown(function(){
    //     //if (event.which === 1) {
    //         $('.textInput').css('color', 'red');
    //     //}
    // });

    form.append(validationMessage);
    form.append(prepareTextInput(
        {scriptInputName: 'name', presentationInputName: 'Name'},
        {scriptInputName: 'email', presentationInputName: 'Email'},
        {scriptInputName: 'phone', presentationInputName: 'Phone'},
        {scriptInputName: 'company', presentationInputName: 'Company'}
    ));
    form.append(prepareCheckBox(
        {scriptName: 'service-1', presentationName: 'Service 1'},
        {scriptName: 'service-2', presentationName: 'Service 2'},
        {scriptName: 'service-3', presentationName: 'Service 3'}
    ));
    form.append(textarea);
    form.append(br);
    form.append(submit);
    $('div.form').append(form);

    $('input.inputElement').mousedown(function(event){
        if(event.which === 1) {
            $('.textInput').css({
                'font-size': '10px',
                'font-weight': '300',
                'letter-spacing': '1px',
                'margin': '0'
            });
        } 
    });

    function validateInput(name, email, message) {
        var success = false;
        const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (success == false) {
            validationMessage.css('color', 'red');
        } 

        if (!emailRegex.test(email)) {
            // do error message
            validationMessage.html("Please Enter Valid Email Address.");
            console.log("Invalid Email");
    
        } else if (name.length < 3) {
            // do error message
            validationMessage.html("Name Must Be More than 3 Characters.");
            console.log("Invalid Name");
    
        } else if (message.length < 10) {
            // do error message
            validationMessage.html("Message Must Be More than 10 Characters.");
            console.log("Invalid Message");
    
        } else {
            success = true;
            validationMessage.css('color', 'green').html("Form Successfully Sent.");
            console.log("Success");
        }
    
        return success;
    }

    $(submit).click(function(event){
        event.preventDefault();

        const name = $('input#inputElement_name').val();
        const email = $('input#inputElement_email').val();
        const phone = $('input#inputElement_phone').val();
        const company = $('input#inputElement_company').val();

        const services = Array.prototype.map.call($('input[name=typeOfService]:checked'), function (each) {
            return each.value;
        });

        const message = $('textarea#message').val();

        if (validateInput(name, email, message)) {
            var createJSON = {
                date: new Date().toString(),
                name: name,
                email: email,
                phone: phone,
                company: company,
                services: services,
                message: message
            }
    
            var sendJSON = JSON.stringify(createJSON);
            console.log(sendJSON);

            localStorage.setItem('JSON Form', sendJSON);
            console.log('Form successfully sent');
        
            form.trigger('reset');
            $('.textInput').css({
                'font-size': '14px',
                'font-weight': '500',
                'letter-spacing': '1.5px',
                'margin-bottom': '-20px'
            });
        } else {
            console.log('Form unsuccessful');
        }
    })
});