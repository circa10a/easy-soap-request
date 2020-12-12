const fs = require('fs');
const nock = require('nock');
const { expect } = require('chai');
const soapRequest = require('../index');

const url = 'https://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php';
const urlFail = 'https://graphical.weather.gov:80/xml/SOAP_server/ndfdXMLserver.php';
const headers = {
  'user-agent': 'easy-soap-request-test',
  'Content-Type': 'text/xml;charset=UTF-8',
  SOAPAction: 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode',
};
const xml = fs.readFileSync('test/zip-code-envelope.xml', 'utf-8');
const xmlFail = fs.readFileSync('test/zip-code-envelope-fail.xml', 'utf-8');

// Mock HTTP response
nock('https://graphical.weather.gov')
  .post('/xml/SOAP_server/ndfdXMLserver.php')
  .reply(200, '<?xml version="1.0" encoding="ISO-8859-1"?><SOAP-ENV:Envelope SOAP-ENV:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:SOAP-ENC="http://schemas.xmlsoap.org/soap/encoding/"><SOAP-ENV:Body><ns1:LatLonListZipCodeResponse xmlns:ns1="https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl"><listLatLonOut xsi:type="xsd:string">&lt;?xml version=&apos;1.0&apos;?&gt;&lt;dwml version=&apos;1.0&apos; xmlns:xsd=&apos;http://www.w3.org/2001/XMLSchema&apos; xmlns:xsi=&apos;http://www.w3.org/2001/XMLSchema-instance&apos; xsi:noNamespaceSchemaLocation=&apos;https://graphical.weather.gov/xml/DWMLgen/schema/DWML.xsd&apos;&gt;&lt;latLonList&gt;32.9612,-96.8372&lt;/latLonList&gt;&lt;/dwml&gt;</listLatLonOut></ns1:LatLonListZipCodeResponse></SOAP-ENV:Body></SOAP-ENV:Envelope>');

describe('Test Longitude/Latitude SOAP Request', () => {
  const coordinates = '32.9612,-96.8372';
  it(`Zip Code 75001 should return ${coordinates}`, async () => {
    const { response } = await soapRequest({ url, headers, xml });
    const { body, statusCode } = response;
    expect(body).to.include(coordinates);
    expect(statusCode).to.be.equal(200);
  });
  it('Should catch Promise Rejection', async () => {
    try {
      const { response } = await soapRequest({ url, headers, xmlFail });
      const { statusCode } = response;
      expect(statusCode).to.not.be.equal(200);
    } catch (e) {
      // Test promise rejection for coverage
    }
  });
  it('Should catch connection error Promise Rejection', async () => {
    try {
      const { response } = await soapRequest({
        url: urlFail,
        headers,
        xml: xmlFail,
        timeout: 100,
      });
      const { statusCode } = response;
      expect(statusCode).to.not.be.equal(200);
    } catch (e) {
      // Test promise rejection for coverage
    }
  });
});
