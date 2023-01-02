window.addEventListener('DOMContentLoaded', (event) => {

    console.log('DOM fully loaded and parsed');

    browser.tabs.query({currentWindow: true, active: true})
    .then((tabs) => {

        var currentUrl = tabs[0].url;
        
        window.document.getElementById("inject-id-url").innerText = currentUrl;
        
        var location = window.document.getElementById("inject-id-qr")

        new QRCode(location, {
                text: currentUrl,
                width: 300,
                height: 300 ,
                colorDark : "#000000",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H
            });

    })//end of browser tab query
    return;
});