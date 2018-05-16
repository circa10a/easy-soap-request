const request = require('request');

/**
 * @author Caleb Lemoine
 * @param {string} url endpoint URL
 * @param {string} headers  HTTP headers, can be string or object
 * @param {string} xml SOAP envelope, can be read from file or passed as string
 * @promise response
 * @reject {error}
 * @fulfill {body,statusCode}
 * @returns {Promise.response{body,statusCode}}
 */
module.exports = function soapRequest(url, headers, xml) {
  return new Promise((resolve, reject) => {
    request.post({
      url,
      headers,
      body: xml,
    }, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        resolve({
          response: {
            body,
            statusCode: response.statusCode,
          },
        });
      }
    });
  });
};
