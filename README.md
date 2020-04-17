# MailJS-sdk

[![NPM](https://img.shields.io/npm/v/mailjs-sdk.svg)](https://www.npmjs.com/package/mailjs-sdk)

SDK for mailjs.lucacastelnuovo.nl

## Example

```javascript
const MailJS = require("mailjs-sdk");
const access_token = "JWTTOKEN";

// Send data from object
const data = {
  name: "fooBar",
  email: "fooBar@gmail.com",
};
MailJS.send(access_token, data).then(
  (response) => {
    console.log("SUCCESS", response);
  },
  (error) => {
    console.log("FAILED", error);
  }
);

// MailJS will collect formdata,
// just make sure you stop the form submission
// Add this inside maybe an eventlistener
const form = ".form"; // querySelector string for form
/* OR */
const form = document.querySelector(".form"); // pass form element
MailJS.sendForm(access_token, form).then(
  (response) => {
    console.log("SUCCESS", response);
  },
  (error) => {
    console.log("FAILED", error);
  }
);
```

## LICENSE [MIT](LICENSE)
