const axios = require('axios');

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
    axios({
      method: 'post',
      url,
      headers,
      data: xml,
    }).then((response) => {
      resolve({
        response: {
          body: response.data,
          statusCode: response.status,
        },
      });
    }).catch((error) => {
      console.log('SOAP FAIL: ' + error);
      reject(error.response.data);
    });
  });
};
