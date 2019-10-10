# 3.0.2(2019-10-09)

## Changed

- Added `maxContentLength` parameter default of `Infinity`. See [axios docs](https://github.com/axios/axios#request-config)

## Fixed

- [#27](https://github.com/circa10a/easy-soap-request/issues/27)

# 3.0.1(2019-10-02)

## Changed

- Fix typo in docs

# 3.0.0(2019-10-01)

## Changed

- Changed format of input parameters from positional to object to follow traditional javascript library patterns.

**Old format of input parameters:**

```javascript
const { response } = await soapRequest(url, headers, xml, 1000);
```

**New format of input parameters:**

```javascript
const { response } = await soapRequest({ url: url, headers: headers, xml: xml, timeout: 1000 });
```

## Updated

- Dependencies

## Added

- Added changelog(#24)
