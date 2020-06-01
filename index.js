const axios = require('axios').default;

/**
 * @author Caleb Lemoine
 * @param {object} opts easy-soap-request options
 * @param {string} opts.url endpoint URL
 * @param {object} opts.headers  HTTP headers, can be string or object
 * @param {string} opts.xml SOAP envelope, can be read from file or passed as string
 * @param {int} opts.timeout Milliseconds before timing out request
 * @param {object} opts.proxy Object with proxy configuration
 * @param {int} opts.maxContentLength Limit content/body size being sent(bytes)
 * @param {object} opts.extraOpts Object of additional axios parameters
 * @promise response
 * @reject {error}
 * @fulfill {body,statusCode}
 * @returns {Promise.response{body,statusCode}}
 */
module.exports = function soapRequest(opts = {
  url: '',
  headers: {},
  xml: '',
  timeout: 10000,
  proxy: {},
  maxContentLength: Infinity,
  extraOpts: {},
}) {
  const {
    url,
    headers,
    xml,
    timeout,
    proxy,
    maxContentLength,
    extraOpts,
  } = opts;
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      headers,
      data: xml,
      timeout,
      proxy,
      maxContentLength,
      ...extraOpts,
    }).then((response) => {
      resolve({
        response: {
          headers: response.headers,
          body: response.data,
          statusCode: response.status,
        },
      });
    }).catch((error) => {
      if (error.response) {
        console.error(`SOAP FAIL: ${error}`);
        reject(error.response);
      } else {
        console.error(`SOAP FAIL: ${error}`);
        reject(error);
      }
    });
  });
};
