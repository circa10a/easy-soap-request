const axios = require('axios');

/**
 * @author Caleb Lemoine
 * @param {object} opts easy-soap-request options
 * @param {string} opts.method HTTP request method
 * @param {string} opts.url endpoint URL
 * @param {object} opts.headers  HTTP headers, can be string or object
 * @param {string} opts.xml SOAP envelope, can be read from file or passed as string
 * @param {int} opts.timeout Milliseconds before timing out request
 * @param {object} opts.proxy Object with proxy configuration
 * @param {int} opts.maxBodyLength Limit body size being sent(bytes)
 * @param {int} opts.maxContentLength Limit content size being sent(bytes)
 * @param {object} opts.extraOpts Object of additional axios parameters
 * @promise response
 * @reject {error}
 * @fulfill {body,statusCode}
 * @returns {Promise.response{body,statusCode}}
 */
module.exports = function soapRequest(opts = {
  method: 'POST',
  url: '',
  headers: {},
  xml: '',
  timeout: 10000,
  proxy: {},
  maxBodyLength: Infinity,
  maxContentLength: Infinity,
  extraOpts: {},
}) {
  const {
    method,
    url,
    headers,
    xml,
    timeout,
    proxy,
    maxBodyLength,
    maxContentLength,
    extraOpts,
  } = opts;
  return axios({
    method: method || 'POST',
    url,
    headers,
    data: xml,
    timeout,
    proxy,
    maxBodyLength,
    maxContentLength,
    ...extraOpts,
  }).then((response) => ({
    response: {
      headers: response.headers,
      body: response.data,
      statusCode: response.status,
    },
  }));
};
