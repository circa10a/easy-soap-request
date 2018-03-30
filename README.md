# easy-soap-request
A small library to make SOAP requests easier

### Installation
Using npm
```bash
npm install easy-soap-request
```

In Node.js
```javascript
const soapRequest = require('easy-soap-request');
const fs = require('fs');

//example data
const url = 'https://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php';
const headers = {
  'user-agent': 'node.js',
  SOAPAction: 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode',
  'Content-Type': 'text/xml;charset=UTF-8',
};
const xml = fs.readFileSync('tests/zipCodeEnvelope.xml', 'utf-8');

//usage of the library
const sample = async () => {
  const response = await soapRequest(url, headers, xml);  //that's it
  console.log(response);
};

//invoke
sample()
```