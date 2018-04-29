# easy-soap-request

[![Travis](https://img.shields.io/travis/circa10a/easy-soap-request.svg?style=flat-square)](https://travis-ci.org/circa10a/easy-soap-request)
[![npm version](https://img.shields.io/npm/v/easy-soap-request.svg?style=flat-square)](https://www.npmjs.com/package/easy-soap-request)
[![npm downloads](https://img.shields.io/npm/dm/easy-soap-request.svg?style=flat-square)](https://npm-stat.com/charts.html?package=easy-soap-request&from=2018-03-29)
[![Dependencies status](https://img.shields.io/david/circa10a/easy-soap-request.svg?style=flat-square)](https://david-dm.org/circa10a/easy-soap-request#info=dependencies)
[![Dev Dependencies status](https://img.shields.io/david/dev/circa10a/easy-soap-request.svg?style=flat-square)](https://david-dm.org/circa10a/easy-soap-request?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/circa10a/easy-soap-request/badge.svg?style=flat-square)](https://snyk.io/test/github/circa10a/easy-soap-request?targetFile=package.json)
[![Coveralls Status](https://img.shields.io/coveralls/github/circa10a/easy-soap-request.svg?style=flat-square)](https://coveralls.io/github/circa10a/easy-soap-request)

[![NPM](https://nodei.co/npm/easy-soap-request.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/easy-soap-request)

A small library to make SOAP requests easier

## Installation

```bash
npm install easy-soap-request
```

## Requirements
  - Node.js >=7.6.0 (async/await support)

## Usage

```javascript
const soapRequest = require('easy-soap-request');
const fs = require('fs');

// example data
const url = 'https://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php';
const headers = {
  'user-agent': 'sampleTest',
  'Content-Type': 'text/xml;charset=UTF-8',
  'soapAction': 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode',
};
const xml = fs.readFileSync('test/zipCodeEnvelope.xml', 'utf-8');

// usage of module
const example = async () => {
  const { response } = await soapRequest(url, headers, xml);
  const { body, statusCode } = response;
  console.log(body);
  console.log(statusCode);
};

// invoke
example();
```

## Tests

* [Example](https://github.com/circa10a/easy-soap-request/tree/master/test)
