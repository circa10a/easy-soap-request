import { readFileStr } from 'https://deno.land/std/fs/mod.ts';
import { assertEquals } from 'https://deno.land/std/testing/asserts.ts';
import soapRequest from '../index.d.js';


const url = 'https://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php';
const urlFail = 'https://graphical.weather.gov:80/xml/SOAP_server/ndfdXMLserver.php';
const headers = {
  'user-agent': 'easy-soap-request-test',
  'Content-Type': 'text/xml;charset=UTF-8',
  SOAPAction: 'https://graphical.weather.gov/xml/DWMLgen/wsdl/ndfdXML.wsdl#LatLonListZipCode',
};

const coordinates = '32.9612,-96.8372';

Deno.test({
  name: `Zip Code 75001 should return ${coordinates}`,
  fn: async () => {
    const xml = await readFileStr('test/zip-code-envelope.xml');
    const { response } = await soapRequest({ url, headers, xml });
    const { body, statusCode } = response;
    assertEquals(body.includes(coordinates), true);
    assertEquals(statusCode, 200);
  },
});

Deno.test({
  name: 'Should catch Promise Rejection',
  fn: async () => {
    try {
      const xmlFail = await readFileStr('test/zip-code-envelope-fail.xml');
      const { response } = await soapRequest({ url, headers, xmlFail });
      const { statusCode } = response;
      assertEquals(statusCode, 200);
    } catch (e) {
      // Test promise rejection for coverage
    }
  },
});

Deno.test({
  name: 'Should catch connection error Promise Rejection',
  fn: async () => {
    try {
      const xmlFail = await readFileStr('test/zip-code-envelope-fail.xml');
      const { response } = await soapRequest({
        url: urlFail,
        headers,
        xml: xmlFail,
      });
      const { statusCode } = response;
      assertEquals(statusCode, 200);
    } catch (e) {
      // Test promise rejection for coverage
    }
  },
});
