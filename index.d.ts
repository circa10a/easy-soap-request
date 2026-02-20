import { AxiosProxyConfig, AxiosRequestConfig, AxiosResponseHeaders, RawAxiosResponseHeaders } from 'axios';

export interface SoapRequestOptions {
  /** endpoint URL */
  url: string;
  /** HTTP headers, can be string or object */
  headers: Record<string, string>;
  /** SOAP envelope, can be read from file or passed as string */
  xml: string;
  /** HTTP request method (default: 'POST') */
  method?: string;
  /** Milliseconds before timing out request */
  timeout?: number;
  /** Object with proxy configuration */
  proxy?: AxiosProxyConfig | false;
  /** Limit body size being sent (bytes) */
  maxBodyLength?: number;
  /** Limit content size being sent (bytes) */
  maxContentLength?: number;
  /** Object of additional axios parameters */
  extraOpts?: Omit<AxiosRequestConfig, 'method' | 'url' | 'headers' | 'data' | 'timeout' | 'proxy' | 'maxBodyLength' | 'maxContentLength'>;
}

export interface SoapResponse<T = string> {
  response: {
    headers: RawAxiosResponseHeaders | AxiosResponseHeaders;
    body: T;
    statusCode: number;
  };
}

/**
 * A small library to make SOAP requests easier
 * @author Caleb Lemoine
 * @param opts easy-soap-request options
 * @returns Promise resolving to the SOAP response
 */
export default function soapRequest<T = string>(opts: SoapRequestOptions): Promise<SoapResponse<T>>;
