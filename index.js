#!/usr/bin/env node
const request = require('request');

/**
 * @author Caleb Lemoine
 * @param {string} url - endpoint URL
 * @param {string} headers - HTTP headers, can be string or object
 * @param {string} xml - SOAP envelope, can be read from file or passed as string
 * @returns {string} - Returns body of reponse
 */
module.exports = async function soapRequest(url, headers, xml) {
  return new Promise((resolve, reject) => {
    request
      .post({
        url,
        headers,
        body: xml,
      }, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          resolve(body);
        }
      });
  });
};
