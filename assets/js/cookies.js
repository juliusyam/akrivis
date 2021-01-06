const cookieStorage = {
    getItem: (key) => {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({ ...acc, [key.trim()]: value }), {});
        return cookies[key];
    },
    setItem: (key, value) => {
        document.cookie = `${key}=${value}`
    },
};

const storageType = cookieStorage;
const consentPropertyName = 'akrivis-consent';

//If the keyname is present, or these is a value associated with key name, return false, no popup will happen
let shouldShowPopup = () => !storageType.getItem(consentPropertyName);
let saveToStorage = () => storageType.setItem(consentPropertyName, true);

$(document).ready(function(){

    const consentPopup = $('<section>', {
        class: 'consent-modal'
    });

    const title = $('<h1>', {
        html: 'Cookies'
    });

    const des = $('<p>', {
        html: 'This site uses cookies: <a href="privacy-policy">Find Out More</a>'
    })

    const acceptBtn = $('<button>', {
        class: 'accept',
        html: 'I Understand'
    });

    consentPopup.append(title);
    consentPopup.append(des);
    consentPopup.append(acceptBtn);

    if(shouldShowPopup() == true) {
        $('body').append(consentPopup).css('display', 'block');

        $(acceptBtn).click(function(){
            consentPopup.css('display', 'none');
            const consent = true;
            if (consent == true) {
                saveToStorage();
            }
        });
    }
});
