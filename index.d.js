/**
 * Deno module for easy-soap-request
 * @author Caleb Lemoine
 * @param {object} opts easy-soap-request options
 * @param {string} opts.url endpoint URL
 * @param {object} opts.headers  HTTP headers, can be string or object
 * @param {string} opts.xml SOAP envelope, can be read from file or passed as string
 * @param {object} opts.extraOpts Object of additional fetch parameters
 * @promise response
 * @reject {error}
 * @fulfill {body,statusCode}
 * @returns {Promise.response{body,statusCode}}
 */
export default function soapRequest(opts = {
  url: '',
  headers: {},
  xml: '',
  extraOpts: {},
}) {
  const {
    url,
    headers,
    xml,
    extraOpts,
  } = opts;
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers,
      body: xml,
      ...extraOpts,
    }).then(async (response) => {
      resolve({
        response: {
          headers: response.headers,
          body: await response.text(),
          statusCode: response.status,
        },
      });
    }).catch(async (error) => {
      if (error.response) {
        console.error(`SOAP FAIL: ${error}`);
        reject(await error.response.text());
      } else {
        console.error(`SOAP FAIL: ${error}`);
        reject(error);
      }
    });
  });
}
