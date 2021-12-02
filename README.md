# easy-soap-request

[![Build Status](https://github.com/circa10a/easy-soap-request/workflows/release/badge.svg)](https://github.com/circa10a/easy-soap-request/actions)
[![npm version](https://img.shields.io/npm/v/easy-soap-request.svg?style=flat-square)](https://www.npmjs.com/package/easy-soap-request)
[![npm downloads](https://img.shields.io/npm/dm/easy-soap-request.svg?style=flat-square)](https://npm-stat.com/charts.html?package=easy-soap-request&from=2018-03-29)
[![Buy Me A Coffee](https://img.shields.io/badge/BuyMeACoffee-Donate-ff813f.svg?logo=CoffeeScript&style=flat-square)](https://www.buymeacoffee.com/caleblemoine)
[![NPM](https://nodei.co/npm/easy-soap-request.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/easy-soap-request)

A small library to make SOAP requests easier via Node.js, Deno, and your browser

## Installation

```bash
npm install easy-soap-request
```

## Usage

### Node.js

```js
const soapRequest = require('easy-soap-request');
const fs = require('fs');

// example data
const url = 'https://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php';
const sampleHeaders = {
  'user-agent': 'sampleTest',
  'Content-Type': 'text/xml;charset=UTF-8',
  'soapAction': 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode',
};
const xml = fs.readFileSync('test/zip-code-envelope.xml', 'utf-8');

// usage of module
(async () => {
  const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml, timeout: 1000 }); // Optional timeout parameter(milliseconds)
  const { headers, body, statusCode } = response;
  console.log(headers);
  console.log(body);
  console.log(statusCode);
})();
```

### Deno

```js
import soapRequest from 'https://deno.land/x/easy_soap_request/index.d.js';

// example data
const url = 'https://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php';
const sampleHeaders = {
  'user-agent': 'sampleTest',
  'Content-Type': 'text/xml;charset=UTF-8',
  'soapAction': 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode',
};

// usage of module
(async () => {
  const xml = await Deno.readFile('test/zip-code-envelope.xml');
  const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml });
  const { headers, body, statusCode } = response;
  console.log(headers);
  console.log(body);
  console.log(statusCode);
})();
```

### Browser

> Note: CORS policies apply

```html
<html>
<script src="https://cdn.jsdelivr.net/npm/easy-soap-request/dist/easy-soap-request.js"></script>
<script>
    const url = 'https://my-soap-server';
    const sampleHeaders = {
        'Content-Type': 'text/xml;charset=UTF-8',
        SOAPAction: 'https://my-soap-action/something',
    };
    const xml = `<soapenv:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
                 <soapenv:Header/>
                 <soapenv:Body>Some Data</soapenv:Body>
                 </soapenv:Envelope>`;
    async function makeRequest() {
        const { response } = await soapRequest({ url: url, headers: sampleHeaders, xml: xml, timeout: 1000 });
        const { headers, body, statusCode } = response;
        console.log(headers);
        console.log(body);
        console.log(statusCode);
        document.body.innerHTML = body;
    };
    makeRequest();
</script>
<body></body>
</html>
```

## Changelog

[Changelog.md](CHANGELOG.md)

## Tests

* [Example](https://github.com/circa10a/easy-soap-request/tree/master/test)
