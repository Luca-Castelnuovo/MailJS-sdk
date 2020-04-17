const formDataToJSON = require('formdatatojson')
const _endpoint = 'https://mailjs.lucacastelnuovo.nl/submit';

const sendPost = (access_token, data) => {
    return new Promise(function (resolve, reject) {
        fetch(_endpoint, {
            headers: {
              'Authorization': `Bearer ${access_token}`,
              'Content-Type': 'application/json'
            },
            method: "POST",
            body: data
        })
            .then(res => res.json())
            .then(res => {
                if (!res.ok) reject(res);
    
                resolve(res);
            }).catch(error => {
                reject(error);
            }); 
    });
}

const send = (access_token, data) => {
    const captchaResponse = document.querySelector('#g-recaptcha-response');
    if (captchaResponse && captchaResponse.value) data['g-recaptcha-response'] = captchaResponse.value;
    
    const jsonData = JSON.stringify(data);

    return sendPost(access_token, jsonData);
}
exports.send = send;

const sendForm = (access_token, form) => {
    if (typeof form === 'string') form = document.querySelector(form);
    if (!form || form.nodeName !== 'FORM') throw 'Expected the HTML form element or the style selector of form';

    const formData = new FormData(form);
    const jsonData = formDataToJSON(formData);
    
    return sendPost(access_token, jsonData);
}
exports.sendForm = sendForm;
