# MailJS-sdk

[![NPM](https://img.shields.io/npm/v/mailjs-sdk.svg)](https://www.npmjs.com/package/mailjs-sdk)

SDK for mailjs.lucacastelnuovo.nl

## Example

```javascript
const MailJS = require("mailjs-sdk");

const data = {
  foo: "Bar",
};

const access_token = "JWTTOKEN";
MailJS.send(access_token, data).then(
  (response) => {
    console.log("SUCCESS", response);
  },
  (error) => {
    console.log("FAILED", error);
  }
);
```

## LICENSE [MIT](LICENSE)
