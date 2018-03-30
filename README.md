# easy-soap-request
[![Build Status](https://travis-ci.org/circa10a/easy-soap-request.svg?branch=master)](https://travis-ci.org/circa10a/easy-soap-request)

[![NPM](https://nodei.co/npm/easy-soap-request.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/easy-soap-request)

A small library to make SOAP requests easier

## Installation

```bash
npm install easy-soap-request
```

## Usage

```javascript
const soapRequest = require('easy-soap-request');
const fs = require('fs');

// example data
const url = 'https://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php';
const headers = {
  'user-agent': 'node.js',
  'Content-Type': 'text/xml;charset=UTF-8',
  'SOAPAction': 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode',
};
const xml = fs.readFileSync('tests/zipCodeEnvelope.xml', 'utf-8');

// usage of module
const example = async () => {
  const response = await soapRequest(url, headers, xml);
  console.log(response);
};

// invoke
example();
```
