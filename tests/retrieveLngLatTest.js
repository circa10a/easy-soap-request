#!/usr/bin/env node
const request = require('../index');
const fs = require('fs');
const { expect } = require('chai');

const url = 'https://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php';
const headers = {
  'user-agent': 'node.js',
  'Content-Type': 'text/xml;charset=UTF-8',
  'SOAPAction': 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode',
};
const xml = fs.readFileSync('tests/zipCodeEnvelope.xml', 'utf-8');

describe('Test Longitude/Latitude SOAP Request', () => {
  const coordinates = '32.9612,-96.8372';
  it(`Zip Code 75001 should return ${coordinates}`, async () => {
    expect(await request(url, headers, xml)).to.include(coordinates);
  });
  it('Zip Code 75001 should not return false positive', async () => {
    expect(await request(url, headers, xml)).to.not.include('coordinates');
  });
});
